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

    it('Should purchase foreign currency', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Purchase Foreign Currency').click()
        cy.get('#pc_currency').select('EUR')
        cy.get('#pc_amount').type('34')
        cy.get('#pc_inDollars_true').check()
        cy.get('#pc_calculate_costs').click()
        cy.get('#purchase_cash').click()

        cy.get('#alert_content').should('be.visible').and('contain', 'Foreign currency cash was successfully purchased')
    })

})