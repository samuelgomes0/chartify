import { useEffect, useState } from "react";
import Header from "../../components/Header";
import getUserTopitems from "../../services/getUserTopItems";

export default function Artists() {
  const [artists, setArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUserTopitems("artists", "long_term").then((data) => {
      setArtists(data.items);
      setIsLoading(false);
    });
  }, []);

  console.log(artists);

  return (
    <>
      <Header />
      <section className="m-auto w-full max-w-screen-xl border-b">
        <div className="flex items-center justify-between">
          <h1 className="py-8 font-serif text-4xl">Artists</h1>
          <select name="" id="">
            <option value="">Last month</option>
            <option value="">Last 6 months</option>
            <option value="">All time</option>
          </select>
        </div>
      </section>
    </>
  );
}
