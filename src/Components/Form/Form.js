import React, { useState } from "react";
import "./Form.css";
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

const Form = ({ setMyDrink }) => {
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");

  const [selected1, setSelected1] = useState(0);
  const [selected2, setSelected2] = useState(0);
  const [selected3, setSelected3] = useState(0);

  const firstQuestionClick = (event) => {
    event.preventDefault();
    setQuestion1(event.target.name);
    setSelected1(0);
    if (event.target.id == 1) {
      setSelected1(1);
    } else if (event.target.id == 2) {
      setSelected1(2);
    } else if (event.target.id == 3) {
      setSelected1(3);
    } else if (event.target.id == 4) {
      setSelected1(4);
    }
  };

  const secondQuestionClick = (event) => {
    event.preventDefault();
    setQuestion2(event.target.name);
    setSelected2(0);
    if (event.target.id == 5) {
      setSelected2(5);
    } else if (event.target.id == 6) {
      setSelected2(6);
    } else if (event.target.id == 7) {
      setSelected2(7);
    } else if (event.target.id == 8) {
      setSelected2(8);
    }
  };

  const thirdQuestionClick = (event) => {
    event.preventDefault();
    setQuestion3(event.target.id);
    setSelected3(0);
    if (event.target.id == 9) {
      setSelected3(9);
    } else if (event.target.id == 10) {
      setSelected3(10);
    } else if (event.target.id == 11) {
      setSelected3(11);
    } else if (event.target.id == 12) {
      setSelected3(12);
    } else if (event.target.id == 13) {
      setSelected3(13);
    } else if (event.target.id == 14) {
      setSelected3(14);
    } else if (event.target.id == 15) {
      setSelected3(15);
    } else if (event.target.id == 16) {
      setSelected3(16);
    } else if (event.target.id == 17) {
      setSelected3(17);
    } else if (event.target.id == 18) {
      setSelected3(18);
    } else if (event.target.id == 19) {
      setSelected3(19);
    } else if (event.target.id == 20) {
      setSelected3(20);
    }
  };

  const submitForm = () => {
    getCocktailInfo();
    clearForm();
  };

  const clearForm = () => {
    setQuestion1("");
    setQuestion2("");
    setQuestion3("");
    setSelected1(0);
    setSelected2(0);
    setSelected3(0);
  };

  const pickDrink = (arr) => {
    let newDrink = {};
    const newDrinks = arr.filter((item) =>
      item.idDrink.includes(`${question3}`)
    );
    const index = Math.floor(Math.random() * newDrinks.length);
    newDrink = [arr[index]];
    if (!newDrink) {
      const ind = Math.floor(Math.random() * arr.length);
      newDrink = arr[ind];
    }
    setMyDrink(newDrink);
  };

  const getCocktailInfo = async () => {
    let allDrinks = [];
    const ingredientResponse = await fetch(
      `http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${question2}`
    );
    const ingredient = await ingredientResponse.json();
    allDrinks = ingredient.drinks;
    pickDrink(allDrinks);
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
              className={selected1 === 1 ? "selected option" : "option"}
              type="image"
              id={1}
              name="Cocktail_glass"
              src={Cocktailglass}
              tabIndex={1}
            />
            <input
              className={selected1 === 2 ? "selected option" : "option"}
              type="image"
              id={2}
              name="Highball_glass"
              src={Highballglass}
              tabIndex={1}
            />
            <input
              className={selected1 === 3 ? "selected option" : "option"}
              type="image"
              id={3}
              name="Martini_glass"
              src={Martiniglass}
              tabIndex={1}
            />
            <input
              className={selected1 === 4 ? "selected option" : "option"}
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
              className={selected2 === 5 ? "selected option" : "option"}
              type="image"
              id={5}
              name="Coffee"
              src={Coffee}
              tabIndex={1}
            />
            <input
              className={selected2 === 6 ? "selected option" : "option"}
              type="image"
              id={6}
              name="Lime"
              src={Limes}
              tabIndex={1}
            />
            <input
              className={selected2 === 7 ? "selected option" : "option"}
              type="image"
              id={7}
              name="Strawberries"
              src={Strawberries}
              tabIndex={1}
            />
            <input
              className={selected2 === 8 ? "selected option" : "option"}
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
              className={selected3 === 9 ? "selected horiscope" : "horiscope"}
              type="image"
              id={9}
              name="Aries"
              src={Aries}
              tabIndex={1}
            />
            <input
              className={selected3 === 10 ? "selected horiscope" : "horiscope"}
              type="image"
              id={10}
              name="Taurus"
              src={Taurus}
              tabIndex={1}
            />
            <input
              className={selected3 === 11 ? "selected horiscope" : "horiscope"}
              type="image"
              id={11}
              name="Gemini"
              src={Gemini}
              tabIndex={1}
            />
            <input
              className={selected3 === 12 ? "selected horiscope" : "horiscope"}
              type="image"
              id={12}
              name="Cancer"
              src={Cancer}
              tabIndex={1}
            />
            <input
              className={selected3 === 13 ? "selected horiscope" : "horiscope"}
              type="image"
              id={13}
              name="Leo"
              src={Leo}
              tabIndex={1}
            />
            <input
              className={selected3 === 14 ? "selected horiscope" : "horiscope"}
              type="image"
              id={14}
              name="Virgo"
              src={Virgo}
              tabIndex={1}
            />
            <input
              className={selected3 === 15 ? "selected horiscope" : "horiscope"}
              type="image"
              id={15}
              name="Libra"
              src={Libra}
              tabIndex={1}
            />
            <input
              className={selected3 === 16 ? "selected horiscope" : "horiscope"}
              type="image"
              id={16}
              name="Scorpio"
              src={Scorpio}
              tabIndex={1}
            />
            <input
              className={selected3 === 17 ? "selected horiscope" : "horiscope"}
              type="image"
              id={17}
              name="Sagittarius"
              src={Sagittarius}
              tabIndex={1}
            />
            <input
              className={selected3 === 18 ? "selected horiscope" : "horiscope"}
              type="image"
              id={18}
              name="Capricorn"
              src={Capricorn}
              tabIndex={1}
            />
            <input
              className={selected3 === 19 ? "selected horiscope" : "horiscope"}
              type="image"
              id={19}
              name="Aquarius"
              src={Aquarius}
              tabIndex={1}
            />
            <input
              className={selected3 === 20 ? "selected horiscope" : "horiscope"}
              type="image"
              id={20}
              name="Pisces"
              src={Pisces}
              tabIndex={1}
            />
          </label>
        </div>
      </form>
      <div
        to="/result"
        className="submit-button"
        onClick={() => {
          submitForm();
        }}
      >
        SUBMIT
      </div>
    </div>
  );
};

export default Form;
