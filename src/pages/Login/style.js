import styled from "styled-components";
import { colorPalette } from "../../style/globalStyle";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;

  @media (max-width: 768px) {
    padding: 0 1rem;
    text-align: center;

    h1,
    p {
      color: ${colorPalette.lightGrey};
    }

    #leftContainer {
      background-color: unset;
    }
  }
`;

export const LeftContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${colorPalette.black};

  h1 {
    font-size: 32px;
    line-height: 1.5;
    letter-spacing: 0.5px;
    font-family: "Merriweather", "Inter", sans-serif;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.5px;

    &:last-child {
      position: absolute;
      bottom: 1rem;
      font-size: 14px;
      color: ${colorPalette.text};
    }
  }

  button {
    width: 164px;
    height: 40px;
    margin-top: 1.25rem;
    border: none;
    border-radius: 0.25rem;
    outline: none;
    cursor: pointer;
    background-color: ${colorPalette.primary};
    color: ${colorPalette.lightGrey};
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: ${colorPalette.darkPrimary};
    }
  }
`;

export const RightContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${colorPalette.black};
    opacity: 0.25;
  }

  @media (max-width: 1024px) {
    background-position: 0 0;
  }

  @media (max-width: 768px) {
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;
