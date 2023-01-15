import { getActiveElement } from "@testing-library/user-event/dist/utils";
import Logo from "/Users/danibagley/Turing/mod3/new-mixologist/src/Assets/logo.png";

export const getCocktailInfo = async (ingredient) => {
  try {
    const ingredientResponse = await fetch(
      `http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const ingredients = await ingredientResponse.json();
    return ingredients.drinks;
  } catch {
    return "Error";
  }
};

export const getRandomDrink = async () => {
  try {
    const response = await fetch(
      "http://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const random = await response.json();
    return random.drinks[0];
  } catch {
    return "Error";
  }
};

export const getAllDrinks = async (filter) => {
  try {
    let URL;
    if (filter === "Alcoholic" || filter === "Non_Alcoholic") {
      URL = `http://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${filter}`;
    } else {
      URL = `http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filter}`;
    }
    const response = await fetch(URL);
    const allDrinks = await response.json();
    return allDrinks;
  } catch {
    return "Error";
  }
};
