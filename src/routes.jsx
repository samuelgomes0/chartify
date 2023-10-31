import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Artists from "./pages/Artists";
import Genres from "./pages/Genres";
import Tracks from "./pages/Tracks";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/genres" element={<Genres />} />
      <Route path="/tracks" element={<Tracks />} />
    </Routes>
  );
}
