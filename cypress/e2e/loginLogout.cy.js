describe("Invalid login test", () => {
  before(function () {
    cy.visit("http://zero.webappsecurity.com/index.html");
    cy.url().should("include", "index.html");
    cy.get("#signin_button").click();
  });

  it("Invalid login test", () => {
    // Incorrectly login
    cy.get("#login_form").should("be.visible");
    cy.login("invalid username", " invalid password");

    //Should display error message
    cy.get(".alert-error")
      .should("be.visible")
      .and("contain", "Login and/or password are wrong");
  });
});

describe("Correct login test", () => {
  before(function () {
    cy.visit("http://zero.webappsecurity.com/index.html");
    cy.url().should("include", "index.html");
    cy.get("#signin_button").click();
  });
  it("Correct login and logout test", () => {
    //login correctly
    cy.fixture("user").then((user) => {
      const username = user.id;
      const password = user.pwd;

      cy.login(username, password);
    });

    //Logoff
    cy.contains("username").click();
    cy.get("#logout_link").click();
    cy.url().should("include", "index.html");
  });
});
