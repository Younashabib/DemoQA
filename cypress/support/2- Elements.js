export class ElementsPage {
  // Sidebar Menu
  get textBoxSidebarMenu() {
    return cy.get("#item-0");
  }
  get checkBoxSidebarMenu() {
    return cy.get("#item-1");
  }

  get radioButtonSidebarMenu() {
    return cy.get("#item-2");
  }
  get webTablesSidebarMenu() {
    return cy.get("#item-3");
  }

  get buttonsSidebarMenu() {
    return cy.get("#item-4");
  }

  get linksSidebarMenu() {
    return cy.get("#item-5");
  }

  get brokenLinks() {
    return cy.get("#item-6");
  }

  get uploadAndDownloadSideBarMenu() {
    return cy.get("#item-7");
  }

  get dynamicPropertiesSideBarMenu() {
    return cy.get("#item-8");
  }

  verifySideBarMenu() {
    this.textBoxSidebarMenu.should("be.visible");
    this.checkBoxSidebarMenu.should("be.visible");
    this.radioButtonSidebarMenu.should("be.visible");
    this.webTablesSidebarMenu.should("be.visible");
    this.buttonsSidebarMenu.should("be.visible");
    this.linksSidebarMenu.should("be.visible");
    this.brokenLinks.should("be.visible");
    this.uploadAndDownloadSideBarMenu.should("be.visible");
    this.dynamicPropertiesSideBarMenu.should("be.visible");
  }

  // file upload and download
  fileUpload(filePath) {
    cy.get("#uploadFile") // get ID
      .selectFile(filePath) //function to get file
      .click()
      .then(() => {
        cy.get("#uploadedFilePath").contains("fakepath"); //assertion to get proof of file upload
      });
  }

  get fileDownload() {
    return cy
      .get("#downloadButton")
      .click()
      .then(() => {
        cy.readFile(
          "C:/Users/YounasHabibKHAN/Desktop/DemoQA/cypress/downloads/sampleFile.jpeg"
        ).should("exist"); //assertion to exist and be visible
      });
  }

  get addUserInwebTable() {
    return cy.get("#addNewRecordButton");
  }
  get registrationFormInWebTable() {
    return cy.get("#userForm");
  }
  wrongFillingOfRegistrationFormInWebTable() {
    this.registrationFormInWebTable.get("#submit").click();
  }

  fillingOfRegistrationFormInWebTable(
    firstName,
    lastName,
    userEmail,
    age,
    salary,
    department
  ) {
    this.registrationFormInWebTable.get("#firstName").type(firstName);
    this.registrationFormInWebTable.get("#lastName").type(lastName);
    this.registrationFormInWebTable.get("#userEmail").type(userEmail);
    this.registrationFormInWebTable.get("#age").type(age);
    this.registrationFormInWebTable.get("#salary").type(salary);
    this.registrationFormInWebTable.get("#department").type(department);
    this.registrationFormInWebTable.get("#submit").click();
  }
}
