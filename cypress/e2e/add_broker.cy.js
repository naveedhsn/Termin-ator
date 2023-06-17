/// <reference types="cypress-xpath" />
import {broker, first_name, last_name} from './Data';
import {street} from './Data';
import {house} from './Data';
import {post_code} from './Data';
import {ort} from './Data';
import {email} from './Data';



describe('Add Broker', () => {
  it('Login_SystemAdmin', function() {
    cy.viewport(1050,700) //Change viewport
    //cy.visit('https://app.termin-ator.ch/') //Production server
    cy.visit('https://trqa.dinnova.ch/') //QA server
    cy.get('#email').type('naveedhcse+2@gmail.com')
    cy.get('#password').type('Password12@')
    cy.xpath('/html/body/div/div/div[2]/div/div/form/div[3]/button').click()
    cy.wait(5000)
    cy.xpath('/html/body/div/div/div[2]/div[2]/a[4]').click()
    cy.get('.gap-5 > .cursor-pointer').click()


    //Open Add form................
    for (var i = 0; i < 20; i++) {
      cy.wait(6000)
      cy.xpath('/html/body/div/div/div[2]/div[3]/div[1]/div[2]/div[2]/div[1]/button').click() //open add form

      cy.get('.form > :nth-child(2) > .w-full').type(broker[i]) //Write name of broker

      cy.get(':nth-child(4) > .w-full').type(street[i]) //Write street
      cy.get(':nth-child(5) > .w-full').type(house[i]) //write house no
      cy.get(':nth-child(6) > .w-full').type(post_code[i]) //write post code
      cy.get(':nth-child(8) > .w-full').type(ort[i]) //write ort

      cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[8]/div/div').click() //Open land dropdown
      cy.wait(2000)
      cy.get(':nth-child(1) > .name').click() //select value from land dropdown

      cy.get(':nth-child(11) > .w-full').type(first_name[i]) //write first name
      cy.get(':nth-child(12) > .w-full').type(last_name[i]) //write last name
      cy.get(':nth-child(14) > .w-full').type(email[0]+i+'@gmail.com') //write email

      cy.wait(2000)
      cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[15]/button[1]').click() //press on save button

    

    }

  }) 
 
})