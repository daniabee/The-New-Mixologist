import React from "react";
import "./Home.css";
import NavBar from "../NavBar/NavBar";
import Question from "/Users/danibagley/Turing/mod3/new-mixologist/src/Assets/Question.png";

const Home = () => {
  return (
    <div>
      <NavBar />
      <img className="question" src={Question} />
    </div>
  );
};

export default Home;
