export class formsPage {
  get practiceFormBarMenu() {
    return cy.contains("#item-0", "Practice Form");
  }

  get wrongFillingOfForm() {
    return cy.get("#submit");
  }

  get firstName() {
    return cy.get("#firstName");
  }

  get lastName() {
    return cy.get("#lastName");
  }

  get userEmail() {
    return cy.get("#userEmail");
  }

  get maleGenderRadioButton() {
    return cy.get("#gender-radio-1");
  }

  get femaleGenderRadioButton() {
    return cy.get("#gender-radio-2");
  }

  get otherRadioButton() {
    return cy.get("#gender-radio-3");
  }

  get mobileNumber() {
    return cy.get("#userNumber");
  }

  get dateOfBirth() {
    return cy.get("#dateOfBirthInput");
  }

  get subjects() {
    return cy.get("#subjectsContainer");
  }

  get hobbiesSport() {
    return cy.get("#hobbies-checkbox-1");
  }

  get hobbiesReading() {
    return cy.get("#hobbies-checkbox-2");
  }

  get hobbiesMusic() {
    return cy.get("#hobbies-checkbox-3");
  }
  get pictureUpload() {
    return cy.get("#uploadPicture");
  }

  get currentAddress() {
    return cy.get("#currentAddress");
  }

  get selectState() {
    return cy.get("#state");
  }
  get submitButton() {
    return cy.get("#submit");
  }

  dropdownDateOfBirth() {
    cy.get("div").find("#dateOfBirthInput").click();
  }
  correctFormFilling(
    firstName,
    lastName,
    email,
    mobileNumber,
    subjects,
    currentAddress,
    picturePath,
    state
  ) {
    //currentAddress
    //this.practiceFormBarMenu.click();
    this.firstName.type(firstName);
    this.lastName.type(lastName);
    this.userEmail.type(email);
    this.maleGenderRadioButton.click({ force: true });
    this.femaleGenderRadioButton.click({ force: true });
    this.otherRadioButton.click({ force: true });
    this.mobileNumber.type(mobileNumber);
    this.subjects.type(subjects);
    this.hobbiesSport.click({ force: true });
    this.hobbiesReading.click({ force: true });
    this.hobbiesMusic.click({ force: true });
    this.pictureUpload.selectFile(picturePath);
    this.currentAddress.type(currentAddress);
    this.selectState
      .find("input")
      .clear({ force: true })
      .type(state + "{enter}", { force: true });
  }
}
