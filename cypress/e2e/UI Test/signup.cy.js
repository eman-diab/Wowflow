/// <reference types="cypress" />
import { faker } from "@faker-js/faker";


import home from "../../support/UI Pages/home";
import signup from "../../support/UI Pages/signup";
import signupinfo from "../../support/UI Pages/signupinfo";
import account_created from "../../support/UI Pages/account_created";

let fname = faker.random.word();
let lname = faker.random.word();
let password = faker.random.word();
let email = faker.random.word();
let company = faker.random.word();
let address = faker.random.word();
let state = faker.random.word();
let city = faker.random.word();
let zipcode = faker.number.int();
let mobile = faker.number.int();
let country = "United State"
let DOBday = 2;
let DOBmonth = 2;
let DOByear = "2020";



describe('SignUp', () => {

    it("SignUp", () => {
        cy.visit("https://automationexercise.com/", { failOnStatusCode: true });
        home.clickSignUp();
        signup.signUp(fname, email + '@cdh888ch.com');
        signupinfo.FillInfo(password, DOBday, DOBmonth, DOByear, fname, lname, company, address, country, state, city, zipcode, mobile);
        account_created.verifyAccountCreated();
        home.verifyLoggedin();

    });

      it("Verify items", () => {
        cy.visit("https://automationexercise.com/", { failOnStatusCode: true });
        home.verifyFeaturesProducts();

      });

    it("Verify Dress", () => {
        cy.visit("https://automationexercise.com/", { failOnStatusCode: true });
        home.verifyWomenDressProduct();

    });


});