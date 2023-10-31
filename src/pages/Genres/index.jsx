import Header from "../../components/Header";
import getUserTopitems from "../../services/getUserTopItems";

export default function Genres() {
  return (
    <>
      <Header />
      <section className="m-auto w-full max-w-screen-xl border-b">
        <div className="flex items-center justify-between">
          <h1 className="py-8 font-serif text-4xl">Genres</h1>
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
