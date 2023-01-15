import React from "react";
import "./Drink.css";
import PropTypes, { string, shape } from "prop-types";

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

Drink.propTypes = {
  drink: shape({
    strDrink: string.isRequired,
    strDrinkThumb: string.isRequired,
  }).isRequired,
};
