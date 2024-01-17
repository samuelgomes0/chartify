import { useEffect, useRef, useState } from "react";

import { Header } from "../../components/Header";
import { Skeleton } from "../../components/Skeleton";
import { Footer } from "../../components/Footer";
import { ArtistItem } from "../../components/ArtistItem";
import { SelectTimeRange } from "../../components/SelectTimeRange";

import { fetchUserTopItems } from "../../services/fetchUserTopItems";
import html2canvas from "html2canvas";

export function Artists() {
  const [timeRange, setTimeRange] = useState("short_term");
  const [artists, setArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const ref = useRef(null);

  const handleOpenImage = () => {
    html2canvas(ref.current, {
      useCORS: true,
      scale: 1,
      removeContainer: true,
      onclone: (document) => {
        document.querySelector(".imgContainer").style.gap = "0";
        document.querySelectorAll(".rounded-lg").forEach((img) => {
          img.style.borderRadius = "0";
        });
      },
    }).then((canvas) => {
      const image = canvas.toDataURL("image/png");
      const newTab = window.open();
      newTab.document.body.innerHTML = `<img src="${image}" alt="artists" />`;
    });
  };

  useEffect(() => {
    fetchUserTopItems("artists", 30, timeRange)
      .then(({ items }) => {
        setArtists(items);
      })
      .catch((error) => {
        console.log("Error fetching artists data: ", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [timeRange]);

  return (
    <>
      <Header />
      <section className="m-auto mb-4 flex max-w-[1200px] flex-col">
        <h1 className="mb-8 mt-12 text-center font-serif text-4xl">Artists</h1>
        <div className="mb-4 flex flex-col items-center justify-center gap-8 sm:mb-8 sm:flex-row sm:gap-16">
          <SelectTimeRange setTimeRange={setTimeRange} />
          {/* <Link
            to="/artists/download"
            className="bg-transparent text-sm font-bold hover:text-indigo-400 hover:underline"
          >
            Download Image
          </Link> */}
          <button
            onClick={handleOpenImage}
            className="bg-transparent text-sm font-bold hover:text-indigo-400 hover:underline"
          >
            Get Image
          </button>
        </div>
        {isLoading ? (
          <Skeleton />
        ) : artists.length === 0 ? (
          <p>No artists found.</p>
        ) : (
          <ul
            className="imgContainer m-auto flex w-full flex-col flex-nowrap items-start justify-center gap-4 px-8 py-4 sm:flex-row sm:flex-wrap sm:gap-8 sm:p-0 xl:justify-between"
            ref={ref}
          >
            {artists.map(
              ({ id, images, name, genres, external_urls }, index) => {
                return (
                  <ArtistItem
                    key={id}
                    id={id}
                    images={images}
                    name={name}
                    genres={genres}
                    index={index}
                    external_urls={external_urls}
                  />
                );
              },
            )}
          </ul>
        )}
      </section>
      <Footer />
    </>
  );
}
