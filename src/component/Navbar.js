import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <h1>
            <NavLink to="/">Bloggle</NavLink>
          </h1>
        </div>
        <ul className="navlinks">
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Signup</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
