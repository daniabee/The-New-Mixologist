import React from "react";
import "./Drink.css";
import PropTypes, { string, shape } from "prop-types";
import { Link } from "react-router-dom";
import { getDetails } from "../../apiCalls";

const Drink = ({ drink }) => {
  return (
    <div className="drinkThumb">
      <h1 className="drinkTitle">{drink.strDrink}</h1>
      <Link to={`/drinks/${drink.idDrink}`} className="imageCont">
        <img
          id={drink.idDrink}
          className="allDrinkImg"
          src={drink.strDrinkThumb}
          // onClick={() => getDetails(drink.idDrink)}
        />
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
