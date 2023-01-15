import React, { useContext } from "react";
import "./AllDrinks.css";
import Drink from "../Drink/Drink";
import AppContext from "../App/AppContext";

const AllDrinks = () => {
  const [state, dispatch] = useContext(AppContext);

  const drinks = state.allDrinks.map((item) => {
    console.log(item);
    return <Drink drink={item} />;
  });

  return <div className="allDrinksCont">{drinks}</div>;
};

export default AllDrinks;
