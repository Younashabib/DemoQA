export class HomePage {
  // HomePage Cards
  get elementsCard() {
    return cy.contains("div", "Elements");
  }

  get formsCard() {
    return cy.get("div").contains("Forms");
  }

  get alertsFrameAndWindowsCard() {
    return cy.get("div").contains("Alerts, Frame & Windows");
  }

  get widgetsCard() {
    return cy.get("div").contains("Widgets");
  }

  get interactionsCard() {
    return cy.get("div").contains("Interactions");
  }

  get bookStoreApplicazionCard() {
    return cy.get("div").contains("Book Store Application");
  }

  // Assert HomePage
  get verifyQaHomePage() {
    return cy.url().should("include", "demoqa");
  }

  assertAllPages() {
    this.elementsCard.should("be.visible").click().go("back");
    this.formsCard.should("be.visible").click().go("back");
    this.alertsFrameAndWindowsCard.should("be.visible").click().go("back");
    this.widgetsCard.should("be.visible").click().go("back");
    this.interactionsCard.should("be.visible").click().go("back");
    this.bookStoreApplicazionCard.should("be.visible").click().go("back");
  }
}
