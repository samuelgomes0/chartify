import { useState } from "react";
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

  return (
    <Container>
      <nav>
        <Menu>
          <li>
            <Link className="menu-item" to="/artists">
              Artists
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
