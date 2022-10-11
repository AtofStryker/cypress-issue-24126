describe("empty spec", () => {
  beforeEach("Login", () => {
    cy.viewport(1280, 720);
    cy.visit("https://alat-web-.1.7-dev.surge.sh/");
    loginPage.typeUsername("");
    loginPage.typePassword("");
    loginPage.clickLogin();
  });
  it("passes", () => {});
});
