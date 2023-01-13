import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navBar">
      <NavLink to="/home" className="navLink">
        HOME
      </NavLink>
      <NavLink to="/whats-my-drink" className="navLink">
        WHAT'S MY DRINK?
      </NavLink>
      <NavLink to="/random-drink" className="navLink">
        RANDOM COCKTAIL
      </NavLink>
    </div>
  );
};

export default NavBar;
