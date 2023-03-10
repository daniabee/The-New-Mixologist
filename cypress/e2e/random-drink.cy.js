describe("random page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get(".start-button").click();
    cy.get(".navBar").contains("RANDOM COCKTAIL").click();
  });
  it("User should see the nav bar", () => {
    cy.get(".navBar").contains("HOME");
    cy.get(".navBar").contains("FILTER COCKTAILS");
    cy.get(".navBar").contains("WHAT'S MY DRINK");
    cy.get(".navBar").contains("RANDOM COCKTAIL");
  });
  it("Should show a start icon and instructions", () => {
    cy.get("img").should(
      "have.attr",
      "src",
      "/static/media/logo.81be753666d977ed1ca4.png"
    );
    cy.contains("Click the button to get a drink!");
  });
  it("Should show a drink thumnail when user clicks the button", () => {
    cy.intercept(
      "GET",
      "https://www.thecocktaildb.com/api/json/v1/1/random.php",
      { fixture: "allDrinks" }
    );
    cy.get(".randomButton").click();
    cy.get("img").should(
      "have.attr",
      "src",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTlvmuKDXfNDudIA6gVzO0zM89FvanJMDAw&usqp=CAU"
    );
    cy.contains("Test1");
  });
  it("Should show a error message when network request fails", () => {
    cy.intercept(
      "GET",
      "https://www.thecocktaildb.com/api/json/v1/1/random.php",
      { statusCode: 404 }
    );
    cy.get(".randomButton").click();
    cy.contains("There was a problem on our end!");
  });
});
