import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Artists } from "../pages/Artists";
import { Tracks } from "../pages/Tracks";
import { PrivacyPolice } from "../pages/PrivacyPolice";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/tracks" element={<Tracks />} />
      <Route path="/privacy" element={<PrivacyPolice />} />
    </Routes>
  );
}
