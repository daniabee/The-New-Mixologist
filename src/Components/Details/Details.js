import React, { useEffect, useState } from "react";
import "./Details.css";
import { getDetails } from "../../apiCalls";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Details = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();

  const setDrinkDetails = async () => {
    const drink = await getDetails(id);
    setDetails(drink);
  };

  const ingredients = [
    details.strIngredient1,
    details.strIngredient2,
    details.strIngredient3,
    details.strIngredient4,
    details.strIngredient5,
    details.strIngredient6,
    details.strIngredient7,
    details.strIngredient8,
    details.strIngredient9,
    details.strIngredient10,
    details.strIngredient11,
    details.strIngredient12,
    details.strIngredient13,
    details.strIngredient14,
    details.strIngredient15,
  ].filter((ing) => ing != null);

  const allIngredients = ingredients.map((item) => {
    return (
      <h3 className="instructions" key={item}>
        - {item}
      </h3>
    );
  });

  useEffect(() => {
    setDrinkDetails();
  }, []);

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
        {allIngredients}
        <h3 className="instructions">
          Instructions: {details.strInstructions}
        </h3>
      </div>
    </div>
  );
};

export default Details;
