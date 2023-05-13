import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Container, Profile, Menu } from "./style";

export default function Header() {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");

    window.location.href = "/";
  };

  useEffect(() => {
    const path = window.location.pathname;
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach((item) => {
      if (item.getAttribute("href") === path) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }, []);

  return (
    <Container>
      <nav>
        <Menu>
          <li>
            <Link className="menu-item" to="/artists">
              Top Artists
            </Link>
          </li>
          <li>
            <Link className="menu-item" to="/followed-artists">
              Followed Artists
            </Link>
          </li>
          <li>
            <Link className="menu-item" to="/tracks">
              Tracks
            </Link>
          </li>
        </Menu>
      </nav>
      <Profile status={active} onClick={handleActive}>
        <span className={active ? "active" : "hide"} onClick={handleLogout}>
          Logout
        </span>
      </Profile>
    </Container>
  );
}
