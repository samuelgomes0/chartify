import styled from "styled-components";
import { colorPalette } from "../../style/globalStyle";

export const Container = styled.footer`
  width: 100%;
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
  color: ${colorPalette.black};

  a {
    color: ${colorPalette.primary};
    text-decoration: none;
    transition: color 0.2s ease-in-out;
    font-weight: 700;

    &:hover {
      color: ${colorPalette.darkPrimary};
    }

    span {
      color: red;
    }
  }
`;
