import { getActiveElement } from "@testing-library/user-event/dist/utils";

export const getCocktailInfo = async (ingredient) => {
  try {
    const ingredientResponse = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
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
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
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
      URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${filter}`;
    } else {
      URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filter}`;
    }
    const response = await fetch(URL);
    const allDrinks = await response.json();
    return allDrinks.drinks;
  } catch {
    return "Error";
  }
};

export const getDetails = async (id) => {
  try {
    let URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    const response = await fetch(URL);
    const drinkDetails = await response.json();
    console.log(drinkDetails.drinks[0]);
    return drinkDetails.drinks[0];
  } catch {
    return "Error";
  }
};
