import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Artists } from "./pages/Artists";
import { Genres } from "./pages/Genres";
import { Tracks } from "./pages/Tracks";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/genres" element={<Genres />} />
      <Route path="/tracks" element={<Tracks />} />
    </Routes>
  );
}
