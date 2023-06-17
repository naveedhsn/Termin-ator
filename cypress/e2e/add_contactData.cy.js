/// <reference types="cypress-xpath" />
import{first_10, Second_10, Third_10, Forth_10, Fifth_10} from './contact_data_functions';

describe('Add Contact Data', () => {
  it('Login_SystemAdmin', function() {
    cy.viewport(1050,700) //Change viewport
    //cy.visit('https://app.termin-ator.ch/') //Production server
    cy.visit('https://trqa.dinnova.ch/') //QA server
    cy.get('#email').type('naveedhcse+2@gmail.com')
    cy.get('#password').type('Password12@')
    cy.xpath('/html/body/div/div/div[2]/div/div/form/div[3]/button').click()
    cy.wait(5000)
    cy.xpath('/html/body/div/div/div[2]/div[2]/a[6]').click() //click on contact data left menu
    cy.get('.gap-5 > .cursor-pointer').click()


    //Open Add form................
    for (var i = 0; i < 10; i++) {
      first_10(i)
      Second_10(i)
      Third_10(i)
      Forth_10(i)
      Fifth_10(i)
    }

  }) 
 
})