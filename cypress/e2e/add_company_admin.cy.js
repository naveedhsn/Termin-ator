/// <reference types="cypress-xpath" />
import {email, first_name} from './Data';
import {last_name} from './Data';
import {email} from './Data';

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

      //Function with all information of add form.............
      function myFunction1(i) {
        cy.wait(6000)
        cy.xpath('/html/body/div[1]/div/div[2]/div[3]/div[1]/div[2]/div[2]/div[1]/button').click() //Open add form

        cy.get(':nth-child(2) > .wrapper > .toggler').click() //customer company dropdown open
        cy.wait(2000)
      }

      function myFunction2(i){
        cy.get(':nth-child(5) > .w-full').type(first_name[i]) //first name
        cy.get(':nth-child(6) > .w-full').type(last_name[i]) //last name

        cy.get(':nth-child(8) > .w-full').type(email[0]+i+'@gmail.com') //writing email

        cy.wait(2000)
        cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[13]/button[1]').click() //press on save button
      
      }
      //Open Add form................
      for (var i = 0; i < 25; i++) {

        if(i==0){
          myFunction1(i)
          cy.get('.options > :nth-child(1)').click() //Select company from dropdown
          cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[11]/div/div').click() //email invitation send
          myFunction2(i)
          continue
        }
        else if(i==1){
          myFunction1(i)
          cy.get('.options > :nth-child(2)').click() //Select company from dropdown
          cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[11]/div/div').click() //email invitation send
          myFunction2(i)
          continue
        }
        else if(i==2){
          myFunction1(i)
          cy.get('.options > :nth-child(3)').click() //Select company from dropdown
          myFunction2(i)
          continue
        }
        else if(i==3){
          myFunction1(i)
          cy.get('.options > :nth-child(4)').click() //Select company from dropdown
          myFunction2(i)
          continue
        }
        else if(i==4){
          myFunction1(i)
          cy.get('.options > :nth-child(5)').click() //Select company from dropdown
          cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[11]/div/div').click() //email invitation send
          myFunction2(i)
          continue
        }
        else if(i==5){
          myFunction1(i)
          cy.get('.options > :nth-child(6)').click() //Select company from dropdown
          myFunction2(i)
          continue
        }
        else if(i==6){
          myFunction1(i)
          cy.get('.options > :nth-child(7)').click() //Select company from dropdown
          cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[11]/div/div').click() //email invitation send
          myFunction2(i)
          continue
        }
        else if(i==7){
          myFunction1(i)
          cy.get('.options > :nth-child(8)').click() //Select company from dropdown
          myFunction2(i)
          continue
        }
        else if(i==8){
          myFunction1(i)
          cy.get('.options > :nth-child(9)').click() //Select company from dropdown
          cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[11]/div/div').click() //email invitation send
          myFunction2(i)
          continue
        }
        else if(i==9){
          myFunction1(i)
          cy.get('.options > :nth-child(10)').click() //Select company from dropdown
          cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[11]/div/div').click() //email invitation send
          myFunction2(i)
          continue
        }
        else{
          myFunction1(i)
          cy.get('.options > :nth-child(1)').click() //Select company from dropdown
          myFunction2(i)
        }

      }
  
    }) 
   
  })