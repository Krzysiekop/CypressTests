describe("Feedback tests", () => {
  before(function () {
    cy.visit("http://zero.webappsecurity.com/feedback.html");
    cy.contains("Feedback").click();
  });

  //should load form
  it("Feedback test", () => {
    cy.get("form").should("be.visible");

    // should fill form

    cy.get("#name").type("name");
    cy.get("#email").type("email@email.com");
    cy.get("#subject").type("just subject");
    cy.get("#comment").type("some comment");

    //should submit form
    cy.get(".btn-signin").click();

    //should display submit form
    cy.get('#feedback-title').contains('Feedback')


  });
});
