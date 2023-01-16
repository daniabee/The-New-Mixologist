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
        className={
          state.currentPage === "HOME" ? "navLink currentPage" : "navLink"
        }
        onClick={(event) => {
          changePage(event);
        }}
      >
        HOME
      </NavLink>
      <NavLink
        to="/home"
        className={
          state.currentPage === "FILTER COCKTAILS"
            ? "navLink currentPage"
            : "navLink"
        }
        onClick={(event) => {
          changePage(event);
        }}
      >
        FILTER COCKTAILS
      </NavLink>
      <NavLink
        to="/whats-my-drink"
        className={
          state.currentPage === "WHAT'S MY DRINK?"
            ? "navLink currentPage"
            : "navLink"
        }
        onClick={(event) => {
          changePage(event);
        }}
      >
        WHAT'S MY DRINK?
      </NavLink>
      <NavLink
        to="/random-drink"
        className={
          state.currentPage === "RANDOM COCKTAIL"
            ? "navLink currentPage"
            : "navLink"
        }
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
