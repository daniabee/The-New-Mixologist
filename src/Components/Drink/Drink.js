import React from "react";
import "./Drink.css";
import PropTypes, { string, shape } from "prop-types";
import { Link } from "react-router-dom";

const Drink = ({ drink }) => {
  return (
    <div className="drinkThumb">
      <h1 className="drinkTitle">{drink.strDrink}</h1>
      <Link to="/cocktails/:drink" className="imageCont">
        <img className="allDrinkImg" src={drink.strDrinkThumb} />
      </Link>
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
