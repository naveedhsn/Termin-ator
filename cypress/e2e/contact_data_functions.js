/// <reference types="cypress-xpath" />
import {first_name, last_name} from './Data';
import {email, birthdate, phone_no, test_phone} from './Data';
import {street} from './Data';
import {house} from './Data';
import {post_code} from './Data';
import {ort} from './Data';

export function first_10(i){
    cy.wait(6000)
      cy.xpath('/html/body/div/div/div[2]/div[3]/div[1]/div[2]/div[2]/div[1]/button').click() //Open add form of contact data

      cy.wait(6000)

      cy.get('.general__information > .accordion > .accordion__body > .form > :nth-child(5) > .single-select > .wrapper > .toggler').click() //open campaign dropdown
      cy.get(':nth-child(5) > .single-select > .wrapper > .options > :nth-child(2)').click() //select 2nd item from dropdown

      cy.get('.toggler > .outline-none').click() //open dropdown of Korrespondenzsprache
      cy.get('.options > :nth-child(1)').click() //select value from the dropdown

      cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[2]/div/div[2]/div/div[3]/div/div/div').click() //Open dropdown of andere
      cy.get('.options > :nth-child(2)').click() //select value from the dropdown

      cy.get('.personal__information > .accordion > .accordion__body > .form > :nth-child(5) > .input-element > .w-full').type(first_name[i]) //write first name
      cy.get('.form > :nth-child(6) > .input-element > .w-full').type(last_name[i]) //write last name
      cy.get('#date').type(birthdate[i]) //write birthdate
      cy.get('.country-code-toggler > .outline-none').click() //open country code for mobile
      cy.get(':nth-child(1) > .dialcode').click() //select country switzerland
      cy.get('.bg-transparent').type(phone_no+test_phone+i) //write mobile number
      cy.get(':nth-child(10) > .input-element > .w-full').type(email[0]+i+'cd@gmail.com') //write email

      cy.get(':nth-child(1) > .input-element > .w-full').type(street[i]) //write street name
      cy.get(':nth-child(2) > .input-element > .w-full').type(house[i]) //write house
      cy.get(':nth-child(3) > .input-element > .w-full').type(post_code[i]) //write post code
      cy.get('.address__information > .accordion > .accordion__body > .form > :nth-child(5) > .input-element > .w-full').type(ort[i]) //write ort
      cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[3]/div/div[2]/div/div[6]/div/div/div').click() //open dropdown of Land
      cy.get('.options > :nth-child(1)').click() //select land from dropdown
      cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[3]/div/div[2]/div/div[7]/div/div/div').click() //open dropdown of kanton
      cy.get('.options > :nth-child(3)').click() //select value from kanton dropdown
      cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[3]/div/div[2]/div/div[9]/div/div/div').click() //Open region dropdown
      cy.get('.options > :nth-child(1)').click() //select value from region


      cy.get(':nth-child(1) > .grid > :nth-child(2) > .single-select > .wrapper > .toggler').click() //Open dropdown of Kontaktierung erwünscht
      cy.get('.options > :nth-child(1)').click() //select value from the dropdown

      cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[8]/button[1]').click() //Click on SAVE button

}


export function Second_10(i){
    cy.wait(6000)
      cy.xpath('/html/body/div/div/div[2]/div[3]/div[1]/div[2]/div[2]/div[1]/button').click() //Open add form of contact data

      cy.wait(6000)

      cy.get('.general__information > .accordion > .accordion__body > .form > :nth-child(5) > .single-select > .wrapper > .toggler').click() //open campaign dropdown
      cy.get(':nth-child(5) > .single-select > .wrapper > .options > :nth-child(3)').click() //select 3rd item from dropdown

      cy.get('.toggler > .outline-none').click() //open dropdown of Korrespondenzsprache
      cy.get('.options > :nth-child(1)').click() //select value from the dropdown

      cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[2]/div/div[2]/div/div[3]/div/div/div').click() //Open dropdown of andere
      cy.get('.options > :nth-child(2)').click() //select value from the dropdown

      cy.get('.personal__information > .accordion > .accordion__body > .form > :nth-child(5) > .input-element > .w-full').type(first_name[i]) //write first name
      cy.get('.form > :nth-child(6) > .input-element > .w-full').type(last_name[i]) //write last name
      cy.get('#date').type(birthdate[i]) //write birthdate
      cy.get('.country-code-toggler > .outline-none').click() //open country code for mobile
      cy.get(':nth-child(1) > .dialcode').click() //select country switzerland
      cy.get('.bg-transparent').type(phone_no+test_phone+i) //write mobile number
      cy.get(':nth-child(10) > .input-element > .w-full').type(email[0]+i+'cd@gmail.com') //write email

      cy.get(':nth-child(1) > .input-element > .w-full').type(street[i]) //write street name
      cy.get(':nth-child(2) > .input-element > .w-full').type(house[i]) //write house
      cy.get(':nth-child(3) > .input-element > .w-full').type(post_code[i]) //write post code
      cy.get('.address__information > .accordion > .accordion__body > .form > :nth-child(5) > .input-element > .w-full').type(ort[i]) //write ort
      cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[3]/div/div[2]/div/div[6]/div/div/div').click() //open dropdown of Land
      cy.get('.options > :nth-child(1)').click() //select land from dropdown
      cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[3]/div/div[2]/div/div[7]/div/div/div').click() //open dropdown of kanton
      cy.get('.options > :nth-child(3)').click() //select value from kanton dropdown
      cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[3]/div/div[2]/div/div[9]/div/div/div').click() //Open region dropdown
      cy.get('.options > :nth-child(1)').click() //select value from region


      cy.get(':nth-child(1) > .grid > :nth-child(2) > .single-select > .wrapper > .toggler').click() //Open dropdown of Kontaktierung erwünscht
      cy.get('.options > :nth-child(1)').click() //select value from the dropdown

      cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[8]/button[1]').click() //Click on SAVE button

}


