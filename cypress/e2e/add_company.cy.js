/// <reference types="cypress-xpath" />

describe('Add Customer Company', () => {
  it('Login_SystemAdmin', function() {
    cy.visit('https://app.termin-ator.ch/')
    cy.get('#email').type('systemadmin@mail.com')
    cy.get('#password').type('password')
    cy.xpath('/html/body/div/div/div[2]/div/div/form/div[3]/button').click()
    cy.wait(5000)
    cy.get('.gap-5 > .cursor-pointer').click()

    //Open Add form................
    for (var i = 1; i < 11; i++) {
      cy.wait(6000)
      cy.xpath('/html/body/div/div/div[2]/div[3]/div[1]/div[2]/div[2]/div[1]/button').click()

      cy.get('.form > :nth-child(2) > .w-full').type('Company '+i) //company name
      cy.get('.form > :nth-child(3) > .w-full').type('Company Alias') //company alias name
      cy.get('.form > :nth-child(5) > .w-full').type('Badda Link Road') //street name
      cy.get('.form > :nth-child(6) > .w-full').type('12'+i) //house number
      cy.get('.form > :nth-child(7) > .w-full').type('100'+1) //postal code
      cy.get('.form > :nth-child(9) > .w-full').type('Dhaka') //ort
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