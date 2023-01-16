import React, { useContext } from "react";
import "./Form.css";
import AppContext from "../App/AppContext";
import QuizTitle from "../Assets/quiz.png";
import Cocktailglass from "../Assets/cocktailglass.png";
import Highballglass from "../Assets/highball-collins.png";
import Martiniglass from "../Assets/martini.png";
import Whiskeyglass from "../Assets/whisky.png";
import Coffee from "../Assets/coffee.jpeg";
import Limes from "../Assets/limes.jpeg";
import Strawberries from "../Assets/strawberries.jpeg";
import Tomato from "../Assets/tomato.jpeg";
import Aries from "../Assets/Aries.png";
import Taurus from "../Assets/Taurus.png";
import Gemini from "../Assets/Gemini.png";
import Cancer from "../Assets/Cancer.png";
import Leo from "../Assets/Leo.png";
import Virgo from "../Assets/Virgo.png";
import Libra from "../Assets/Libra.png";
import Scorpio from "../Assets/Scorpio.png";
import Sagittarius from "../Assets/Sagittarius.png";
import Capricorn from "../Assets/Capricorn.png";
import Aquarius from "../Assets/Aquarius.png";
import Pisces from "../Assets/Pisces.png";
import Logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import { getCocktailInfo } from "../../apiCalls";