export function Third_10(i){
    cy.wait(6000)
      cy.xpath('/html/body/div/div/div[2]/div[3]/div[1]/div[2]/div[2]/div[1]/button').click() //Open add form of contact data

      cy.wait(3000)

      cy.get('.general__information > .accordion > .accordion__body > .form > :nth-child(5) > .single-select > .wrapper > .toggler').click() //open campaign dropdown
      cy.get(':nth-child(5) > .single-select > .wrapper > .options > :nth-child(4)').click() //select 4th item from dropdown

      cy.get('.toggler > .outline-none').click() //open dropdown of Korrespondenzsprache
      cy.get('.options > :nth-child(1)').click() //select value from the dropdown

      cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[2]/div/div[2]/div/div[3]/div/div/div').click() //Open dropdown of andere
      cy.get('.options > :nth-child(2)').click() //select value from the dropdown

      cy.get('.personal__information > .accordion > .accordion__body > .form > :nth-child(5) > .input-element > .w-full').type(first_name[i]) //write first name
      cy.get('.form > :nth-child(6) > .input-element > .w-full').type(last_name[i]) //write last name
      cy.get('#date').type(birthdate[i]) //write birthdate
      cy.get('.country-code-toggler > .outline-none').click() //open country code for mobile
      cy.get(':nth-child(1) > .dialcode').click() //select country switzerland
      cy.get('.bg-transparent').type(phone_no+test_phone+i) //write mobile number
      cy.get(':nth-child(10) > .input-element > .w-full').type(email[0]+i+'cd@gmail.com') //write email

      cy.get(':nth-child(1) > .input-element > .w-full').type(street[i]) //write street name
      cy.get(':nth-child(2) > .input-element > .w-full').type(house[i]) //write house
      cy.get(':nth-child(3) > .input-element > .w-full').type(post_code[i]) //write post code
      cy.get('.address__information > .accordion > .accordion__body > .form > :nth-child(5) > .input-element > .w-full').type(ort[i]) //write ort
      cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[3]/div/div[2]/div/div[6]/div/div/div').click() //open dropdown of Land
      cy.get('.options > :nth-child(1)').click() //select land from dropdown
      cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[3]/div/div[2]/div/div[7]/div/div/div').click() //open dropdown of kanton
      cy.get('.options > :nth-child(3)').click() //select value from kanton dropdown
      cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[3]/div/div[2]/div/div[9]/div/div/div').click() //Open region dropdown
      cy.get('.options > :nth-child(1)').click() //select value from region


      cy.get(':nth-child(1) > .grid > :nth-child(2) > .single-select > .wrapper > .toggler').click() //Open dropdown of Kontaktierung erwünscht
      cy.get('.options > :nth-child(1)').click() //select value from the dropdown

      cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[8]/button[1]').click() //Click on SAVE button

}

