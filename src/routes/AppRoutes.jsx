import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Artists } from "../pages/Artists";
import { Genres } from "../pages/Genres";
import { Tracks } from "../pages/Tracks";
import { DownloadArtists } from "../pages/DownloadArtists";
import { PrivacyPolice } from "../pages/PrivacyPolice";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/genres" element={<Genres />} />
      <Route path="/tracks" element={<Tracks />} />
      <Route path="/artists/download" element={<DownloadArtists />} />
      <Route path="/privacy" element={<PrivacyPolice />} />
    </Routes>
  );
}
