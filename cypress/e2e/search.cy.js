describe("Searchbox Test", () => {
  beforeEach(function () {
    cy.visit("http://zero.webappsecurity.com/index.html");
  });


  it("Should type in search box and submit with pressing enter", () => {
    cy.get("#searchTerm").type("some text {enter}");
    cy.get("h2").contains("Search Results:");
  });


});
