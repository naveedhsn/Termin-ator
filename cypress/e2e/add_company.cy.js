/// <reference types="cypress-xpath" />
import {company_name} from './Data';
import {company_alias} from './Data';
import {street} from './Data';
import {house} from './Data';
import {post_code} from './Data';
import {ort} from './Data';



describe('Add Customer Company', () => {
  it('Login_SystemAdmin', function() {
    cy.viewport(1050,700) //Change viewport
    //cy.visit('https://app.termin-ator.ch/') //Production server
    cy.visit('https://trqa.dinnova.ch/') //QA server
    cy.get('#email').type('systemadmin@mail.com')
    cy.get('#password').type('password')
    cy.xpath('/html/body/div/div/div[2]/div/div/form/div[3]/button').click()
    cy.wait(5000)
    cy.get('.gap-5 > .cursor-pointer').click()


    //Open Add form................
    for (var i = 0; i < 20; i++) {
      cy.wait(6000)
      cy.xpath('/html/body/div/div/div[2]/div[3]/div[1]/div[2]/div[2]/div[1]/button').click()

      cy.get('.form > :nth-child(2) > .w-full').type(company_name[i]) //company name
      cy.get('.form > :nth-child(3) > .w-full').type(company_alias[i]) //company alias name
      cy.get('.form > :nth-child(5) > .w-full').type(street[i]) //street name
      cy.get('.form > :nth-child(6) > .w-full').type(house[i]) //house number
      cy.get('.form > :nth-child(7) > .w-full').type(post_code[i]) //postal code
      cy.get('.form > :nth-child(9) > .w-full').type(ort[i]) //ort
      cy.get('.toggler').click() //open dropdown of country
      cy.wait(2000)
      cy.get(':nth-child(3) > .wrapper > .default-flat').click() //country selection
      cy.get(':nth-child(12) > .w-full').type('Robert') //first name
      cy.get(':nth-child(13) > .w-full').type('Brown') //last name
      cy.get(':nth-child(15) > .w-full').type('robert@mail.com') //email
      cy.get(':nth-child(18) > .options > :nth-child(2) > .icon').click() //No selected from "Device Authentication required?"
      cy.get('.wrapper > .input-element > .w-full').type('600') //auto log out time
      cy.get(':nth-child(21) > .options > :nth-child(2) > .icon').click() //No selected from "Organizational elements required?"

      cy.wait(2000)
      cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[20]/button[1]').click() //pressing on SAVE button
    }

  }) 
 
})