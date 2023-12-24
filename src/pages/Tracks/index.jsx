import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { Skeleton } from "../../components/Skeleton";
import { Footer } from "../../components/Footer";
import { TrackItem } from "../../components/TrackItem";

import { fetchUserTopItems } from "../../services/fetchUserTopItems";

export function Tracks() {
  const [timeRange, setTimeRange] = useState("long_term");
  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUserTopItems("tracks", timeRange)
      .then((data) => {
        setTracks(data.items);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [timeRange]);

  const handleClickRedirectToTrack = (id) => {
    window.open(tracks[id].external_urls.spotify);
  };

  return (
    <>
      <Header />
      <section className="m-auto mb-8 flex max-w-[1200px] flex-col">
        <h1 className="mb-8 mt-12 text-center font-serif text-4xl">Tracks</h1>
        <select
          className="m-auto mb-8 block w-[200px] border-b-2 border-gray-500 bg-transparent py-1 text-center text-sm font-semibold text-gray-500 focus:border-indigo-600 focus:text-indigo-500 focus:outline-none"
          onChange={(event) => {
            setTimeRange(event.target.value);
          }}
        >
          <option value="long_term">All Time</option>
          <option value="medium_term">Last 6 Months</option>
          <option value="short_term">Last 4 Weeks</option>
        </select>
        {isLoading ? (
          <Skeleton />
        ) : (
          <ul className="m-auto flex w-full flex-col flex-nowrap items-start justify-center gap-4 px-8 py-4 sm:flex-row sm:flex-wrap sm:gap-8 sm:p-0 xl:justify-between">
            {tracks.map(({ id, album, name, artists }, index) => (
              <TrackItem
                key={index}
                id={id}
                album={album}
                name={name}
                artists={artists}
                index={index}
                handleClickRedirectToTrack={handleClickRedirectToTrack}
              />
            ))}
          </ul>
        )}
      </section>
      <Footer />
    </>
  );
}
