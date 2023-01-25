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

  useEffect(() => {
    setDrinkDetails();
  }, []);

  return (
    <div className="result">
      <Link to="/filter-cocktails" className="back-button">
        BACK
      </Link>
      <div className="drinkThumbnail">
        <h1 className="drinkName">{details.strDrink}</h1>
        <img className="drinkImg" src={details.strDrinkThumb} />
        <h3 className="drinkType">
          Type: {details.strAlcoholic} {details.strCategory}
        </h3>
        <h2 className="instructions">
          Instructions: {details.strInstructions}
        </h2>
      </div>
    </div>
  );
};

export default Details;
