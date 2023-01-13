import React, { useState, useContext } from "react";
import "./Form.css";
import AppContext from "../App/AppContext";
import QuizTitle from "/Users/danibagley/Turing/mod3/new-mixologist/src/Assets/quiz.png";
import Cocktailglass from "/Users/danibagley/Turing/mod3/new-mixologist/src/Assets/cocktailglass.png";
import Highballglass from "/Users/danibagley/Turing/mod3/new-mixologist/src/Assets/highball-collins.png";
import Martiniglass from "/Users/danibagley/Turing/mod3/new-mixologist/src/Assets/martini.png";
import Whiskeyglass from "/Users/danibagley/Turing/mod3/new-mixologist/src/Assets/whisky.png";
import Coffee from "/Users/danibagley/Turing/mod3/new-mixologist/src/Assets/coffee.jpeg";
import Limes from "/Users/danibagley/Turing/mod3/new-mixologist/src/Assets/limes.jpeg";
import Strawberries from "/Users/danibagley/Turing/mod3/new-mixologist/src/Assets/strawberries.jpeg";
import Tomato from "/Users/danibagley/Turing/mod3/new-mixologist/src/Assets/tomato.jpeg";
import Aries from "/Users/danibagley/Turing/mod3/new-mixologist/src/Assets/Aries.png";
import Taurus from "/Users/danibagley/Turing/mod3/new-mixologist/src/Assets/Taurus.png";
import Gemini from "/Users/danibagley/Turing/mod3/new-mixologist/src/Assets/Gemini.png";
import Cancer from "/Users/danibagley/Turing/mod3/new-mixologist/src/Assets/Cancer.png";
import Leo from "/Users/danibagley/Turing/mod3/new-mixologist/src/Assets/Leo.png";
import Virgo from "/Users/danibagley/Turing/mod3/new-mixologist/src/Assets/Virgo.png";
import Libra from "/Users/danibagley/Turing/mod3/new-mixologist/src/Assets/Libra.png";
import Scorpio from "/Users/danibagley/Turing/mod3/new-mixologist/src/Assets/Scorpio.png";
import Sagittarius from "/Users/danibagley/Turing/mod3/new-mixologist/src/Assets/Sagittarius.png";
import Capricorn from "/Users/danibagley/Turing/mod3/new-mixologist/src/Assets/Capricorn.png";
import Aquarius from "/Users/danibagley/Turing/mod3/new-mixologist/src/Assets/Aquarius.png";
import Pisces from "/Users/danibagley/Turing/mod3/new-mixologist/src/Assets/Pisces.png";
import { Link } from "react-router-dom";

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
    let newDrink = {};
    const newDrinks = arr.filter((item) =>
      item.idDrink.includes(`${state.question3}`)
    );
    if (!newDrink) {
      newDrinks = arr.filter((item) =>
        item.idDrink.includes(`${state.question1}`)
      );
    }
    const index = Math.floor(Math.random() * newDrinks.length);
    newDrink = [arr[index]];
    return newDrink[0];
  };

  const getCocktailInfo = async () => {
    const ingredientResponse = await fetch(
      `http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${state.question2}`
    );
    const ingredient = await ingredientResponse.json();
    const newDrink = pickDrink(ingredient.drinks);
    dispatch({ type: "MY_DRINK", drink: newDrink });
  };

  const clearForm = () => {
    dispatch({ type: "QUESTION_ONE", question: 0 });
    dispatch({ type: "QUESTION_TWO", question: "" });
    dispatch({ type: "QUESTION_THREE", question: 0 });
    dispatch({ type: "SELECTED_ONE", selected: 0 });
    dispatch({ type: "SELECTED_TWO", selected: 0 });
    dispatch({ type: "SELECTED_THREE", selected: 0 });
  };

  const submitForm = () => {
    getCocktailInfo();
    clearForm();
  };

  return (
    <div className="quiz">
      <img className="quizTitle" src={QuizTitle} />
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
            />
            <input
              className={state.selected1 == 2 ? "selected option" : "option"}
              type="image"
              id={2}
              name="Highball_glass"
              src={Highballglass}
              tabIndex={1}
            />
            <input
              className={state.selected1 == 3 ? "selected option" : "option"}
              type="image"
              id={3}
              name="Martini_glass"
              src={Martiniglass}
              tabIndex={1}
            />
            <input
              className={state.selected1 == 4 ? "selected option" : "option"}
              type="image"
              id={4}
              name="Whiskey_glass"
              src={Whiskeyglass}
              tabIndex={1}
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
            />
            <input
              className={state.selected2 == 6 ? "selected option" : "option"}
              type="image"
              id={6}
              name="Lime"
              src={Limes}
              tabIndex={1}
            />
            <input
              className={state.selected2 == 7 ? "selected option" : "option"}
              type="image"
              id={7}
              name="Strawberries"
              src={Strawberries}
              tabIndex={1}
            />
            <input
              className={state.selected2 == 8 ? "selected option" : "option"}
              type="image"
              id={8}
              name="Tomato_juice"
              src={Tomato}
              tabIndex={1}
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
            />
          </label>
        </div>
      </form>
      <Link
        to="/result"
        className="submit-button"
        onClick={(event) => {
          submitForm();
        }}
      >
        SUBMIT
      </Link>
    </div>
  );
};

export default Form;
