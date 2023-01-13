import React, { useEffect, useState, useContext } from "react";
import AppContext from "../App/AppContext";
import NavBar from "../NavBar/NavBar";
import "./RandomDrink.css";
import Logo from "/Users/danibagley/Turing/mod3/new-mixologist/src/Assets/logo.png";

const RandomDrink = () => {
  const [state, dispatch] = useContext(AppContext);

  const getRandomDrink = async () => {
    try {
      const response = await fetch(
        "http://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      const random = await response.json();
      dispatch({ type: "RANDOM_DRINK", randomDrink: random.drinks[0] });
    } catch {
      const random = {
        strDrink: "There was a problem on our end!",
        strDrinkThumb: Logo,
      };
      dispatch({ type: "RANDOM_DRINK", randomDrink: random });
    }
  };

  return (
    <div>
      <NavBar />
      <div className="drinkThumbnail">
        <h1 className="drinkName">{state.randomDrink.strDrink}</h1>
        <img className="drinkImg" src={state.randomDrink.strDrinkThumb} />
        <div className="randomButton" onClick={getRandomDrink}>
          NEW DRINK
        </div>
      </div>
    </div>
  );
};

export default RandomDrink;
