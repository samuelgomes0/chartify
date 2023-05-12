import { useEffect, useState } from "react";
import GlobalStyle from "./style/globalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import handleAccessToken from "./services/handleAccessToken";

export default function App() {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");

    if (!accessToken && code) {
      handleAccessToken(code).then((token) => {
        localStorage.setItem("token", token);
        setAccessToken(token);

        window.location.href = "/artists";
      });
    }
  }, [accessToken]);

  return (
    <div className="App">
      {accessToken && <Header />}
      {accessToken && <Footer />}
      <GlobalStyle />
    </div>
  );
}
