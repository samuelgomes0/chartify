import { useEffect, useState } from "react";
import Header from "../../components/Header";
import getUserTopitems from "../../services/getUserTopItems";

export default function Tracks() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    getUserTopitems("tracks").then((data) => setTracks(data));
  }, []);

  console.log(tracks);

  return (
    <>
      <Header />
      <section className="m-auto w-full max-w-screen-xl border-b">
        <div className="flex items-center justify-between">
          <h1 className="py-8 font-serif text-4xl">Tracks</h1>
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
