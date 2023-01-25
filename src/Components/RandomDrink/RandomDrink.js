import React, { useContext } from "react";
import AppContext from "../App/AppContext";
import NavBar from "../NavBar/NavBar";
import "./RandomDrink.css";
import { getRandomDrink } from "../../apiCalls";
import Logo from "../Assets/logo.png";
import { Link } from "react-router-dom";

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

  const details = (
    <Link to={`/drinks/${state.randomDrink.idDrink}`} className="randomButton">
      <img
        id={state.randomDrink.idDrink}
        className="drinkImg"
        src={state.randomDrink.strDrinkThumb}
      />
    </Link>
  );

  const message = (
    <img
      id={state.randomDrink.idDrink}
      className="drinkImg"
      src={state.randomDrink.strDrinkThumb}
    />
  );

  return (
    <div>
      <NavBar />
      <div className="drinkThumbnail">
        <h1 className="drinkName">{state.randomDrink.strDrink}</h1>
        {state.randomDrink.strDrink === "There was a problem on our end!" ||
        state.randomDrink.strDrink === "Click the button to get a drink!"
          ? message
          : details}
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
