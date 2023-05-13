import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import UserTopArtists from "./pages/UserTopArtists";
import UserTopTracks from "./pages/UserTopTracks";
import UserFollowedArtists from "./pages/UserFollowedArtists";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/artists" element={<UserTopArtists />} />
      <Route path="/followed-artists" element={<UserFollowedArtists />} />
      <Route path="/tracks" element={<UserTopTracks />} />
    </Routes>
  );
}
