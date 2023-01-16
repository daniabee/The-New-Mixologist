import "./App.css";
import AppContext from "./AppContext";
import { Route, Routes } from "react-router-dom";
import Splash from "../Splash/Splash";
import Home from "../Home/Home";
import Quiz from "../Quiz/Quiz";
import RandomDrink from "../RandomDrink/RandomDrink";
import Result from "../Result/Result";
import BadUrl from "../BadUrl/BadUrl";
import { useReducer } from "react";
import Logo from "../Assets/logo.png";
import PropTypes, { string, shape, array, number } from "prop-types";

const initialState = {
  filter: "Alcoholic",
  allDrinks: [],
  myDrink: {
    strDrink: "Complete the quiz to see your drink!",
    strDrinkThumb: Logo,
  },
  randomDrink: {
    strDrink: "Click the button to get a drink!",
    strDrinkThumb: Logo,
  },
  question1: 0,
  question2: "",
  question3: 0,

  selected1: 0,
  selected2: "",
  selected3: 0,
  error: false,
  currentPage: "HOME",
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
    case "RANDOM_DRINK":
      return { ...state, randomDrink: action.randomDrink };
    case "FILTER_DRINKS":
      return { ...state, filter: action.filter };
    case "ALL_DRINKS":
      return { ...state, allDrinks: action.allDrinks };
    case "SET_ERROR":
      return { ...state, error: action.error };
    case "CHANGE_PAGE":
      return { ...state, currentPage: action.currentPage };
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
          <Route path="/*" element={<BadUrl />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;

App.propTypes = {
  context: PropTypes.shape({
    filter: PropTypes.string.isRequired,
    allDrinks: PropTypes.array.isRequired,
    myDrink: PropTypes.shape({
      strDrink: PropTypes.string.isRequired,
      strDrinkThumb: PropTypes.string.isRequired,
    }).isRequired,
    randomDrink: PropTypes.shape({
      strDrink: PropTypes.string.isRequired,
      strDrinkThumb: PropTypes.string.isRequired,
    }).isRequired,
    question1: PropTypes.number,
    question2: PropTypes.string,
    question3: PropTypes.number,
    selected1: PropTypes.number,
    selected2: PropTypes.string,
    selected3: PropTypes.number,
    error: PropTypes.bool,
  }),
};
