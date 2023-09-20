/// <reference types ="Cypress" />

import { BookstorePage } from "../../support/4- BookstorePage";
import { HomePage } from "../../support/1- HomePage";
let bookStorePage = new BookstorePage();
let homePage = new HomePage();

let firstName = "Wolfgang";
let lastName = "Reithmeier";

beforeEach(() => {
  cy.visit("/");
});
describe("Book Store Application", () => {
  it("Verify Book Store Application Page", () => {
    homePage.bookStoreApplicazionCard.click();
    bookStorePage.loginButton.click();
    bookStorePage.bookstoreLoginButton.click();
    bookStorePage.assertFailedLogin();
    bookStorePage.newUserButton.click();

    bookStorePage.registerNewUser(
      "younas",
      "habib",
      "younas.habib",
      "Test123.@@"
    );
  });
});
