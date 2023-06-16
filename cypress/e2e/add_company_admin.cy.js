/// <reference types="cypress-xpath" />

describe('Add Customer Company Admin', () => {
    it('Login_SystemAdmin', function() {
      cy.viewport(1050,700) //Change viewport
      //cy.visit('https://app.termin-ator.ch/') //Production server
      cy.visit('https://trqa.dinnova.ch/') //QA server
      cy.get('#email').type('systemadmin@mail.com')
      cy.get('#password').type('password')
      cy.xpath('/html/body/div/div/div[2]/div/div/form/div[3]/button').click()
      cy.wait(5000)
      cy.get('[href="/customer-company-admin"] > .link > .font-inter > div').click() //Click on CC Admin left menu
      cy.get('.gap-5 > .cursor-pointer').click()
  
      //Required Name List...........
      const first_name = ["John", "Robert", "Donald", "Elon", "Joe", "Ivanka",
       "Juyena", "Merlin", "Lucia", "Hanni"]

       const last_name = ["Doe", "Brown", "Trump", "Musk", "Biden", "Trump",
       "Beris", "Desouza", "Born", "Dus"]

      //Open Add form................
      for (var i = 0; i < 10; i++) {
        cy.wait(6000)
        cy.xpath('/html/body/div[1]/div/div[2]/div[3]/div[1]/div[2]/div[2]/div[1]/button').click() //Open add form

        cy.get(':nth-child(2) > .wrapper > .toggler').click() //customer company dropdown open
        cy.wait(2000)
        cy.get('.options > :nth-child(1)').click() //Select company from dropdown

        cy.get(':nth-child(5) > .w-full').type(first_name[i]) //first name
        cy.get(':nth-child(6) > .w-full').type(last_name[i]) //last name

        cy.get(':nth-child(8) > .w-full').type('naveedhcse+11'+i+'@gmail.com') //writing email

        cy.wait(2000)
        cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[13]/button[1]').click() //press on save button


      }
  
    }) 
   
  })