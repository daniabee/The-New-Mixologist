describe("What's my drink", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get(".start-button").click();
    cy.get(".navBar").contains("WHAT'S MY DRINK?").click();
  });
  it("User should see the nav bar", () => {
    cy.get(".navBar").should("be.visible");
  });
  it("User should see an image title", () => {
    cy.get("img").should("have.attr", "alt", "Find Your Drink!");
  });
  it("User should see a form", () => {
    cy.get(".quizForm");
    cy.contains("1. Choose a glass:");
    cy.contains("2. Choose an ingredient:");
    cy.contains("3. What's your horiscope?");
  });
  it("User should see the first question and four options", () => {
    cy.contains("1. Choose a glass:");
    cy.get("#1")
      .should(
        "have.attr",
        "src",
        "/static/media/cocktailglass.6f9641f06b0698f66dd7.png"
      )
      .should("have.attr", "alt", "Cocktail glass");
    cy.get("#2")
      .should(
        "have.attr",
        "src",
        "/static/media/highball-collins.8a2467e05185068b2807.png"
      )
      .should("have.attr", "alt", "Highball glass");
    cy.get("#3")
      .should(
        "have.attr",
        "src",
        "/static/media/martini.35ecaab992e5074824c3.png"
      )
      .should("have.attr", "alt", "Martini glass");
    cy.get("#4")
      .should(
        "have.attr",
        "src",
        "/static/media/whisky.64a34f1eb4a85e738ea4.png"
      )
      .should("have.attr", "alt", "Whiskey glass");
  });
  it("User should see the second question and four options", () => {
    cy.contains("2. Choose an ingredient:");
    cy.get("#5").should("have.attr", "alt", "Coffee");
    cy.get("#6")
      .should(
        "have.attr",
        "src",
        "/static/media/limes.ac5cd1456985bdfa8b73.jpeg"
      )
      .should("have.attr", "alt", "Lime");
    cy.get("#7")
      .should(
        "have.attr",
        "src",
        "/static/media/strawberries.c155bf54d47055e597e0.jpeg"
      )
      .should("have.attr", "alt", "Strawberries");
    cy.get("#8").should("have.attr", "alt", "Tomato juice");
  });
  it("User should see the third question and twelve options", () => {
    cy.contains("3. What's your horiscope?");
    cy.get("#9").should("have.attr", "alt", "Aries");
    cy.get("#10").should("have.attr", "alt", "Taurus");
    cy.get("#11").should("have.attr", "alt", "Gemini");
    cy.get("#12").should("have.attr", "alt", "Cancer");
    cy.get("#13").should("have.attr", "alt", "Leo");
    cy.get("#14").should("have.attr", "alt", "Virgo");
    cy.get("#15").should("have.attr", "alt", "Libra");
    cy.get("#16").should("have.attr", "alt", "Scorpio");
    cy.get("#17").should("have.attr", "alt", "Sagittarius");
    cy.get("#18").should("have.attr", "alt", "Capricorn");
    cy.get("#19").should("have.attr", "alt", "Aquarius");
    cy.get("#20").should("have.attr", "alt", "Pisces");
  });
});
