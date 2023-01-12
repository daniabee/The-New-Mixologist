import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Quiz.css";
import QuizTitle from "/Users/danibagley/Turing/mod3/new-mixologist/src/Assets/quiz.png";

const Quiz = () => {
  return (
    <div>
      <NavBar />
      <img className="quizTitle" src={QuizTitle} />
      <form></form>
    </div>
  );
};

export default Quiz;
