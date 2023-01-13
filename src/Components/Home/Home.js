import React from "react";
import "./Home.css";
import NavBar from "../NavBar/NavBar";
import Question from "/Users/danibagley/Turing/mod3/new-mixologist/src/Assets/Question.png";
import Search from "../Search/Search";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <img className="question" src={Question} />
      <div className="search">
        <Search />
      </div>
    </div>
  );
};

export default Home;
