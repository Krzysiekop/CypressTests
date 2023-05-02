describe("New Payee Test", () => {
  before(function () {
    cy.visit("http://zero.webappsecurity.com/index.html");
    cy.url().should("include", "index.html");
    cy.get("#signin_button").click();
    cy.fixture("user").then((user) => {
      const username = user.id;
      const password = user.pwd;
      cy.login(username, password);
    });
  });
  it("add new payee to list", () => {
    cy.get("#pay_bills_tab").click();
    cy.contains("Add New Payee").click();
    cy.get("#np_new_payee_name").type("Some Name");
    cy.get("#np_new_payee_address").type("Address");
    cy.get("#np_new_payee_account").type("12345123");
    cy.get("#np_new_payee_details").type("Account");
    cy.get("#add_new_payee").click();
    //message success
    cy.get("#alert_content")
      .should("be.visible")
      .and("contain", "The new payee Some Name was successfully created.");
  });
});
