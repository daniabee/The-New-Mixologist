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
    const random = {
      strDrink: "There was a problem on our end!",
      strDrinkThumb: Logo,
    };
    return random;
  }
};
