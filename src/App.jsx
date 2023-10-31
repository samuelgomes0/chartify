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

  return <></>;
}
