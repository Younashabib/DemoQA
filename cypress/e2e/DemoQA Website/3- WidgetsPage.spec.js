/// <reference types = "Cypress" />

import { WidgetsPage } from "../../support/3- WidgetsPage";
import { HomePage } from "../../support/1- HomePage";

let widgetsPage = new WidgetsPage();
let homePage = new HomePage();

beforeEach(() => {
  cy.visit("/");
  homePage.widgetsCard.click();
});
describe("Verify Widgets Page", () => {
  it("DatePicker Verification", () => {
    widgetsPage.widgetsSideBarMenu.click();
    widgetsPage.datePickerSideBar.click();
    widgetsPage.selectDate("10", "2010", "24");
    widgetsPage.dateAndTimePicker("15");
  });

  it.only("Tool Tip Verification", () => {
    widgetsPage.toolTipsSideBar.click();
    widgetsPage.hooverOver1ToolTips;
    widgetsPage.hooverOver2ToolTips;
  });
});
