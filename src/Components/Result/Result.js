import React, { useContext } from "react";
import AppContext from "../App/AppContext";
import { Link } from "react-router-dom";
import "./Result.css";

const Result = () => {
  const [state, dispatch] = useContext(AppContext);
  const option1 =
    "Please make sure you fill out the quiz completely before getting your drink!";
  const option2 = "Complete the quiz to see your drink!";
  const option3 = "There was a problem getting your drink!";
  const details = (
    <Link to={`/drinks/${state.myDrink.idDrink}`} className="back-button">
      DETAILS
    </Link>
  );

  return (
    <div className="result">
      <Link to="/whats-my-drink" className="back-button">
        BACK
      </Link>
      <div className="drinkThumbnail">
        <h1 className="drinkName">{state.myDrink.strDrink}</h1>
        <img className="drinkImg" src={state.myDrink.strDrinkThumb} />
        {state.myDrink.strDrink === option1 ||
        state.myDrink.strDrink === option2 ||
        state.myDrink.strDrink === option3
          ? null
          : details}
      </div>
    </div>
  );
};

export default Result;