const Form = () => {
  const [state, dispatch] = useContext(AppContext);

  const firstQuestionClick = (event) => {
    event.preventDefault();
    dispatch({ type: "QUESTION_ONE", question: event.target.id });
    dispatch({ type: "SELECTED_ONE", selected: 0 });
    dispatch({ type: "SELECTED_ONE", selected: event.target.id });
  };

  const secondQuestionClick = (event) => {
    event.preventDefault();
    dispatch({ type: "QUESTION_TWO", question: event.target.name });
    dispatch({ type: "SELECTED_TWO", selected: 0 });
    dispatch({ type: "SELECTED_TWO", selected: event.target.id });
  };

  const thirdQuestionClick = (event) => {
    event.preventDefault();
    dispatch({ type: "QUESTION_THREE", question: event.target.id });
    dispatch({ type: "SELECTED_THREE", selected: 0 });
    dispatch({ type: "SELECTED_THREE", selected: event.target.id });
  };

  const pickDrink = (arr) => {
    const newDrinks = arr.filter((item) =>
      item.idDrink.includes(`${state.question1}`)
    );
    const index = Math.floor(Math.random() * newDrinks.length);
    const drink = [arr[index]][0];
    return drink;
  };

  const setCocktailInfo = async () => {
    // const drinks = await getCocktailInfo(state.question2);
    // if (
    //   drinks === "Error" &&
    //   state.question1 != 0 &&
    //   state.question2 != "" &&
    //   state.question3 != 0
    // ) {
    //   const errorDrink = {
    //     strDrink: "There was a problem getting your drink!",
    //     strDrinkThumb: Logo,
    //   };
    //   dispatch({ type: "MY_DRINK", drink: errorDrink });
    // } else if (
    //   state.question1 === 0 ||
    //   !state.question2 ||
    //   state.question3 === 0
    // ) {
    //   const errorDrink = {
    //     strDrink:
    //       "Please make sure you fill out the quiz completely before getting your drink!",
    //     strDrinkThumb: Logo,
    //   };
    //   dispatch({ type: "MY_DRINK", drink: errorDrink });
    // } else {
    //   const newDrink = pickDrink(drinks);
    //   dispatch({ type: "MY_DRINK", drink: newDrink });
    //   clearForm();
    // }

    const drinks = await getCocktailInfo(state.question2);
    if (state.question1 && state.question2 && state.question3) {
      const drinks = await getCocktailInfo(state.question2);
      if (drinks === "Error") {
        const errorDrink = {
          strDrink: "There was a problem getting your drink!",
          strDrinkThumb: Logo,
        };
        dispatch({ type: "MY_DRINK", drink: errorDrink });
      } else {
        const newDrink = pickDrink(drinks);
        dispatch({ type: "MY_DRINK", drink: newDrink });
        clearForm();
      }
    } else if (!state.question1 || !state.question2 || !state.question3) {
      const errorDrink = {
        strDrink:
          "Please make sure you fill out the quiz completely before getting your drink!",
        strDrinkThumb: Logo,
      };
      dispatch({ type: "MY_DRINK", drink: errorDrink });
    }
  };

  const clearForm = () => {
    dispatch({ type: "QUESTION_ONE", question: 0 });
    dispatch({ type: "QUESTION_TWO", question: "" });
    dispatch({ type: "QUESTION_THREE", question: 0 });
    dispatch({ type: "SELECTED_ONE", selected: 0 });
    dispatch({ type: "SELECTED_TWO", selected: 0 });
    dispatch({ type: "SELECTED_THREE", selected: 0 });
  };

  return (
    <div className="quiz">
      <img className="quizTitle" src={QuizTitle} alt="Find Your Drink!" />
      <form className="quizForm">
        <div className="question1">
          <h3 className="quizLabel">1. Choose a glass:</h3>
          <label
            className="optionsContainer"
            onClick={(event) => {
              firstQuestionClick(event);
            }}
          >
            <input
              className={state.selected1 == 1 ? "selected option" : "option"}
              type="image"
              id={1}
              name="Cocktail_glass"
              src={Cocktailglass}
              tabIndex={1}
              alt="Cocktail glass"
            />
            <input
              className={state.selected1 == 2 ? "selected option" : "option"}
              type="image"
              id={2}
              name="Highball_glass"
              src={Highballglass}
              tabIndex={1}
              alt="Highball glass"
            />
            <input
              className={state.selected1 == 3 ? "selected option" : "option"}
              type="image"
              id={3}
              name="Martini_glass"
              src={Martiniglass}
              tabIndex={1}
              alt="Martini glass"
            />
            <input
              className={state.selected1 == 4 ? "selected option" : "option"}
              type="image"
              id={4}
              name="Whiskey_glass"
              src={Whiskeyglass}
              tabIndex={1}
              alt="Whiskey glass"
            />
          </label>
        </div>
        <div className="question2">
          <h3 className="quizLabel">2. Choose an ingredient:</h3>
          <label
            className="optionsContainer"
            onClick={(event) => {
              secondQuestionClick(event);
            }}
          >
            <input
              className={state.selected2 == 5 ? "selected option" : "option"}
              type="image"
              id={5}
              name="Coffee"
              src={Coffee}
              tabIndex={1}
              alt="Coffee"
            />
            <input
              className={state.selected2 == 6 ? "selected option" : "option"}
              type="image"
              id={6}
              name="Lime"
              src={Limes}
              tabIndex={1}
              alt="Lime"
            />
            <input
              className={state.selected2 == 7 ? "selected option" : "option"}
              type="image"
              id={7}
              name="Strawberries"
              src={Strawberries}
              tabIndex={1}
              alt="Strawberries"
            />
            <input
              className={state.selected2 == 8 ? "selected option" : "option"}
              type="image"
              id={8}
              name="Tomato_juice"
              src={Tomato}
              tabIndex={1}
              alt="Tomato juice"
            />
          </label>
        </div>
        <div className="question3">
          <h3 className="quizLabel">3. What's your horiscope?</h3>
          <label
            className="optionsContainer"
            onClick={(event) => {
              thirdQuestionClick(event);
            }}
          >
            <input
              className={
                state.selected3 == 9 ? "selected horiscope" : "horiscope"
              }
              type="image"
              id={9}
              name="Aries"
              src={Aries}
              tabIndex={1}
              alt="Aries"
            />
            <input
              className={
                state.selected3 == 10 ? "selected horiscope" : "horiscope"
              }
              type="image"
              id={10}
              name="Taurus"
              src={Taurus}
              tabIndex={1}
              alt="Taurus"
            />
            <input
              className={
                state.selected3 == 11 ? "selected horiscope" : "horiscope"
              }
              type="image"
              id={11}
              name="Gemini"
              src={Gemini}
              tabIndex={1}
              alt="Gemini"
            />
            <input
              className={
                state.selected3 == 12 ? "selected horiscope" : "horiscope"
              }
              type="image"
              id={12}
              name="Cancer"
              src={Cancer}
              tabIndex={1}
              alt="Cancer"
            />
            <input
              className={
                state.selected3 == 13 ? "selected horiscope" : "horiscope"
              }
              type="image"
              id={13}
              name="Leo"
              src={Leo}
              tabIndex={1}
              alt="Leo"
            />
            <input
              className={
                state.selected3 == 14 ? "selected horiscope" : "horiscope"
              }
              type="image"
              id={14}
              name="Virgo"
              src={Virgo}
              tabIndex={1}
              alt="Virgo"
            />
            <input
              className={
                state.selected3 == 15 ? "selected horiscope" : "horiscope"
              }
              type="image"
              id={15}
              name="Libra"
              src={Libra}
              tabIndex={1}
              alt="Libra"
            />
            <input
              className={
                state.selected3 == 16 ? "selected horiscope" : "horiscope"
              }
              type="image"
              id={16}
              name="Scorpio"
              src={Scorpio}
              tabIndex={1}
              alt="Scorpio"
            />
            <input
              className={
                state.selected3 == 17 ? "selected horiscope" : "horiscope"
              }
              type="image"
              id={17}
              name="Sagittarius"
              src={Sagittarius}
              tabIndex={1}
              alt="Sagittarius"
            />
            <input
              className={
                state.selected3 == 18 ? "selected horiscope" : "horiscope"
              }
              type="image"
              id={18}
              name="Capricorn"
              src={Capricorn}
              tabIndex={1}
              alt="Capricorn"
            />
            <input
              className={
                state.selected3 == 19 ? "selected horiscope" : "horiscope"
              }
              type="image"
              id={19}
              name="Aquarius"
              src={Aquarius}
              tabIndex={1}
              alt="Aquarius"
            />
            <input
              className={
                state.selected3 == 20 ? "selected horiscope" : "horiscope"
              }
              type="image"
              id={20}
              name="Pisces"
              src={Pisces}
              tabIndex={1}
              alt="Pisces"
            />
          </label>
        </div>
      </form>
      <Link
        to="/result"
        className="submit-button"
        onClick={() => {
          setCocktailInfo();
        }}
      >
        GET DRINK!
      </Link>
    </div>
  );
};

export default Form;
