import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import "./RandomDrink.css";

const RandomDrink = () => {
  const [randomDrink, setRandomDrink] = useState({});

  const getRandomDrink = async () => {
    const response = await fetch(
      "http://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const random = await response.json();
    setRandomDrink(random.drinks[0]);
  };

  useEffect(() => {
    getRandomDrink();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="drinkThumbnail">
        <h1 className="drinkName">{randomDrink.strDrink}</h1>
        <img className="drinkImg" src={randomDrink.strDrinkThumb} />
        <div className="randomButton" onClick={getRandomDrink}>
          RANDOM
        </div>
      </div>
    </div>
  );
};

export default RandomDrink;
