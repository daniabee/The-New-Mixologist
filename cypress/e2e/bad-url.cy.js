describe("Bad url", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/blahhhhh");
  });
  it("User should see the nav bar if the user visits a bad path", () => {
    cy.get(".navBar").contains("HOME");
    cy.get(".navBar").contains("FILTER COCKTAILS");
    cy.get(".navBar").contains("WHAT'S MY DRINK");
    cy.get(".navBar").contains("RANDOM COCKTAIL");
  });
  it("User should see a message that the page they are lookning for cannot be found", () => {
    cy.contains("404");
    cy.contains("The page you are looking for isn't here!");
  });
});
