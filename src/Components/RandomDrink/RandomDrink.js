import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import "./RandomDrink.css";
import Logo from "/Users/danibagley/Turing/mod3/new-mixologist/src/Assets/logo.png";

const RandomDrink = () => {
  const [randomDrink, setRandomDrink] = useState({});
  const [error, setError] = useState(false);

  const getRandomDrink = async () => {
    try {
      const response = await fetch(
        "http://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      const random = await response.json();
      setRandomDrink(random.drinks[0]);
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    getRandomDrink();
  }, []);

  const titleHTML = error ? (
    <h1 className="drinkName"> There is a problem on our end!</h1>
  ) : (
    <h1 className="drinkName">{randomDrink.strDrink}</h1>
  );

  const imageHTML = error ? (
    <img className="drinkImg" src={Logo} />
  ) : (
    <img className="drinkImg" src={randomDrink.strDrinkThumb} />
  );

  return (
    <div>
      <NavBar />
      <div className="drinkThumbnail">
        {titleHTML}
        {imageHTML}
        <div className="randomButton" onClick={getRandomDrink}>
          NEW DRINK
        </div>
      </div>
    </div>
  );
};

export default RandomDrink;
