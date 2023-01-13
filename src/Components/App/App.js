import "./App.css";
import { Route, NavLink, Routes } from "react-router-dom";
import Splash from "../Splash/Splash";
import Home from "../Home/Home";
import Quiz from "../Quiz/Quiz";
import RandomDrink from "../RandomDrink/RandomDrink";
import Result from "../Result/Result";
import { useEffect, useState } from "react";
import Logo from "/Users/danibagley/Turing/mod3/new-mixologist/src/Assets/logo.png";

function App() {
  const [myDrink, setMyDrink] = useState({
    strDrink: "Take our quiz to see your drink!",
    strDrinkThumb: Logo,
  });

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Splash />} />
        <Route exact path="/home" element={<Home />} />
        <Route
          exact
          path="/whats-my-drink"
          element={<Quiz setMyDrink={setMyDrink} />}
        />
        <Route
          exact
          path="/random-drink"
          element={<RandomDrink myDrink={myDrink} />}
        />
        <Route exact path="/result" element={<Result myDrink={myDrink} />} />
      </Routes>
    </div>
  );
}

export default App;
