describe("Weather app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("render", () => {
    cy.contains("Weather");
  });

  it("onClick consultar clima", () => {
    cy.viewport(1280, 768);
    cy.get('[id="ciudad"]')
      .parent()
      .click()
      .get('ul > li[data-value="La Plata"]')
      .click();
    cy.contains("Consultar clima").click();
  });
});
