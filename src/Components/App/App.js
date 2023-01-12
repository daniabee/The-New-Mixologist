import "./App.css";
import { Route, NavLink, Routes } from "react-router-dom";
import Splash from "../Splash/Splash";
import Home from "../Home/Home";
import Quiz from "../Quiz/Quiz";
import RandomDrink from "../RandomDrink/RandomDrink";
import { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Splash />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/whats-my-drink" element={<Quiz />} />
        <Route exact path="/random-drink" element={<RandomDrink />} />
      </Routes>
    </div>
  );
}

export default App;
