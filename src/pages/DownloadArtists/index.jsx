import { useEffect, useRef, useState } from "react";
import { toCanvas } from "html-to-image";

import { fetchUserTopItems } from "../../services/fetchUserTopItems";
import { SelectTimeRange } from "../../components/SelectTimeRange";

export function DownloadArtists() {
  const [timeRange, setTimeRange] = useState("long_term");
  const [artists, setArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const ref = useRef(null);

  const downloadImage = () => {
    toCanvas(ref.current, { pixelRatio: 3 }).then(function (canvas) {
      const base64Image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.setAttribute("href", base64Image);
      link.setAttribute("download", "artists.png");
      link.click();
      link.remove();
    });
  };

  useEffect(() => {
    fetchUserTopItems("artists", 25, timeRange)
      .then(({ items }) => {
        setArtists(items);
      })
      .catch((error) => {
        console.log("Error fetching tracks data: ", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [timeRange]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-start px-6 py-8 sm:px-24">
      <SelectTimeRange setTimeRange={setTimeRange} />
      <button
        onClick={downloadImage}
        className="mb-8 mt-8 bg-transparent text-sm font-bold hover:text-indigo-400 hover:underline"
      >
        Download
      </button>
      {isLoading ? (
        <p className="mt-16">Loading...</p>
      ) : artists.length === 0 ? (
        <p>No artists found.</p>
      ) : (
        <ul className="grid grid-cols-5 text-center" ref={ref}>
          {artists.map(({ id, images }) => (
            <li key={id} className="flex items-center justify-center">
              <img
                loading="lazy"
                src={images[0].url}
                className="h-[56px] w-[56px] object-cover sm:h-[250px] sm:w-[250px]"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
