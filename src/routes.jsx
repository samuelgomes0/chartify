import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import UserTopArtists from "./pages/UserTopTracks";
import UserTopTracks from "./pages/UserTopArtists";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/artists" element={<UserTopArtists />} />
      <Route path="/tracks" element={<UserTopTracks />} />
    </Routes>
  );
}
