export class WidgetsPage {
  get widgetsSideBarMenu() {
    return cy.contains("div", "Widgets");
  }

  get datePickerSideBar() {
    return cy.contains('li[id="item-2"]', "Date Picker");
  }

  selectDate(monthCode, year, date) {
    cy.get("div").find("#datePickerMonthYearInput").click();
    cy.get(".react-datepicker__year-select").select(year, { force: true });
    cy.get(".react-datepicker__month-select").select(monthCode);
    cy.get(".react-datepicker__day.react-datepicker__day--0" + date).click({
      force: true,
    });
  }

  dateAndTimePicker(actualDate, month) {
    cy.get("div").find("#dateAndTimePickerInput").click();
    cy.get(
      ".react-datepicker__day.react-datepicker__day--0" + actualDate
    ).click();
    //cy.get(".react-datepicker__month-select").select(month);
  }

  get toolTipsSideBar() {
    return cy.contains('li[id="item-6"]', "Tool Tips");
  }

  get hooverOver1ToolTips() {
    return cy.Hover("#toolTipButton"); //USing Cypress Custom Command; see it in support/commands.js
  }

  get hooverOver2ToolTips() {
    return cy.Hover("#toolTipTextField");
  }
}
