import React, { useContext } from "react";
import "./AllDrinks.css";
import Drink from "../Drink/Drink";
import AppContext from "../App/AppContext";

const AllDrinks = () => {
  const [state, dispatch] = useContext(AppContext);
  let drinks;
  if (!state.error) {
    drinks = state.allDrinks.map((item) => {
      return <Drink key={item.idDrink} drink={item} />;
    });
  }
  return (
    <div className={state.error ? "error" : "allDrinksCont"}>
      {state.error ? <h1>There was a problem getting your drinks!</h1> : drinks}
    </div>
  );
};

export default AllDrinks;
