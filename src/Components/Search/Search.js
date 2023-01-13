import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <form className="filter" onSubmit={console.log("hello")}>
      <label className="filterLabel">
        Select a filter to see beverages:
        <select
          className="filterSelect"
          value={"this.state.value"}
          onChange={console.log("hi")}
        >
          <option value="Alcohol">Alcoholic</option>
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

//http://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic
//http://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic

export default Search;
