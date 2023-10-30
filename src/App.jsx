import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { useEffect } from "react";
import requestAccessToken from "./services/requestAccessToken";

export default function App() {
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");

    if (code) {
      requestAccessToken(code).then(() => {
        window.history.pushState({}, null, "/dashboard");
        window.location.reload();
      });
    }
  }, []);

  return (
    <div className="flex h-screen justify-center bg-gray-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
