/// <reference types ="Cypress" />
import { formsPage } from "../../support/5- FormsPage";
import { HomePage } from "../../support/1- HomePage";
// import testData from "../../fixtures/DemoQA/StudentRegisrationformPage.fixture.json";

beforeEach(() => {
  cy.visit("/");
  homePage.formsCard.click(); //Clicking on HomePage Card
  FormsPage.practiceFormBarMenu.click(); //Navigation to Practice forms page
  // testData = cy.getTestData("fixturePath")
  cy.getFixtureData("DemoQA/StudentRegisrationformPage.fixture.json");
  // cy.fixture("DemoQA/formPage.fixture.json").then(function (testData) {
  //   globalThis.testData = testData;
  // });
});

const FormsPage = new formsPage();
const homePage = new HomePage();
// const firstName = "Wolfgang";
// const lastName = "Reutmeier";
// const email = "abc@gmail.com";
// const mobileNumber = "0284859238929";
// const subjects = "Write any important Subject here";
// const currentAddress = "Carldiem Strasse 55, 28734, Steinbach";
// const picturePath = "cypress/fixtures/sampleFile.jpeg";
// const state = "NCR";
// const {
//   firstName,
//   lastName,
//   email,
//   mobileNumber,
//   subjects,
//   currentAddress,
//   picturePath,
//   state,
//   dropdownDateOfBirth,
// } = testData;

describe("Fill Out Practice forms Page", () => {
  it("Wrong Filling of Practice Forms Page", () => {
    FormsPage.wrongFillingOfForm.click();
  });
  it.only("Correct Filling of Practice FOrms Page", () => {
    FormsPage.correctFormFilling(
      testData.firstName,
      testData.lastName,
      testData.email,
      testData.mobileNumber,
      testData.subjects,
      testData.currentAddress,
      testData.picturePath,
      testData.state
    );
  });
});
