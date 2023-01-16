import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AppContext from "../App/AppContext";
import "./NavBar.css";

const NavBar = () => {
  const [state, dispatch] = useContext(AppContext);

  const changePage = (event) => {
    dispatch({
      type: "CHANGE_PAGE",
      currentPage: event.target.innerText,
    });
  };

  return (
    <div className="navBar">
      <NavLink
        to="/"
        className="navLink"
        onClick={(event) => {
          changePage(event);
        }}
      >
        HOME
      </NavLink>
      <NavLink
        to="/home"
        className="navLink"
        onClick={(event) => {
          changePage(event);
        }}
      >
        FILTER COCKTAILS
      </NavLink>
      <NavLink
        to="/whats-my-drink"
        className="navLink"
        onClick={(event) => {
          changePage(event);
        }}
      >
        WHAT'S MY DRINK?
      </NavLink>
      <NavLink
        to="/random-drink"
        className="navLink"
        onClick={(event) => {
          changePage(event);
        }}
      >
        RANDOM COCKTAIL
      </NavLink>
    </div>
  );
};

export default NavBar;
