class accountCreatedPage {
    elements = {

        accountCreatedConfirmation: () => cy.get('h2[data-qa="account-created"]').contains('Account Created!'),
        continueButton: () => cy.get('a[data-qa="continue-button"]')

    };


    verifyAccountCreated() {
        this.elements.accountCreatedConfirmation().should('be.visible');
        this.elements.continueButton().click();
    }

}


export default new accountCreatedPage();