/// <reference types="cypress-xpath" />
import {OE_name} from './Data';


describe('Add Organisation Element', () => {
  it('Login_SystemAdmin', function() {
    cy.viewport(1050,700) //Change viewport
    //cy.visit('https://app.termin-ator.ch/') //Production server
    cy.visit('https://trqa.dinnova.ch/') //QA server
    cy.get('#email').type('naveedhcse+2@gmail.com')
    cy.get('#password').type('Password12@')
    cy.xpath('/html/body/div/div/div[2]/div/div/form/div[3]/button').click()
    cy.wait(5000)
    cy.get('[href="/organization-element"] > .link > .font-inter > div').click() //Click on organisation element left menu
    cy.get('.gap-5 > .cursor-pointer').click()

    function OE_Function_ODD(i){
        cy.wait(6000)
        cy.xpath('/html/body/div/div/div[2]/div[3]/div[1]/div[2]/div[2]/div[1]/button').click() //Open add form
  
        cy.get('.single-select > .wrapper > .toggler').click() //open dropdown of type (ART)
        cy.wait(2000)
        cy.get('.options > :nth-child(1)').click() //Type(ART) selection
        cy.get('.input-element > .w-full').type(OE_name[i]) //Organisation element name
  
        cy.wait(2000)
        cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[6]/button[1]').click() //pressing on SAVE button
    }
    function OE_Function_Even(i){
        cy.wait(6000)
        cy.xpath('/html/body/div/div/div[2]/div[3]/div[1]/div[2]/div[2]/div[1]/button').click() //Open add form
  
        cy.get('.single-select > .wrapper > .toggler').click() //open dropdown of type (ART)
        cy.wait(2000)
        cy.get('.options > :nth-child(2)').click() //Type(ART) selection
        cy.get('.input-element > .w-full').type(OE_name[i]) //Organisation element name
  
        cy.wait(2000)
        cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[6]/button[1]').click() //pressing on SAVE button
        

    }

    //Open Add form................
    for (var i = 0; i < 20; i++) {
        if(i%2==0){
            OE_Function_Even(i)
        }
        else{
            OE_Function_ODD(i)
        }
      
    }

  }) 
 
})