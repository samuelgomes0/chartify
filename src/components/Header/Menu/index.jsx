import { MenuItem } from "./MenuItem";

export function HeaderMenu() {
  return (
    <nav className="m-auto border-b border-zinc-700 bg-zinc-800 py-5 text-sm dark:text-gray-200 sm:text-base">
      <ul className="flex justify-center gap-8 text-gray-100">
        <MenuItem title="Artists" to="/artists" />
        <MenuItem title="Tracks" to="/tracks" />
      </ul>
    </nav>
  );
}
