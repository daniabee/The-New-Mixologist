import React, { useContext } from "react";
import Title from "../Assets/Title.png";
import "./Splash.css";
import { Link } from "react-router-dom";
import AppContext from "../App/AppContext";

const Splash = () => {
  const [state, dispatch] = useContext(AppContext);

  return (
    <div className="splash">
      <img className="title" src={Title} alt="New Mixologist" />
      <Link
        to="/filter-cocktails"
        className="start-button"
        onClick={() => {
          dispatch({
            type: "CHANGE_PAGE",
            currentPage: "FILTER COCKTAILS",
          });
        }}
      >
        START
      </Link>
    </div>
  );
};

export default Splash;
