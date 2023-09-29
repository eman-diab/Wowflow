import { faker } from "@faker-js/faker";
import "cypress-plugin-api";



describe('Smoke test', () => {


    it('GET all users', () => {
        cy.api({
            method: "GET",
            url: "https://reqres.in/api/users",


        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data).to.exist;
            let arr = response.body.data
            arr.forEach(function (e) {
                expect(e).to.have.property('id').that.is.not.be.null;
                expect(e).to.have.property('avatar').that.is.not.be.null;
                expect(e).to.have.property('email').that.is.not.be.null;
                expect(e).to.have.property('first_name').that.is.not.be.null;

            });
        });
    });


    it('GET all users- delay 5s ', () => {
        cy.api({
            method: "GET",
            url: "https://reqres.in/api/users?delay=5",


        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data).to.exist;
            let arr = response.body.data
            arr.forEach(function (e) {
                expect(e).to.have.property('id').that.is.not.be.null;
                expect(e).to.have.property('avatar').that.is.not.be.null;
                expect(e).to.have.property('email').that.is.not.be.null;
                expect(e).to.have.property('first_name').that.is.not.be.null;

            });
        });
    });



    it('GET all users UNSUCCESSFUL', () => {
        cy.api({
            method: "GET",
            url: "https://reqres.in/api/login",


        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data).to.exist;
            expect(response.body.total).to.exist;

            let arr = response.body.data
            arr.forEach(function (e) {
                expect(e).to.have.property('id').that.is.not.be.null;
                expect(e).to.have.property('color').that.is.not.be.null;
                expect(e).to.have.property('name').that.is.not.be.null;
                expect(e).to.have.property('pantone_value').that.is.not.be.null;

            });
        });
    });



    let user_id = 2
    it('Delete user', () => {
        cy.api({
            method: "GET",
            url: "https://reqres.in/api/users/" + user_id,


        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data.id).to.not.be.null;
            expect(response.body.data.avatar).to.not.be.null;
            expect(response.body.data.email).to.not.be.null;

            });

        });
});

