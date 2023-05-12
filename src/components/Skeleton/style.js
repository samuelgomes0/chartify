import styled from "styled-components";
import { colorPalette } from "../../style/globalStyle";

export const ListSkeleton = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
    justify-content: center;
    gap: 1rem;
    overflow-x: hidden;

    .skeleton_list__item {
      width: 100%;
      height: 60px;
      margin: 0 0.25rem;
      flex-direction: row;
      align-items: center;
      gap: 1rem;
      border-radius: 5px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

      .image_container {
        flex: 0 0 60px;
        border-radius: 5px 0 0 5px;
        height: 60px;

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
`;

export const ItemSkeleton = styled.li`
  display: flex;
  flex-direction: column;
  align-items: left;
  animation: loading 1.5s infinite ease-in-out;

  .image_container {
    width: 200px;
    height: 200px;
    border-radius: 0.5rem;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    background-color: rgba(0, 0, 0, 0.1);
  }

  .info_container {
    width: 100%;
    height: 100%;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    p {
      width: 100%;
      height: 0.75rem;
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 0.25rem;
      text-align: left;

      &:nth-child(1) {
        width: 80%;
      }

      &:nth-child(2) {
        width: 40%;
      }
    }
  }

  @keyframes loading {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
`;
