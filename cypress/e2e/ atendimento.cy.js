/*Texto do describe("Atendimentos")
Texto do caso de teste ("Deve alterar os dados do atendimento cadastrado")
Texto do caso de teste ("Deve retornar msg de onde data inicial é maior que final")
Texto do caso de teste ("Deve realizar busca somente pelo tipo de atendimento")
Texto do caso de teste ("Deve realizar busca somente com as datas inicial e final")
Texto do caso de teste ("Deve buscar por tipo de atendimento e alterar os dados do atendimento") 
PARTE 5 DO TESTE CRAS*/

import faker from "faker-br";
import { describe } from "mocha";

describe("Atendimentos", () => {
  beforeEach(() => {
    cy.visit("https://front-cras.app.fslab.dev/");
    cy.logar(Cypress.env('email'), Cypress.env('senha'), {log:false});
    cy.atendimentos()
  });

  it('Deve alterar os dados do atendimento cadastrado', () => {
    cy.get(':nth-child(1) > :nth-child(5) > .styles_container__NSLBw > [alt="Editar Atendimento"]').click()
    cy.get('#observacaoAtendimento').clear()
    cy.get('#observacaoAtendimento').type('Alterando Atendimento')
    cy.get('[type="submit"]').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').contains('Atendimento atualizado com sucesso')
  });

  it('Deve retornar msg de onde data inicial é maior que final', () => {
    cy.get('#dataInicial').type('2023-11-17')
    cy.get('#dataFinal').type('2023-11-16')
    cy.get('#buscar').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').contains("Data inicial não pode ser maior ou igual a data final")
  });

  it('Deve realizar busca somente pelo tipo de atendimento', () => {
    cy.get('#tipo').select('Cesta Básica')
    cy.get('#buscar').click()
    cy.get('tbody > :nth-child(1) > :nth-child(4)').contains('Cesta Básica')
  });

  it('Deve realizar busca somente com as datas inicial e final' , () => {
    cy.get('#dataInicial').type('2023-11-05')
    cy.get('#dataFinal').type('2023-11-06')
    cy.get('tbody > .styles_tr__2bCIW > :nth-child(3)').contains('06/11/2023')
  });

  it('Deve buscar por tipo de atendimento e alterar os dados do atendimento', () => {
    cy.get('#tipo').select('SCFV')
    cy.get('#buscar').click()
    cy.get('tbody > :nth-child(1) > :nth-child(4)').contains('SCFV')
    cy.get(':nth-child(1) > :nth-child(5) > .styles_container__NSLBw > [alt="Editar Atendimento"]').click()
    cy.wait(2000)
    cy.get('#observacaoAtendimento').clear()
    cy.get('#observacaoAtendimento').type('Atendimento muito demorado')
    cy.get('[type="submit"]').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').contains('Atendimento atualizado com sucesso')
  });
  
});