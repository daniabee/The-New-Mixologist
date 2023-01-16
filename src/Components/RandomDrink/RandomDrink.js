import React, { useContext } from "react";
import AppContext from "../App/AppContext";
import NavBar from "../NavBar/NavBar";
import "./RandomDrink.css";
import { getRandomDrink } from "../../apiCalls";
import Logo from "../Assets/logo.png";

const RandomDrink = () => {
  const [state, dispatch] = useContext(AppContext);

  const setRandomDrink = async () => {
    const random = await getRandomDrink();

    if (random === "Error") {
      const error = {
        strDrink: "There was a problem on our end!",
        strDrinkThumb: Logo,
      };
      dispatch({ type: "RANDOM_DRINK", randomDrink: error });
    } else {
      dispatch({ type: "RANDOM_DRINK", randomDrink: random });
    }
  };

  return (
    <div>
      <NavBar />
      <div className="drinkThumbnail">
        <h1 className="drinkName">{state.randomDrink.strDrink}</h1>
        <img className="drinkImg" src={state.randomDrink.strDrinkThumb} />
        <button
          className="randomButton"
          onClick={(event) => {
            event.preventDefault();
            setRandomDrink();
          }}
          tabIndex={0}
        >
          NEW DRINK
        </button>
      </div>
    </div>
  );
};

export default RandomDrink;
