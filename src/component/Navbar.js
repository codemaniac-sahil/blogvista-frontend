import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import { UserContext } from "../App";

function Navbar() {
  const { state } = useContext(UserContext);
  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <li>
            <NavLink to="/logout">Logout</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Signup</NavLink>
          </li>
        </>
      );
    }
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <h1>
            <NavLink to="/">Bloggle</NavLink>
          </h1>
        </div>
        <ul className="navlinks">
          <RenderMenu />
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
