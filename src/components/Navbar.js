import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          {<h1 className="logo">The Juicer</h1>}
        </Link>
        <ul className="nav-links">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>Contact Us</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;