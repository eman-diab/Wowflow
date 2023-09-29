
class signupInfoPage {
    elements = {
        titleButton: () => cy.get('#id_gender1'),
        passwordBox: () => cy.get('#password'),
        DOBdays: () => cy.get('#days'),
        DOBmonths: () => cy.get('#months'),
        DOByears: () => cy.get('#years'),
        firstnameBox: () => cy.get('#first_name'),
        lastnameBox: () => cy.get('#last_name'),
        companyBox: () => cy.get('#company'),
        addressBox: () => cy.get('#address1'),
        countryBox: () => cy.get('#country'),
        stateBox: () => cy.get('#state'),
        cityBox: () => cy.get('#city'),
        zipcodeBox: () => cy.get('#zipcode'),
        mobileBox: () => cy.get('#mobile_number'),
        createAccountButton: () => cy.get('button[data-qa="create-account"]'),


    };


    FillInfo(password, day, month, year, fname, lname, company, address, country, state, city, zipcode, mobile) {
        this.elements.titleButton().check({ force: true });
        this.elements.passwordBox().type(password);
        this.elements.DOBdays().select(day).should('have.value', day)
        this.elements.DOBmonths().select(month).should('have.value', month);
        this.elements.DOByears().select(year).should('have.value', year);
        this.elements.firstnameBox().type(fname);
        this.elements.lastnameBox().type(lname);
        this.elements.companyBox().type(company);
        this.elements.addressBox().type(address);
        this.elements.countryBox().type(country);
        this.elements.stateBox().type(state);
        this.elements.cityBox().type(city);
        this.elements.zipcodeBox().type(zipcode);
        this.elements.mobileBox().type(mobile);
        this.elements.createAccountButton().click();
    }

}



export default new signupInfoPage();