import styled from "styled-components";
import { colorPalette } from "../../style/globalStyle";
import user from "./assets/user.svg";
import userBold from "./assets/userBold.svg";

export const Container = styled.header`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(153, 153, 153, 0.2);
  background-color: ${colorPalette.white};

  @media (max-width: 320px) {
    button {
      font-size: 0.8rem;
    }
  }
`;

export const Menu = styled.ul`
  display: flex;
  gap: 2rem;

  .menu-item {
    font-size: 1rem;
    font-weight: 600;
    color: ${colorPalette.black};
    transition: color 0.2s ease-in-out;
    position: relative;

    &:after {
      content: "";
      width: 100%;
      height: 3px;
      position: absolute;
      top: 175%;
      left: 0;
      background: ${colorPalette.primary};
      transform: scaleX(0);
      transform-origin: center;
      transition: transform 500ms;
    }

    &:hover:after {
      transform: scaleX(1);
      transform-origin: top;
    }
  }
`;

export const Profile = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${(props) => (props.status ? userBold : user)});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  position: relative;

  span {
    padding: 0.5rem 1rem;
    text-align: center;
    display: none;
    position: absolute;
    top: 160%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.8rem;
    background-color: ${colorPalette.lightGrey};
    color: ${colorPalette.darkGray};
    border-radius: 0.5rem;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    user-select: none;
    pointer-events: none;

    &::before {
      content: "";
      position: absolute;
      top: -0.5rem;
      left: 50%;
      transform: translateX(-50%);
      border-left: 0.5rem solid transparent;
      border-right: 0.5rem solid transparent;
      border-bottom: 0.5rem solid ${colorPalette.lightGrey};
    }

    &.active {
      display: flex;
      animation: showMenu 0.2s ease-in-out forwards;
      pointer-events: all;

      &:hover {
        background-color: ${colorPalette.primary};
        color: ${colorPalette.lightGrey};

        &::before {
          border-bottom: 0.5rem solid ${colorPalette.primary};
        }
      }
    }

    &.hide {
      animation: hideMenu 0.2s ease-in-out forwards;
    }
  }

  @keyframes showMenu {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(-1.5rem);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }

  @keyframes hideMenu {
    from {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
    to {
      opacity: 0;
      transform: translateX(-50%) translateY(-1.5rem);
    }
  }
`;
