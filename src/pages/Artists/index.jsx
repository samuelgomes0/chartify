import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { fetchUserTopItems } from "../../services/fetchUserTopItems";

export function Artists() {
  const [artists, setArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUserTopItems("artists", "long_term").then((data) => {
      setArtists(data.items);
      setIsLoading(false);
    });
  }, []);

  console.log(artists);

  return (
    <>
      <Header />
      <section className="m-auto">
        <h1 className="py-12 text-center font-serif text-4xl">Artists</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul className="mx-20 mt-8 grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))]">
            {artists.map((artist) => {
              return (
                <li
                  key={artist.id}
                  className="justify w relative flex flex-col items-center"
                >
                  <img
                    className="h-[200px] w-full object-cover"
                    src={artist.images[0].url}
                    alt={artist.name}
                  />
                  <p className="absolute top-1/2 text-center font-semibold text-gray-200">
                    {artist.name}
                  </p>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </>
  );
}
