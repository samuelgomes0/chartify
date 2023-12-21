import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { fetchUserTopItems } from "../../services/fetchUserTopItems";
import { Skeleton } from "../Skeleton";

export function Artists() {
  const [artists, setArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUserTopItems("artists", "long_term").then((data) => {
      setArtists(data.items);
      setIsLoading(false);
    });
  }, []);

  const handleClickRedirectToArtist = (id) => {
    window.open(artists[id].external_urls.spotify);
  };

  return (
    <>
      <Header />
      <section className="m-auto mb-8 flex max-w-[1200px] flex-col">
        <h1 className="py-12 text-center font-serif text-4xl">Artists</h1>
        {isLoading ? (
          <Skeleton />
        ) : (
          <ul className="flex flex-wrap items-start justify-center gap-8 xl:justify-between">
            {artists.map(({ id, images, name, genres }, index) => {
              return (
                <li key={id} className="flex w-[200px] flex-col">
                  <div className="flex w-[200px] justify-center overflow-hidden rounded-lg shadow-md">
                    <img
                      className="block max-h-[200px] max-w-full cursor-pointer object-cover transition-all duration-200 ease-in-out hover:scale-110"
                      src={images[0].url}
                      alt={name}
                      title={name}
                      onClick={() => {
                        handleClickRedirectToArtist(index);
                      }}
                    />
                  </div>
                  <div className="mt-2 flex flex-col justify-start">
                    <div className="mt-1 flex items-center gap-2">
                      <p className="text-[0.9rem]">{index + 1}.</p>
                      <p
                        className="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap text-[0.9rem] font-semibold hover:underline"
                        onClick={() => {
                          handleClickRedirectToArtist(index);
                        }}
                      >
                        {name}
                      </p>
                    </div>
                    <p className="text-xs text-gray-500">{genres[0]}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </>
  );
}
