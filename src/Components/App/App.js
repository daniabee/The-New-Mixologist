import "./App.css";
import AppContext from "./AppContext";
import { Route, NavLink, Routes } from "react-router-dom";
import Splash from "../Splash/Splash";
import Home from "../Home/Home";
import Quiz from "../Quiz/Quiz";
import RandomDrink from "../RandomDrink/RandomDrink";
import Result from "../Result/Result";
import { useEffect, useState, useReducer } from "react";
import Logo from "/Users/danibagley/Turing/mod3/new-mixologist/src/Assets/logo.png";

const initialState = {
  myDrink: {
    strDrink: "Complete the quiz to see your drink!",
    strDrinkThumb: Logo,
  },
  question1: "",
  question2: "",
  question3: "",

  selected1: 0,
  selected2: 0,
  selected3: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "MY_DRINK":
      return { ...state, myDrink: action.drink };
    case "QUESTION_ONE":
      return { ...state, question1: action.question };
    case "QUESTION_TWO":
      return { ...state, question2: action.question };
    case "QUESTION_THREE":
      return { ...state, question3: action.question };
    case "SELECTED_ONE":
      return { ...state, selected1: action.selected };
    case "SELECTED_TWO":
      return { ...state, selected2: action.selected };
    case "SELECTED_THREE":
      return { ...state, selected3: action.selected };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Splash />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/whats-my-drink" element={<Quiz />} />
          <Route exact path="/random-drink" element={<RandomDrink />} />
          <Route exact path="/result" element={<Result />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
