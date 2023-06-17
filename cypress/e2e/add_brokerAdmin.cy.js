/// <reference types="cypress-xpath" />
import {first_name, last_name} from './Data';
import {email} from './Data';



describe('Add Broker Admin', () => {
  it('Login_SystemAdmin', function() {
    cy.viewport(1050,700) //Change viewport
    //cy.visit('https://app.termin-ator.ch/') //Production server
    cy.visit('https://trqa.dinnova.ch/') //QA server
    cy.get('#email').type('naveedhcse+2@gmail.com')
    cy.get('#password').type('Password12@')
    cy.xpath('/html/body/div/div/div[2]/div/div/form/div[3]/button').click()
    cy.wait(5000)
    cy.xpath('/html/body/div/div/div[2]/div[2]/a[4]').click() //click on broker left menu
    cy.get('.gap-5 > .cursor-pointer').click()
    cy.wait(3000)
    cy.get('a.overview__tabs--item').click() //Going to broker user tab


    //Open Add form................
    for (var i = 0; i < 20; i++) {
      cy.wait(6000)
      cy.xpath('/html/body/div[1]/div/div[2]/div[3]/div[1]/div[2]/div[2]/div[1]/button').click() //open add form

      cy.get(':nth-child(2) > .wrapper > .toggler').click() //Open Broker dropdown
      cy.get('.options > :nth-child(1)').click() //select broker from dropdown

      cy.get(':nth-child(3) > .wrapper > .toggler').click() //Open Rolle dropdown
      cy.get('.options > :nth-child(1)').click() //Select admin from the dropdown

      cy.get(':nth-child(5) > .wrapper > .toggler').click() //Open the dropdown of Korrespondenzsprache
      cy.wait(1000)
      cy.get('.options > :nth-child(2)').click() //Select value from the dropdown

      cy.get(':nth-child(8) > .wrapper > .toggler').click() //Open andere dropdown
      cy.get('.options > :nth-child(2)').click() //Select value from the dropdown

      cy.get(':nth-child(9) > .w-full').type(first_name[i]) //write first name
      cy.get(':nth-child(10) > .w-full').type(last_name[i]) //write last name
      cy.get(':nth-child(12) > .w-full').type(email[0]+i+'ba1@gmail.com') //write email

      cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[15]/div/div').click() //send email button ON
      cy.wait(2000)

      cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[17]/button[1]').click() //Click on save button

    }

  }) 
 
})