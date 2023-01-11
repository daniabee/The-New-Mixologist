import React from "react";
import Title from "/Users/danibagley/Turing/mod3/new-mixologist/src/Assets/Title.png";
import "./Splash.css";

const Splash = () => {
  return (
    <div className="splash">
      <img className="title" src={Title} />
      <div className="start-button"></div>
    </div>
  );
};

export default Splash;