export function Forth_10(i){
    cy.wait(6000)
      cy.xpath('/html/body/div/div/div[2]/div[3]/div[1]/div[2]/div[2]/div[1]/button').click() //Open add form of contact data

      cy.wait(3000)

      cy.get('.general__information > .accordion > .accordion__body > .form > :nth-child(5) > .single-select > .wrapper > .toggler').click() //open campaign dropdown
      cy.get(':nth-child(5) > .single-select > .wrapper > .options > :nth-child(5)').click() //select 5th item from dropdown

      cy.get('.toggler > .outline-none').click() //open dropdown of Korrespondenzsprache
      cy.get('.options > :nth-child(1)').click() //select value from the dropdown

      cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[2]/div/div[2]/div/div[3]/div/div/div').click() //Open dropdown of andere
      cy.get('.options > :nth-child(2)').click() //select value from the dropdown

      cy.get('.personal__information > .accordion > .accordion__body > .form > :nth-child(5) > .input-element > .w-full').type(first_name[i]) //write first name
      cy.get('.form > :nth-child(6) > .input-element > .w-full').type(last_name[i]) //write last name
      cy.get('#date').type(birthdate[i]) //write birthdate
      cy.get('.country-code-toggler > .outline-none').click() //open country code for mobile
      cy.get(':nth-child(1) > .dialcode').click() //select country switzerland
      cy.get('.bg-transparent').type(phone_no+test_phone+i) //write mobile number
      cy.get(':nth-child(10) > .input-element > .w-full').type(email[0]+i+'cd@gmail.com') //write email

      cy.get(':nth-child(1) > .input-element > .w-full').type(street[i]) //write street name
      cy.get(':nth-child(2) > .input-element > .w-full').type(house[i]) //write house
      cy.get(':nth-child(3) > .input-element > .w-full').type(post_code[i]) //write post code
      cy.get('.address__information > .accordion > .accordion__body > .form > :nth-child(5) > .input-element > .w-full').type(ort[i]) //write ort
      cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[3]/div/div[2]/div/div[6]/div/div/div').click() //open dropdown of Land
      cy.get('.options > :nth-child(1)').click() //select land from dropdown
      cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[3]/div/div[2]/div/div[7]/div/div/div').click() //open dropdown of kanton
      cy.get('.options > :nth-child(3)').click() //select value from kanton dropdown
      cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[3]/div/div[2]/div/div[9]/div/div/div').click() //Open region dropdown
      cy.get('.options > :nth-child(1)').click() //select value from region


      cy.get(':nth-child(1) > .grid > :nth-child(2) > .single-select > .wrapper > .toggler').click() //Open dropdown of Kontaktierung erwünscht
      cy.get('.options > :nth-child(1)').click() //select value from the dropdown

      cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[8]/button[1]').click() //Click on SAVE button

}

export function Fifth_10(i){
    cy.wait(6000)
      cy.xpath('/html/body/div/div/div[2]/div[3]/div[1]/div[2]/div[2]/div[1]/button').click() //Open add form of contact data

      cy.wait(3000)

      cy.get('.general__information > .accordion > .accordion__body > .form > :nth-child(5) > .single-select > .wrapper > .toggler').click() //open campaign dropdown
      cy.get(':nth-child(5) > .single-select > .wrapper > .options > :nth-child(6)').click() //select 6th item from dropdown

      cy.get('.toggler > .outline-none').click() //open dropdown of Korrespondenzsprache
      cy.get('.options > :nth-child(1)').click() //select value from the dropdown

      cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[2]/div/div[2]/div/div[3]/div/div/div').click() //Open dropdown of andere
      cy.get('.options > :nth-child(2)').click() //select value from the dropdown

      cy.get('.personal__information > .accordion > .accordion__body > .form > :nth-child(5) > .input-element > .w-full').type(first_name[i]) //write first name
      cy.get('.form > :nth-child(6) > .input-element > .w-full').type(last_name[i]) //write last name
      cy.get('#date').type(birthdate[i]) //write birthdate
      cy.get('.country-code-toggler > .outline-none').click() //open country code for mobile
      cy.get(':nth-child(1) > .dialcode').click() //select country switzerland
      cy.get('.bg-transparent').type(phone_no+test_phone+i) //write mobile number
      cy.get(':nth-child(10) > .input-element > .w-full').type(email[0]+i+'cd@gmail.com') //write email

      cy.get(':nth-child(1) > .input-element > .w-full').type(street[i]) //write street name
      cy.get(':nth-child(2) > .input-element > .w-full').type(house[i]) //write house
      cy.get(':nth-child(3) > .input-element > .w-full').type(post_code[i]) //write post code
      cy.get('.address__information > .accordion > .accordion__body > .form > :nth-child(5) > .input-element > .w-full').type(ort[i]) //write ort
      cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[3]/div/div[2]/div/div[6]/div/div/div').click() //open dropdown of Land
      cy.get('.options > :nth-child(1)').click() //select land from dropdown
      cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[3]/div/div[2]/div/div[7]/div/div/div').click() //open dropdown of kanton
      cy.get('.options > :nth-child(3)').click() //select value from kanton dropdown
      cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[3]/div/div[2]/div/div[9]/div/div/div').click() //Open region dropdown
      cy.get('.options > :nth-child(1)').click() //select value from region


      cy.get(':nth-child(1) > .grid > :nth-child(2) > .single-select > .wrapper > .toggler').click() //Open dropdown of Kontaktierung erwünscht
      cy.get('.options > :nth-child(1)').click() //select value from the dropdown

      cy.xpath('/html/body/div/div/div[2]/div[3]/form/div[8]/button[1]').click() //Click on SAVE button

}