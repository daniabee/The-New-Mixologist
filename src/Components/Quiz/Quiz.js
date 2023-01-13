import React, { useState, useTransition } from "react";
import NavBar from "../NavBar/NavBar";
import "./Quiz.css";
import Form from "../Form/Form";

const Quiz = ({ setMyDrink }) => {
  return (
    <div>
      <NavBar />
      <Form setMyDrink={setMyDrink} />
    </div>
  );
};

export default Quiz;
