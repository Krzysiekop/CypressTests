describe("Payment Test", () => {
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

  it("Should send INVALID new payment", () => {
    cy.get('#pay_bills_tab').click()
    cy.contains('Pay Saved Payee').click()
    cy.get('#sp_payee').select('wellsfargo')
    cy.get('#sp_account').select('Credit Card')
    cy.get('#sp_amount').type('50')
    cy.get('#sp_date').type('2023-01-01 {enter}')
    cy.get('#sp_description').type('some dummy data')
    cy.get('#pay_saved_payees').click()
    cy.get('#alert_content').should('be.visible').and('contain', 'The payment was successfully submitted')
  });
});
