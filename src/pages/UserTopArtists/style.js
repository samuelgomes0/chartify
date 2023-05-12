import styled from "styled-components";
import { colorPalette } from "../../style/globalStyle";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  .user_top_things__header {
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(153, 153, 153, 0.2);

    h2 {
      margin: 2rem 0;
      font-size: 2rem;
      font-weight: 700;
    }

    select {
      width: 200px;
      padding: 0.5rem;
      border-radius: 0.25rem;
      border: 1px solid #ccc;
      outline: none;
      font-size: 0.9rem;
      font-weight: 700;
      background-color: #fff;
      color: ${colorPalette.text};
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover,
      &:focus {
        border-color: ${colorPalette.primary};
        color: ${colorPalette.primary};
      }
    }
  }
`;

export const ArtistList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const ArtistItem = styled.li`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: left;
  transition: transform 0.2s ease-in-out;

  .image_container {
    display: flex;
    justify-content: center;
    overflow: hidden;
    border-radius: 0.5rem;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }

  img {
    max-width: 100%;
    height: 200px;
    display: block;
    transition: transform 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }

  .info_container {
    margin-top: 0.75rem;
    display: flex;
    gap: 0.5rem;

    h3 {
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    h3,
    span {
      font-size: 0.9rem;
    }
  }

  p {
    font-size: 0.75rem;
    color: ${colorPalette.text};
  }
`;
