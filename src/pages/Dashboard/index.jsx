import { Link } from "react-router-dom";

export function Dashboard() {
  return (
    <ul className="flex h-screen w-full items-center justify-center gap-16">
      <Link to="/artists" className="font-serif text-4xl">
        Top Artists
      </Link>
      <Link to="genres" className="font-serif text-4xl">
        Top Genres
      </Link>
      <Link to="tracks" className="font-serif text-4xl">
        Top Tracks
      </Link>
    </ul>
  );
}
