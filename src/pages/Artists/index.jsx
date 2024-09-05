import { useEffect, useRef, useState } from "react";

import { ArtistItem } from "../../components/ArtistItem";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { SelectTimeRange } from "../../components/SelectTimeRange";
import { Skeleton } from "../../components/Skeleton";

import html2canvas from "html2canvas";
import { fetchUserTopItems } from "../../services/fetchUserTopItems";

export function Artists() {
  const [timeRange, setTimeRange] = useState("short_term");
  const [artists, setArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const ref = useRef(null);

  const handleDownloadImage = () => {
    // Antes da captura, forçar o layout a ser o do desktop
    const imgContainer = ref.current;
    const originalStyles = imgContainer.style.cssText; // Armazenar os estilos originais

    // Forçar as colunas do desktop
    imgContainer.style.display = "grid";
    imgContainer.style.gridTemplateColumns = "repeat(6, 1fr)";
    imgContainer.style.gap = "8px"; // Ajuste para manter o espaçamento das colunas

    html2canvas(imgContainer, {
      useCORS: true,
      scale: 1,
      removeContainer: true,
      onclone: (document) => {
        document.querySelectorAll(".rounded-lg").forEach((img) => {
          img.style.borderRadius = "0";
        });
      },
    }).then((canvas) => {
      const image = canvas.toDataURL("image/png");

      // Criar um elemento <a> para download
      const link = document.createElement("a");
      link.href = image;
      link.download = "tracks_image.png"; // Nome do arquivo
      document.body.appendChild(link);
      link.click(); // Simular o clique para iniciar o download
      document.body.removeChild(link); // Remover o link após o download

      // Restaurar os estilos originais após a captura
      imgContainer.style.cssText = originalStyles;
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
            onClick={handleDownloadImage}
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
