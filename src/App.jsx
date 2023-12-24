import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./routes";
import { requestAccessToken } from "./services/requestAccessToken";

export function App() {
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");

    if (code) {
      requestAccessToken(code).then(() => {
        window.history.pushState({}, null, "/artists");
        window.location.reload();
      });
    }
  }, []);

  return (
    <main className="dark:bg-zinc-900 dark:text-gray-200">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </main>
  );
}
