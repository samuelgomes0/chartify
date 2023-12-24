import { Link, useLocation } from "react-router-dom";

export function Menu() {
  const { pathname } = useLocation();

  return (
    <nav className="m-auto border-b border-zinc-700 bg-zinc-800 py-5 text-sm dark:text-gray-200 sm:text-base">
      <ul className="flex justify-center gap-8 text-gray-100">
        <Link
          to="/artists"
          className={`menu-item font-medium hover:text-indigo-400 hover:underline ${
            pathname === "/artists" ? "text-indigo-400 underline" : ""
          }`}
        >
          Top Artists
        </Link>
        <Link
          to="/tracks"
          className={`menu-item font-medium hover:text-indigo-400 hover:underline ${
            pathname === "/tracks" ? "text-indigo-400 underline" : ""
          }`}
        >
          Top Tracks
        </Link>
        {/* <Link
          to="/genres"
          className={`menu-item font-medium hover:text-indigo-400 hover:underline ${
            pathname === "/genres" ? "text-indigo-400 underline" : ""
          }`}
        >
          Top Genres
        </Link> */}
      </ul>
    </nav>
  );
}
