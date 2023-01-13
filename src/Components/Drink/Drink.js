import React from "react";
import "./Drink.css";

const Drink = ({ drink }) => {
  return (
    <div className="drinkThumb">
      <h1 className="drinkTitle">{drink.strDrink}</h1>
      <div className="imageCont">
        <img className="allDrinkImg" src={drink.strDrinkThumb} />
      </div>
    </div>
  );
};

export default Drink;
