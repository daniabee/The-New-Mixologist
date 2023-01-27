import React, { useEffect, useState } from "react";
import "./Details.css";
import { getDetails } from "../../apiCalls";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Details = () => {
  const [details, setDetails] = useState({});
  const [ingredients, setIngredients] = useState([]);

  const { id } = useParams();

  const setDrinkDetails = async () => {
    const drink = await getDetails(id);
    setDetails(drink);
    setIngredients([
      drink.strIngredient1,
      drink.strIngredient2,
      drink.strIngredient3,
      drink.strIngredient4,
      drink.strIngredient5,
      drink.strIngredient6,
      drink.strIngredient7,
      drink.strIngredient8,
      drink.strIngredient9,
      drink.strIngredient10,
      drink.strIngredient11,
      drink.strIngredient12,
      drink.strIngredient13,
      drink.strIngredient14,
      drink.strIngredient15,
    ]);
  };

  const allIngredients = () => {
    return ingredients.filter((item, index) => {
      if (ingredients.indexOf(item) === index) {
        return item;
      }
    });
  };

  useEffect(() => {
    setDrinkDetails();
    setIngredients(allIngredients());
  }, []);

  const showIngredients = ingredients.map((item, index) => (
    <h3 className="instructions" key={index}>
      {item}
    </h3>
  ));

  return (
    <div className="result">
      <Link to="/filter-cocktails" className="back-button">
        BACK
      </Link>
      <div className="detailThumbnail">
        <h1 className="detailsName">{details.strDrink}</h1>
        <img className="detailsImg" src={details.strDrinkThumb} />
        <h3 className="drinkType">
          Type: {details.strAlcoholic} {details.strCategory}
        </h3>
        {details.strInstructions != "" ? (
          <h3 className="instructions">
            Instructions: {details.strInstructions}
          </h3>
        ) : null}
        <h3 className="instructions">Ingredients:</h3>
        {showIngredients}
      </div>
    </div>
  );
};

export default Details;
