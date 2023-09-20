export class BookstoreLoginPage {
  get bookstoreLoginButton() {
    return cy.get("#login");
  }

  get usernameField() {
    return cy.get("#userName");
  }

  get passwordField() {
    return cy.get("#password");
  }

  assertFailedLogin() {
    this.usernameField.should("have.class", "is-invalid");
    this.passwordField.should("have.class", "is-invalid");
  }

  get newUserButton() {
    return cy.get("#newUser");
  }

  get firstNameFormfield() {
    return cy.get("#firstname");
  }

  get lastNameFormfield() {
    return cy.get("#lastname");
  }

  get userNameFormfield() {
    return cy.get("#userName");
  }

  get passwordFormfield() {
    return cy.get("#password");
  }

  get recapcha() {
    // return cy.get("#recaptcha-anchor");
    cy.get("#recaptcha-anchor").click();
    cy.get('iframe[src*="recaptcha/api2"]') // Check for iframe source containing "recaptcha/api2"
      .should("exist") // Ensure the iframe exists
      .then(($iframe) => {
        // Switch to the iframe to interact with the reCAPTCHA
        const iframe = $iframe.contents()[0];
        cy.wrap(iframe)
          .find("#recaptcha-anchor") // Locate the reCAPTCHA anchor element by ID
          .should("exist") // Ensure the reCAPTCHA anchor element exists
          .click();
      });
  }

  get registerButton() {
    return cy.get("#register");
  }

  registerNewUser(firstName, lastName, userName, password) {
    this.firstNameFormfield.type(firstName);
    this.lastNameFormfield.type(lastName);
    this.userNameFormfield.type(userName);
    this.passwordField.type(password);
    this.recapcha;
    this.registerButton.click();
  }
}
