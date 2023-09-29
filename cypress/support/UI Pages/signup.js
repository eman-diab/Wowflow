class signupPage {
    elements = {
        nameBox: () => cy.get('input[data-qa="signup-name"]'),
        emailBox: () => cy.get('input[data-qa="signup-email"]'),
        signupButton: () => cy.get('button[data-qa="signup-button"]'),

    };


    signUp(name, email) {
        this.elements.nameBox().type(name);
        this.elements.emailBox().type(email);
        this.elements.signupButton().click();

    }

}



export default new signupPage();