import React, { useContext } from "react";
import AppContext from "../App/AppContext";
import { Link } from "react-router-dom";
import "./Result.css";

const Result = () => {
  const [state, dispatch] = useContext(AppContext);

  return (
    <div className="result">
      <Link to="/whats-my-drink" className="back-button">
        BACK
      </Link>
      <div className="drinkThumbnail">
        <h1 className="drinkName">{state.myDrink.strDrink}</h1>
        <img className="drinkImg" src={state.myDrink.strDrinkThumb} />
      </div>
    </div>
  );
};

export default Result;
