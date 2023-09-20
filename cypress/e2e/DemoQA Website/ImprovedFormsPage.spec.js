/// <reference types ="Cypress" />
import { formsPage } from "../../support/5- FormsPage";
import { HomePage } from "../../support/1- HomePage";

import RegistrationData from "../../fixtures/DemoQA/StudentRegisrationformPage.fixture.json";

beforeEach(() => {
  cy.visit("/");
  homePage.formsCard.click(); //Clicking on HomePage Card
  FormsPage.practiceFormBarMenu.click();
});

const FormsPage = new formsPage();
const homePage = new HomePage();

const {
  firstName,
  lastName,
  Email,
  mobileNumber,
  subjects,
  picturePath,
  currentAddress,
} = RegistrationData;

describe("Fill Out Practice forms Page", () => {
  it("Wrong Filling of Practice Forms Page", () => {
    FormsPage.wrongFillingOfForm.click();
  });
  it.only("Correct Filling of Practice FOrms Page", () => {
    cy.fillingStudentRegistrationForm(
      firstName,
      lastName,
      Email,
      mobileNumber,
      subjects,
      picturePath,
      currentAddress
    );
  });
});
