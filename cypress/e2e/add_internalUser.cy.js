/// <reference types="cypress-xpath" />
import {first_name} from './Data';
import {last_name} from './Data';
import {email} from './Data';


describe('Add Customer Company', () => {
  it('Login_SystemAdmin', function() {
    cy.viewport(1050,700) //Change viewport
    //cy.visit('https://app.termin-ator.ch/') //Production server
    cy.visit('https://trqa.dinnova.ch/') //QA server
    cy.get('#email').type('naveedhcse+2@gmail.com')
    cy.get('#password').type('Password12@')
    cy.xpath('/html/body/div/div/div[2]/div/div/form/div[3]/button').click()
    cy.wait(5000)
    cy.get('[href="/internal-users"] > .link > .font-inter > div').click() //Click on internal user left menu
    cy.get('.gap-5 > .cursor-pointer').click()

    //Functions for different internal users
    function leader(i){
        cy.wait(6000)
        cy.xpath('/html/body/div/div/div[2]/div[3]/div[1]/div[2]/div[2]/div[1]/button').click() //Open add form
        cy.get('.form > :nth-child(2) > .wrapper > .toggler').click() //Open rolle dropdown
        cy.wait(2000)
        cy.get('.options > :nth-child(1)').click() //Select leader from dropdown
        cy.wait(2000)

        cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[5]/div/div').click() //open dropdown of variable
        cy.get('.options > :nth-child(1)').click() //select from variable dropdown
        
        cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[6]/div/div').click() //open dropdown of variableA
        cy.get('.options > :nth-child(1)').click() //select from VarivaleA dropdown

        cy.get(':nth-child(1) > .wrapper > .toggler').click() //open access right drop down
        cy.get(':nth-child(1) > :nth-child(1) > .left >svg').click() //select access right 1

        cy.get('.toggler > .outline-none').click() //open drodown of Korrespondenzsprache
        cy.get('.options > :nth-child(1)').click() //select value from Korrespondenzsprache

        cy.get(':nth-child(9) > .wrapper > .toggler').click() //open dropdown of anrede
        cy.get('.options > :nth-child(2)').click() //select value from anrede

        cy.get(':nth-child(10) > .w-full').type(first_name[i]) //write first name
        cy.get(':nth-child(11) > .w-full').type(last_name[i]) //write last name
        cy.get(':nth-child(13) > .w-full').type(email[0]+i+'@gmail.com') //write email

        cy.xpath('/html/body/div[1]/div/div[2]/div[3]/form/div[18]/div/div').click() //email invitation ON
        cy.wait(1000)
        cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[20]/button[1]').click() //Click on save button

    }

    function manager(i){
        cy.wait(6000)
        cy.xpath('/html/body/div/div/div[2]/div[3]/div[1]/div[2]/div[2]/div[1]/button').click() //Open add form
        cy.get('.form > :nth-child(2) > .wrapper > .toggler').click() //Open rolle dropdown
        cy.wait(2000)
        cy.get('.options > :nth-child(2)').click() //Select manager from dropdown
        cy.wait(2000)

        cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[5]/div/div').click() //open dropdown of variable
        cy.get('.options > :nth-child(1)').click() //select from variable dropdown
        
        cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[6]/div/div').click() //open dropdown of variableA
        cy.get('.options > :nth-child(1)').click() //select from VarivaleA dropdown

        cy.get(':nth-child(1) > .wrapper > .toggler').click() //open access right drop down
        cy.get(':nth-child(2) > :nth-child(1) > .left >svg').click() //select access right 2

        cy.get('.toggler > .outline-none').click() //open drodown of Korrespondenzsprache
        cy.get('.options > :nth-child(1)').click() //select value from Korrespondenzsprache

        cy.get(':nth-child(9) > .wrapper > .toggler').click() //open dropdown of anrede
        cy.get('.options > :nth-child(2)').click() //select value from anrede

        cy.get(':nth-child(10) > .w-full').type(first_name[i]) //write first name
        cy.get(':nth-child(11) > .w-full').type(last_name[i]) //write last name
        cy.get(':nth-child(13) > .w-full').type(email[0]+i+'@gmail.com') //write email

        cy.xpath('/html/body/div[1]/div/div[2]/div[3]/form/div[18]/div/div').click() //email invitation ON
        cy.wait(1000)
        cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[20]/button[1]').click() //Click on save button

    }

    function quality_controller(i){
        cy.wait(6000)
        cy.xpath('/html/body/div/div/div[2]/div[3]/div[1]/div[2]/div[2]/div[1]/button').click() //Open add form
        cy.get('.form > :nth-child(2) > .wrapper > .toggler').click() //Open rolle dropdown
        cy.wait(2000)
        cy.get('.options > :nth-child(3)').click() //Select quality controller from dropdown
        cy.wait(2000)

        cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[5]/div/div').click() //open dropdown of variable
        cy.get('.options > :nth-child(1)').click() //select from variable dropdown
        
        cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[6]/div/div').click() //open dropdown of variableA
        cy.get('.options > :nth-child(1)').click() //select from VarivaleA dropdown

        cy.get('.multi-select > .wrapper > .toggler > .leading-8').click() //open alignment drop down
        cy.get('.options > :nth-child(1)').click() //select lead
        cy.get('.options > :nth-child(2)').click() //select termination

        cy.get('.toggler > .outline-none').click() //open drodown of Korrespondenzsprache
        cy.get(':nth-child(2) > .wrapper > .options > :nth-child(1)').click() //select value from Korrespondenzsprache

        cy.get(':nth-child(9) > .wrapper > .toggler').click() //open dropdown of anrede
        cy.get('.options > :nth-child(2)').click() //select value from anrede

        cy.get(':nth-child(10) > .w-full').type(first_name[i]) //write first name
        cy.get(':nth-child(11) > .w-full').type(last_name[i]) //write last name
        cy.get(':nth-child(13) > .w-full').type(email[0]+i+'@gmail.com') //write email

        cy.get(':nth-child(16) > .w-full').click() //click on add competence button
        cy.get('form.w-full > .single-select > .wrapper > .toggler').click() //Open dropdown of ART
        cy.get('.options > :nth-child(1)').click() //select Sprache
        cy.get(':nth-child(3) > .wrapper > .toggler > .outline-none').click() //open dropdown of Kompetenz
        cy.get('.options > :nth-child(2)').click() // select value from the kompetenz dropdown
        cy.get(':nth-child(4) > .wrapper > .toggler').click() //Open Niveau dropdown
        cy.get('.options > :nth-child(3)').click() //select Niveau from dropdown
        cy.get('form.w-full > :nth-child(5) > .wrapper > .toggler').click() //Open dropdown of kompetenz status
        cy.get('.options > :nth-child(1)').click() //Select value from kompetenz status
        cy.xpath('/html/body/div/div/div[1]/div/div[2]/div/form/div[5]/button[1]').click() //Click on add button
        cy.wait(4000)

        //cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[19]/div/div').click() //email invitation ON
        cy.wait(1000)
        cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[22]/button[1]').click() //Click on save button

    }

    function call_agent(i){
        cy.wait(6000)
        cy.xpath('/html/body/div/div/div[2]/div[3]/div[1]/div[2]/div[2]/div[1]/button').click() //Open add form
        cy.get('.form > :nth-child(2) > .wrapper > .toggler').click() //Open rolle dropdown
        cy.wait(2000)
        cy.get('.options > :nth-child(4)').click() //Select quality controller from dropdown
        cy.wait(2000)

        cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[5]/div/div').click() //open dropdown of variable
        cy.get('.options > :nth-child(1)').click() //select from variable dropdown
        
        cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[6]/div/div').click() //open dropdown of variableA
        cy.get('.options > :nth-child(1)').click() //select from VarivaleA dropdown

        cy.get('.multi-select > .wrapper > .toggler > .leading-8').click() //open alignment drop down
        cy.get('.options > :nth-child(1)').click() //select lead
        cy.get('.options > :nth-child(2)').click() //select termination

        cy.get('.toggler > .outline-none').click() //open drodown of Korrespondenzsprache
        cy.get(':nth-child(2) > .wrapper > .options > :nth-child(1)').click() //select value from Korrespondenzsprache

        cy.get(':nth-child(9) > .wrapper > .toggler').click() //open dropdown of anrede
        cy.get('.options > :nth-child(2)').click() //select value from anrede

        cy.get(':nth-child(10) > .w-full').type(first_name[i]) //write first name
        cy.get(':nth-child(11) > .w-full').type(last_name[i]) //write last name
        cy.get(':nth-child(13) > .w-full').type(email[0]+i+'@gmail.com') //write email

        cy.get(':nth-child(16) > .w-full').click() //click on add competence button
        cy.get('form.w-full > .single-select > .wrapper > .toggler').click() //Open dropdown of ART
        cy.get('.options > :nth-child(1)').click() //select Sprache
        cy.get(':nth-child(3) > .wrapper > .toggler > .outline-none').click() //open dropdown of Kompetenz
        cy.get('.options > :nth-child(2)').click() // select value from the kompetenz dropdown
        cy.get(':nth-child(4) > .wrapper > .toggler').click() //Open Niveau dropdown
        cy.get('.options > :nth-child(3)').click() //select Niveau from dropdown
        cy.get('form.w-full > :nth-child(5) > .wrapper > .toggler').click() //Open dropdown of kompetenz status
        cy.get('.options > :nth-child(1)').click() //Select value from kompetenz status
        cy.xpath('/html/body/div/div/div[1]/div/div[2]/div/form/div[5]/button[1]').click() //Click on add button
        cy.wait(4000)

        //cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[20]/div/div').click() //email invitation ON
        cy.wait(1000)
        cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[22]/button[1]').click() //Click on save button

    }


    //Open Add form................
    for (var i = 0; i < 20; i++) {
        if(i==0 || i==4 || i==8 || i==12){
            leader(i)
        }
        else if(i==1 || i==5 || i==9 || i==13){
            manager(i)
        }
        else if (i==2 || i==6 || i==10 || i==14){
            quality_controller(i)
        }
        else if(i==3 || i==7 || i==10 || i==15) {
            call_agent(i)
        }
        else{
            leader(i)
        }
      
    }

  }) 
 
})