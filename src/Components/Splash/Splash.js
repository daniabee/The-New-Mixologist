import React from "react";
import Title from "/Users/danibagley/Turing/mod3/new-mixologist/src/Assets/Title.png";
import "./Splash.css";
import { Link } from "react-router-dom";

const Splash = () => {
  return (
    <div className="splash">
      <img className="title" src={Title} alt="New Mixologist" />
      <Link to="/home" className="start-button">
        START
      </Link>
    </div>
  );
};

export default Splash;
