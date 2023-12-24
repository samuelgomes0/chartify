import { useEffect } from "react";

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

  return <></>;
}