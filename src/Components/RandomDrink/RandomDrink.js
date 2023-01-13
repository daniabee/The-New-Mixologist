import React, { useEffect, useState, useContext } from "react";
import AppContext from "../App/AppContext";
import NavBar from "../NavBar/NavBar";
import "./RandomDrink.css";
import { getRandomDrink } from "../../apiCalls";
import Logo from "/Users/danibagley/Turing/mod3/new-mixologist/src/Assets/logo.png";

const RandomDrink = () => {
  const [state, dispatch] = useContext(AppContext);

  const setRandomDrink = async () => {
    const random = await getRandomDrink();
    dispatch({ type: "RANDOM_DRINK", randomDrink: random });
  };

  return (
    <div>
      <NavBar />
      <div className="drinkThumbnail">
        <h1 className="drinkName">{state.randomDrink.strDrink}</h1>
        <img className="drinkImg" src={state.randomDrink.strDrinkThumb} />
        <div className="randomButton" onClick={setRandomDrink}>
          NEW DRINK
        </div>
      </div>
    </div>
  );
};

export default RandomDrink;
