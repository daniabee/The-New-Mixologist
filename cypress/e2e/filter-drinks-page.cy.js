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
  it("User should see drop down search", () => {
    cy.get(".filterLabel").contains("Select a filter to see beverages:");
    cy.get(".filterSelect").contains("Alcoholic");
  });
  it("User should be able to filter alcoholic beverages", () => {
    cy.intercept(
      "GET",
      "http://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic",
      { fixture: "allDrinks" }
    );
    cy.get(".filterSelect")
      .should("have.value", "Alcoholic")
      .select("Alcoholic");
    cy.get(".filterButton").click();
  });
});
