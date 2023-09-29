class accountCreatedPage {
    elements = {
    //   searchBox: () => cy.get('#twotabsearchtextbox'),
    //   searchSubmitButton: () => cy.get('#nav-search-submit-button'),
  
    accountCreatedConfirmation: () => cy.get('h2[data-qa="account-created"]').contains('Account Created!'),
    continueButton: () => cy.get('a[data-qa="continue-button"]')
      // signInButton: () => cy.xpath('//input[@type="text"]'),
      // storyDesriptionsField: () => cy.xpath('//textarea[@rows="2"]'),
      // storyPromptField: () => cy.xpath('//textarea[@rows="3"]'),
      // nextButton: () => cy.get("button").contains("Next"),
      // startStoryButton: () => cy.get("button").contains("Start Story"),
    };
  

    verifyAccountCreated() {
    //   this.elements.searchBox().type(item);
      this.elements.accountCreatedConfirmation().should('be.visible');
      this.elements.continueButton().click();

      // this.elements.storyDesriptionsField().type(description);
    }

}


export default new accountCreatedPage();