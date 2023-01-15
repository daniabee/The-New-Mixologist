import React, { useContext } from "react";
import "./Search.css";
import AppContext from "../App/AppContext";
import { getAllDrinks } from "../../apiCalls";

const Search = () => {
  const [state, dispatch] = useContext(AppContext);

  const submitFilter = async (event) => {
    event.preventDefault();
    const drinks = await getAllDrinks(state.filter);
    dispatch({ type: "ALL_DRINKS", allDrinks: drinks.drinks });
  };

  return (
    <form className="filter" onSubmit={submitFilter}>
      <label className="filterLabel">
        Select a filter to see beverages:
        <select
          className="filterSelect"
          value={state.filter}
          onChange={(event) => {
            dispatch({ type: "FILTER_DRINKS", filter: event.target.value });
          }}
        >
          <option defaultValue="Alcoholic">Alcoholic</option>
          <option value="Non_Alcoholic">Non Alcoholic</option>
          <option value="Beer">Beer</option>
          <option value="Shot">Shot</option>
          <option value="Ordinary_Drink">Ordinary Drink</option>
          <option value="Cocktail">Cocktail</option>
        </select>
      </label>
      <input className="filterButton" type="submit" value="Submit" />
    </form>
  );
};

export default Search;
