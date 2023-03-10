import React from "react";
import "./Filter.css";
import NavBar from "../NavBar/NavBar";
import Question from "../Assets/Question.png";
import Search from "../Search/Search";
import AllDrinks from "../AllDrinks.js/AllDrinks";

const Filter = () => {
  return (
    <div className="home">
      <NavBar />
      <img className="question" src={Question} />
      <div className="search">
        <Search />
      </div>
      <AllDrinks />
    </div>
  );
};

export default Filter;
