import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
          <h1 className="logo">The Juicer</h1>
        <ul className="nav-links">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>Contact Us</NavLink>
          </li>
          <li>
            <NavLink to={"/cart"}><FontAwesomeIcon icon={faCartShopping} size="1.5x" /></NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;