import React from "react";
import { Link } from "react-router-dom";
import "./Result.css";

const Result = ({ myDrink }) => {
  return (
    <div className="result">
      <Link to="/home" className="back-button">
        BACK
      </Link>
      <div className="drinkThumbnail">
        <h1 className="drinkName">{myDrink.strDrink}</h1>
        <img className="drinkImg" src={myDrink.strDrinkThumb} />
      </div>
    </div>
  );
};

export default Result;
