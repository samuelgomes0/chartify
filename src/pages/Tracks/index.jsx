import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { Skeleton } from "../../components/Skeleton";
import { Footer } from "../../components/Footer";
import { TrackItem } from "../../components/TrackItem";
import { SelectTimeRange } from "../../components/SelectTimeRange";

import { fetchUserTopItems } from "../../services/fetchUserTopItems";

export function Tracks() {
  const [timeRange, setTimeRange] = useState("short_term");
  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUserTopItems("tracks", 30, timeRange)
      .then(({ items }) => {
        setTracks(items);
      })
      .catch((error) => {
        console.log("Error fetching tracks data: ", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [timeRange]);

  return (
    <>
      <Header />
      <section className="m-auto mb-4 flex max-w-[1200px] flex-col">
        <h1 className="mb-8 mt-12 text-center font-serif text-4xl">Tracks</h1>
        <div className="mb-4 flex flex-col items-center justify-center gap-8 sm:mb-8 sm:flex-row sm:gap-16">
          <SelectTimeRange setTimeRange={setTimeRange} />
        </div>
        {isLoading ? (
          <Skeleton />
        ) : tracks.length === 0 ? (
          <p>No tracks found.</p>
        ) : (
          <ul className="m-auto flex w-full flex-col flex-nowrap items-start justify-center gap-4 px-8 py-4 sm:flex-row sm:flex-wrap sm:gap-8 sm:p-0 xl:justify-between">
            {tracks.map(
              ({ id, album, name, artists, external_urls }, index) => (
                <TrackItem
                  key={id}
                  id={id}
                  album={album}
                  name={name}
                  artists={artists}
                  index={index}
                  external_urls={external_urls}
                />
              ),
            )}
          </ul>
        )}
      </section>
      <Footer />
    </>
  );
}
