import React from "react";
import "./Result.css";

const Result = ({ myDrink }) => {
  return (
    <div className="drinkThumbnail">
      <h1 className="drinkName">{myDrink.strDrink}</h1>
      <img className="drinkImg" src={myDrink.strDrinkThumb} />
    </div>
  );
};

export default Result;
