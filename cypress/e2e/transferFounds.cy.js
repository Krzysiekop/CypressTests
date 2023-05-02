describe('Money Transfer', () => {
    before(function () {
        cy.visit("http://zero.webappsecurity.com/index.html");
        cy.url().should("include", "index.html");
        cy.get("#signin_button").click();
        cy.fixture("user").then((user) => {
          const username = user.id;
          const password = user.pwd;
          cy.login(username, password);
        });
    })

    it('Should transfer money', ()=>{
        cy.contains('Transfer Funds').click()
        cy.get('#tf_fromAccountId').select('1')
        cy.get('#tf_toAccountId').select('5')
        cy.get('#tf_amount').type('234')
        cy.get('#tf_description').type('Some decription')
        cy.get('#btn_submit').click()

        //verify data
        cy.get('#tf_fromAccountId').should('have.value', 'Savings')
        cy.get('#tf_toAccountId').should('have.value', 'Credit Card')
        cy.get('#tf_amount').should('have.value', '234')
        cy.get('#tf_description').should('have.value', 'Some decription')
        cy.get('#btn_submit').click()

    })
    
})