
class signupPage {
    elements = {
    //   signInPageButton: () => cy.get('#nav-link-accountList'),
      nameBox: () => cy.get('input[data-qa="signup-name"]'),
      emailBox: () => cy.get('input[data-qa="signup-email"]'),
      signupButton: () => cy.get('button[data-qa="signup-button"]'),
    //   loginConfirmation: () => cy.get('#nav-link-accountList-nav-line-1').contains('Hello, Eman')


    };
  

    signUp(name,email) {
      this.elements.nameBox().type(name);
      this.elements.emailBox().type(email);
      this.elements.signupButton().click();
    //   this.elements.emailBox().type(email);
    //   this.elements.continueButton().click();
    //   this.elements.nameBox().type(name);
    //   this.elements.signInButton().click();
    //   this.elements.loginConfirmation().should('be.visible');

    }

}



export default new signupPage();