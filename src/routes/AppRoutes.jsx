import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Artists } from "../pages/Artists";
import { Genres } from "../pages/Genres";
import { Tracks } from "../pages/Tracks";
import { DownloadArtists } from "../pages/DownloadArtists";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/genres" element={<Genres />} />
      <Route path="/tracks" element={<Tracks />} />
      <Route path="/artists/download" element={<DownloadArtists />} />
    </Routes>
  );
}
