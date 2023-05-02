
describe("Password recovery test", () => {
    beforeEach(function () {
      cy.visit("http://zero.webappsecurity.com/index.html");
    })

    it('should allow user to change password', () => {
        cy.get('#signin_button').click()
        cy.get('.offset3 > a').click()
        cy.get('#user_email').type('testemail.test@gmail.com')
        cy.contains('Send Password').click()
    })

})