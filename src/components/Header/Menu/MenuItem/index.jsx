/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";

export function MenuItem({ title, to }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={to}
      className={`menu-item font-medium hover:text-indigo-400 hover:underline ${
        pathname === to ? "text-indigo-400 underline" : ""
      }`}
    >
      Top {title}
    </Link>
  );
}
