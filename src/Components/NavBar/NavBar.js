import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navBar">
      <NavLink className="navLink">WHAT'S MY DRINK?</NavLink>
      <NavLink className="navLink">RANDOM COCKTAIL</NavLink>
    </div>
  );
};

export default NavBar;
