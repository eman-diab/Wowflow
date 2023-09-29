class homePage {
    elements = {


        signupButton: () => cy.get('a[href="/login"]'),
        logoutButton: () => cy.get('a[href="/logout"]'),
        featuresProducts: () => cy.get('div[class="col-sm-4"]'),
        featuresProducts: () => cy.get('.features_items > .col-sm-4'),
        filterWomenButton: () => cy.get('a[href="#Women"]'),
        filterWomenDressButton: () => cy.get('a[href="/category_products/1"]').contains("Dress "),
        dressProducts: () => cy.get('.features_items > .col-sm-4> .product-image-wrapper > .single-products > .productinfo > p'),


    };

    clickSignUp() {
        this.elements.signupButton().click();

    }

    verifyLoggedin() {
        this.elements.logoutButton().should('be.visible');

    }


    verifyFeaturesProducts() {
        this.elements.featuresProducts().should('have.length', 34);

    }

    verifyWomenDressProduct() {
        this.elements.filterWomenButton().click();
        this.elements.filterWomenDressButton().click();
        this.elements.featuresProducts().should('have.length', 3);
        let arr = [];
        this.elements.dressProducts().each(($p) => arr.push($p.text()));
        cy.writeFile('cypress/downloads/dress.txt', arr)


    }


}


export default new homePage();