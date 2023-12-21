import { useEffect, useState } from "react";

import { Header } from "../../components/Header";

import { fetchUserTopItems } from "../../services/fetchUserTopItems";
import { Skeleton } from "../Skeleton";

export function Tracks() {
  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUserTopItems("tracks", "long_term").then((data) => {
      setTracks(data.items);
      setIsLoading(false);
    });
  }, []);

  const handleClickRedirectToTrack = (id) => {
    window.open(tracks[id].external_urls.spotify);
  };

  const handleClickRedirectToArtist = (id) => {
    window.open(tracks[id].artists[0].external_urls.spotify);
  };

  return (
    <>
      <Header />
      <section className="m-auto mb-8 flex max-w-[1200px] flex-col">
        <h1 className="py-12 text-center font-serif text-4xl">Tracks</h1>
        {isLoading ? (
          <Skeleton />
        ) : (
          <ul className="flex flex-wrap items-start justify-center gap-8 xl:justify-between">
            {tracks.map(({ id, album, name, artists }, index) => {
              return (
                <li key={id} className="flex w-[200px] flex-col">
                  <div className="flex w-[200px] justify-center overflow-hidden rounded-lg shadow-md">
                    <img
                      className="block max-w-full cursor-pointer object-cover transition-all duration-200 ease-in-out hover:scale-110"
                      src={album.images[0].url}
                      alt={name}
                      title={name}
                      onClick={() => {
                        handleClickRedirectToTrack(index);
                      }}
                    />
                  </div>
                  <div className="mt-2 flex flex-col justify-start">
                    <div className="mt-1 flex items-center gap-2">
                      <p className="text-[0.9rem]">{index + 1}.</p>
                      <p
                        className="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap text-[0.9rem] font-semibold hover:underline"
                        title={name}
                        onClick={() => {
                          handleClickRedirectToTrack(index);
                        }}
                      >
                        {name}
                      </p>
                    </div>
                    <p
                      className="cursor-pointer text-xs text-gray-500"
                      onClick={() => {
                        handleClickRedirectToArtist(index);
                      }}
                    >
                      {artists[0].name}
                    </p>
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
