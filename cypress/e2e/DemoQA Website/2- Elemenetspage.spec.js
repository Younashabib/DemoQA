/// <reference types ="Cypress" />

import { ElementsPage } from "../../support/2- Elements";
import { HomePage } from "../../support/1- HomePage";
import RegistrationData from "../../fixtures/DemoQA/RegisterUserInTable.fixture.json";

let elementsPage = new ElementsPage();
let homePage = new HomePage();
const filePath = "cypress/fixtures/lecture_resources.txt";
const { firstName, lastName, userEmail, age, salary, department } =
  RegistrationData;

beforeEach(() => {
  cy.visit("/");
  homePage.elementsCard.click();
});

describe("Verify Elements Page", () => {
  it("Click on Sidebars", () => {
    elementsPage.verifySideBarMenu();
  });

  it("Upload a File", () => {
    elementsPage.uploadAndDownloadSideBarMenu.click();
    elementsPage.fileUpload(filePath);
    // TODO fix file download path
    elementsPage.fileDownload;
  });

  it.only("Adding a New User in Web Page", () => {
    elementsPage.webTablesSidebarMenu.click();
    elementsPage.addUserInwebTable.click();
    elementsPage.wrongFillingOfRegistrationFormInWebTable;
    elementsPage.registrationFormInWebTable;
    elementsPage.fillingOfRegistrationFormInWebTable(
      firstName,
      lastName,
      userEmail,
      age,
      salary,
      department
    );
  });
});
