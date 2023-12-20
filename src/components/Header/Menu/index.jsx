import { Link } from "react-router-dom";

export function Menu() {
  return (
    <nav className="m-auto border-b-[1px] border-zinc-500 bg-zinc-800 py-5">
      <ul className="flex justify-center gap-8 text-gray-100">
        <Link to="/artists" className="font-medium hover:underline">
          Top Artists
        </Link>
        <Link to="/genres" className="font-medium hover:underline">
          Top Genres
        </Link>
        <Link to="/tracks" className="font-medium hover:underline">
          Top Tracks
        </Link>
      </ul>
    </nav>
  );
}
