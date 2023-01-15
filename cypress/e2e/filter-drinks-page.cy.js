describe("Filter drinks page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get(".start-button").click();
  });
  it("User should see a navigation bar", () => {
    cy.get(".navBar").contains("HOME");
    cy.get(".navBar").contains("FILTER COCKTAILS");
    cy.get(".navBar").contains("WHAT'S MY DRINK");
    cy.get(".navBar").contains("RANDOM COCKTAIL");
  });
  it("User should see drop down search and select see options", () => {
    cy.get(".filterLabel").contains("Select a filter to see beverages:");
    cy.get(".filterSelect")
      .select("Non_Alcoholic")
      .should("have.value", "Non_Alcoholic");
    cy.get(".filterSelect").select("Beer").should("have.value", "Beer");
    cy.get(".filterSelect").select("Shot").should("have.value", "Shot");
    cy.get(".filterSelect")
      .select("Ordinary_Drink")
      .should("have.value", "Ordinary_Drink");
    cy.get(".filterSelect").select("Cocktail").should("have.value", "Cocktail");
    cy.get(".filterSelect")
      .select("Alcoholic")
      .should("have.value", "Alcoholic");
  });
  it("User should be able to see associated beverages of filter", () => {
    cy.intercept(
      "GET",
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic",
      { fixture: "allDrinks" }
    );
    cy.get(".filterButton").click();
    cy.get(".drinkThumb").eq(0).contains("Test1");
    cy.get(".drinkThumb").eq(0).get("img");
    cy.get(".drinkThumb").eq(1).contains("Test2");
    cy.get(".drinkThumb").eq(1).get("img");
    cy.get(".drinkThumb").eq(2).contains("Test3");
    cy.get(".drinkThumb").eq(2).get("img");
    cy.get(".drinkThumb").eq(3).contains("Test4");
    cy.get(".drinkThumb").eq(3).get("img");
  });
});
