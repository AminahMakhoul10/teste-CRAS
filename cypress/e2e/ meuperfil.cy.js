/*Texto do describe(" Meu Perfil")
Texto do caso de teste ("Deve alterar os campos e a senha")
obs: para o caso de teste acima é nescessário escolher ou usuario para não impedir os outros teste não altere a senha do dev@gmail.com, 
após a alteração realize login para confirmar a alteração da senha. 
PARTE 5 DO TESTE CRAS*/ 
/// <reference types="cypress"/>

import faker from "faker-br";

const nome = faker.name.firstName() + "teste"
const email = faker.internet.email()
const senha = "@Aminah12345678"
const novasenha ="Ami@12345678"


describe("Meu Perfil", () => {
  it("Deve Cadastrar um usuario para ser usado no teste", () => {   
    cy.logar(Cypress.env('email'),Cypress.env('senha'))
    cy.usuarios()
    cy.get(":nth-child(5) > .styles_button__dr0t2").click()
    cy.get("#nomeCadastrar").type(nome);
    cy.get("#emailCadastrar").type(email)
    cy.get("#senhaCadastrar").type(senha);
    cy.get("#unidadeCadastrar").select("CRAS - Vilhena");
    cy.get("#grupoCadastrar").select("Administrador")
    cy.get(`[type="submit"]`).click()
    cy.contains("Usuário cadastrado com sucesso")
  });
 
  });
  it('Deve alterar os campos e a senha', () => {
    cy.logar(email,senha)
    cy.perfil()
    cy.get('.styles_button__dr0t2').click()
    cy.get('#senha').type(novasenha)
    cy.get('#confirmarSenha').type(novasenha)
    cy.get('.styles_container__NSLBw > .styles_button__dr0t2').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').contains('Senha alterada com sucesso')
    cy.wait(7000)
    cy.get('.styles_buttonMenu__mmyUS > img').click()
    cy.wait(1000)
    cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > div.styles_containerLink__L2Kg7').click()
    cy.get(':nth-child(2) > .styles_button__dr0t2').click()
    cy.wait(1000)
    cy.logar(email,novasenha)
    cy.get('.styles_text__68fzG').contains("SEMAST - Pimenta Bueno")
  })