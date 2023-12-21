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

  const handleClickRedirectToArtist = (id) => {
    window.open(artists[id].external_urls.spotify);
  };

  return (
    <>
      <Header />
      <section className="m-auto">
        <h1 className="py-12 text-center font-serif text-4xl">Artists</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul className="mx-20 my-8 grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-8">
            {artists.map(({ id, images, name, genres }, index) => {
              return (
                <li key={id}>
                  <div className="h-[200px] w-[200px] overflow-hidden rounded-lg">
                    <img
                      className="h-[200px] w-[200px] cursor-pointer object-cover shadow-md transition-all duration-200 ease-in-out hover:scale-110"
                      src={images[0].url}
                      alt={name}
                      onClick={() => {
                        handleClickRedirectToArtist(index);
                      }}
                    />
                  </div>
                  <div className="mt-2 flex flex-col justify-start px-1">
                    <div className="flex items-center gap-2">
                      <p className="text-[0.9rem]">{index + 1}.</p>
                      <p
                        className="cursor-pointer text-[0.9rem] font-semibold hover:underline"
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
