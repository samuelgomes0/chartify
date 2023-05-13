import { useState, useEffect } from "react";

import handleAuthorizationCode from "../../services/handleAuthorizationCode";
import { Container, LeftContainer, RightContainer } from "./style";

export default function Login() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    require("./assets/arcticmonkeys.jpg"),
    require("./assets/lanadelrey.jpg"),
    require("./assets/taylorswift.jpg"),
    require("./assets/tameimpala.jpg"),
    require("./assets/hers.jpg"),
    require("./assets/menitrust.jpg"),
    require("./assets/macdemarco.jpg"),
    require("./assets/gorillaz.jpg"),
    require("./assets/queensofthestoneage.jpg"),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImageIndex === images.length - 1) {
        setCurrentImageIndex(0);
      } else {
        setCurrentImageIndex(currentImageIndex + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  const currentImage = images[currentImageIndex];

  return (
    <Container>
      <LeftContainer id="leftContainer">
        <h1>Welcome!</h1>
        <p>Please, sign in with Spotify to continue</p>
        <button onClick={handleAuthorizationCode}>Sign In</button>
        <p>This app is not affiliated with Spotify AB.</p>
      </LeftContainer>
      <RightContainer
        id="backgroundImage"
        style={{
          background: `url(${currentImage})`,
        }}
      ></RightContainer>
    </Container>
  );
}
