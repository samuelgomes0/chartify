import { useCallback, useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { Skeleton } from "../../components/Skeleton";
import { Footer } from "../../components/Footer";

import { fetchUserTopItems } from "../../services/fetchUserTopItems";
import { ArtistItem } from "../../components/ArtistItem";

export function Artists() {
  const [timeRange, setTimeRange] = useState("long_term");
  const [artists, setArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUserTopItems("artists", timeRange)
      .then((data) => {
        setArtists(data.items);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [timeRange]);

  const handleClickRedirectToArtist = useCallback(
    (id) => {
      window.open(artists[id].external_urls.spotify);
    },
    [artists],
  );

  return (
    <>
      <Header />
      <section className="m-auto mb-8 flex max-w-[1200px] flex-col">
        <h1 className="mb-8 mt-12 text-center font-serif text-4xl">Artists</h1>
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
            {artists.map(({ id, images, name, genres }, index) => {
              return (
                <ArtistItem
                  key={index}
                  id={id}
                  images={images}
                  name={name}
                  genres={genres}
                  index={index}
                  handleClickRedirectToArtist={handleClickRedirectToArtist}
                />
              );
            })}
          </ul>
        )}
      </section>
      <Footer />
    </>
  );
}
