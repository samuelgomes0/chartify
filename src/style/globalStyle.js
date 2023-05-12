import { createGlobalStyle, css } from "styled-components";

export const colorPalette = {
  primary: "#7289da",
  darkPrimary: "#7F2CCB",

  black: "#191414",
  lightBlack: "#1E1E1E",

  white: "#FFFFFF",
  lightGrey: "#F4F4F4",
  gray: "#e3e3e4",

  text: "rgb(153, 153, 153)",
};

export default createGlobalStyle`${css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    list-style: none;
    text-decoration: none;

    &::selection {
      background-color: ${colorPalette.primary};
      color: ${colorPalette.lightGrey};
    }

    &:focus {
      outline-color: ${colorPalette.primary};
      color: ${colorPalette.primary};
    }
  }

  body {
    margin: 0 auto;
    background-color: ${colorPalette.lightGrey};
    color: ${colorPalette.black};
    line-height: 1.5;

    h2 {
      font-family: "Merriweather", "Inter", sans-serif;
    }

    h3 {
      text-overflow: ellipsis;
    }
  }

  // Responsive
  @media (max-width: 768px) {
    .user_top_things {
      .user_top_things__header {
        margin: 2rem 0;
        flex-direction: column;
        gap: 1rem;

        h2 {
          margin: 0;
          font-size: 1.5rem;
        }
      }

      .artist_list,
      .track_list {
        padding: 1rem;
        justify-content: center;
        gap: 1rem;
        overflow-x: hidden;

        .artist_list__item,
        .track_list__item {
          width: 100%;
          margin: 0 0.25rem;
          flex-direction: row;
          align-items: center;
          gap: 1rem;
          border-radius: 5px;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

          .image_container {
            flex: 0 0 60px;
            border-radius: 5px 0 0 5px;

            img {
              width: 60px;
              height: auto;
              background-size: cover;
            }
          }

          .info_container {
            margin: 0;
          }
        }
      }
    }
  }
`}`;
