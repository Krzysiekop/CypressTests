describe("Navbar test", () => {
    beforeEach(function () {
      cy.visit("http://zero.webappsecurity.com/index.html");
    })

    it('should check/ping all navbar links', () => {
        cy.contains('Online Banking').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')

        cy.contains('Feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.get('h3').should('be.visible')

        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
    })
})
