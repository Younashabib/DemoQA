/// <reference types ="Cypress"/>
import { HomePage } from "../../support/1- HomePage";
let homePage = new HomePage();

beforeEach(() => {
  cy.visit("/");
});

describe("Verify DEMO QA Website", () => {
  it("Verify opening of URL", () => {
    homePage.verifyQaHomePage;
    homePage.assertAllPages();
  });
});
