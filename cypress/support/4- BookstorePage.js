import { BookstoreLoginPage } from "./4.1-BookstoreLoginPage";

export class BookstorePage extends BookstoreLoginPage {
  get loginButton() {
    return cy.get("#login");
  }

  get newUserRegistration() {
    return cy.get("#userForm").then(() => {
      cy.get("#firstname").type("ABCDF");
      cy.get("#lastname").type("Schneider");
      cy.get("#userName").type("Khaqana");
      cy.get("#password").type("KhaYou00");
      //cy.get("#recaptcha-anchor-label").click();
      // cy.get('iframe[src*="recaptcha/api2"]') // Check for iframe source containing "recaptcha/api2"
      //   .should("exist") // Ensure the iframe exists
      //   .then(($iframe) => {
      //     // Switch to the iframe to interact with the reCAPTCHA
      //     const iframe = $iframe.contents()[0];
      //     cy.wrap(iframe)
      //       .find("#recaptcha-anchor") // Locate the reCAPTCHA anchor element by ID
      //       .should("exist") // Ensure the reCAPTCHA anchor element exists
      //       .click();
      //   });
    });
  }
}
