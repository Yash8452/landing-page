it("titles are correct", () => {
  const page = cy.visit("http://localhost:4321");
  page.get("title").should("have.text", "Astro is awesome!");
});
it("should display the hero section", () => {
  const page = cy.visit("http://localhost:4321");
  page.get("body").find("[data-testid='hero-section']").should("exist");
});
it("should display the hero section", () => {
  const page = cy.visit("http://localhost:4321");
  page.get("body").find("[data-testid='about-section']").should("exist");
});
it("should display the hero section", () => {
  const page = cy.visit("http://localhost:4321");
  page.get("body").find("[data-testid='pricing-section']").should("exist");
});
it("should display the hero section", () => {
  const page = cy.visit("http://localhost:4321");
  page.get("body").find("[data-testid='contact-section']").should("exist");
});
