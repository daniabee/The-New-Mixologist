describe("Splash/home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("Should have an image title", () => {
    cy.get("img").should("have.attr", "alt", "New Mixologist");
  });
  it("Should have a start button", () => {
    cy.get(".start-button").contains("START");
  });
  it("Start button should take you to the filter drinks page", () => {
    cy.get(".start-button").click();
    cy.get(".title").should("not.exist");
    cy.get(".start-button").should("not.exist");
  });
});
