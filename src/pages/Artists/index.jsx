import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { Skeleton } from "../../components/Skeleton";
import { Footer } from "../../components/Footer";
import { ArtistItem } from "../../components/ArtistItem";
import { SelectTimeRange } from "../../components/SelectTimeRange";

import { fetchUserTopItems } from "../../services/fetchUserTopItems";

export function Artists() {
  const [timeRange, setTimeRange] = useState("long_term");
  const [artists, setArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUserTopItems("artists", timeRange)
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
        <SelectTimeRange setTimeRange={setTimeRange} />
        {isLoading ? (
          <Skeleton />
        ) : artists.length === 0 ? (
          <p>No artists found.</p>
        ) : (
          <ul className="m-auto flex w-full flex-col flex-nowrap items-start justify-center gap-4 px-8 py-4 sm:flex-row sm:flex-wrap sm:gap-8 sm:p-0 xl:justify-between">
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
