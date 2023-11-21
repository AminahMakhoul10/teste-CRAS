/*Texto do describre("Pessoas")
Texto do caso de teste ("Deve cadastrar pessoa com todos os campos preenchidos")
Texto do caso de teste ("Deve retornar msg de campos obrigatórios")
Texto do caso de teste ("Deve buscar uma pessoa pelo nome e alterar seus dados")
Texto do caso de teste ("Deve buscar uma pessoa pelo CPF e alterar seus dados")
Texto do caso de teste ("Deve cadastrar atendimento para a pessoa")
Texto do caso de teste ("Deve visualizar os dados da pessoa")
Texto do caso de teste ("Deve buscar pessoa listar os atendimentos recebidos e aterar os dados")
PARTE 5 DO TESTE CRAS*/ 

import faker from "faker-br";
import {mascaraCPF} from "../utils/formatarcpf"

const nome = `${fake.name.firstName()} ${fake.name.lastName()} ${fake.name.lastName()}`
const cpf = fake.br.cpf()

describe("Pessoas", () => {
  beforeEach(() => {
    cy.visit("https://front-cras.app.fslab.dev/");
    cy.logar(Cypress.env('email'), Cypress.env('senha'), {log: false });
    cy.pessoas()
  });

  it('Deve cadastrar pessoa com todos os campos preenchidos', () => {
    cy.get(':nth-child(4) > .styles_container__NSLBw > #buscar').click()
    cy.wait(1000)
    cy.get('#nome').type(nome)
    cy.get('#cpf').type(cpf)
    cy.get('#nit').type(cpf)
    cy.get('#dataNascimento').type('2004-01-07')
    cy.get('#bairro').type("Jardim Souza")
    cy.get('#logradouro').type('Rua 987')
    cy.get('#cep').type('76897-046')
    cy.get('#numero').type('3333')
    cy.get('#telefone').type("(33) 3333")
    cy.get('#telefoneContato').type('Alarik')
    cy.get('[type="submit"]').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').contains("Pessoa cadastrada com sucesso")
  })

    it('Deve retornar msg de campos obrigatórios', () => {
      cy.get(':nth-child(4) > .styles_container__NSLBw > #buscar').click()
      cy.wait(1000)
      cy.get('[type="submit"]').click()

      cy.get(':nth-child(1) > .styles_errorMessage__IKSlh').contains('Nome é obrigatório')
      cy.get(':nth-child(4) > .styles_errorMessage__IKSlh').contains('Data de nascimento é obrigatório')
  })

  it('Deve buscar uma pessoa pelo nome e alterar seus dados', () => {
    cy.get(':nth-child(1) > #nome').type(nome)
    cy.get(':nth-child(3) > .styles_container__NSLBw > #buscar').click()
    cy.wait(2000)
    cy.get('tbody').contains(nome)
    cy.get(':nth-child(1) > :nth-child(5) > .styles_container__NSLBw > [alt="Editar pessoa"]').click()
    cy.get('#bairro').clear()
    cy.get('#bairro').type("Planalto")
    cy.get('#telefoneContato').clear()
    cy.get('#telefoneContato').type('Orodoeht')
    cy.get('[type="submit"]').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').contains("Pessoa atualizada com sucesso")
  })

  it("Deve buscar uma pessoa pelo CPF e alterar seus dados", () => {
    cy.get(':nth-child(2) > #nome').type(mascaraCPF(cpf))  
    cy.get(':nth-child(3) > .styles_container__NSLBw > #buscar').click()
    cy.wait(1000)
    cy.get('tbody > .styles_tr__2bCIW > :nth-child(1)').contains(nome)
    cy.get('[alt="Editar pessoa"]').click()
    cy.get('#bairro').clear()
    cy.get('#bairro').type("Barão 2")
    cy.get('#telefoneContato').clear()
    cy.get('#telefoneContato').type('Alarik')
    cy.get('[type="submit"]').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').contains("Pessoa atualizada com sucesso")
})


it("Deve cadastrar atendimento para a pessoa", () => {
  cy.get(':nth-child(2) > #nome').type(mascaraCPF(cpf))
  cy.get(':nth-child(3) > .styles_container__NSLBw > #buscar').click()
  cy.wait(1000)
  cy.get('[alt="Cadastrar atendimento"]').click()
  cy.wait(1000)
  cy.get('#dataAtendimento').type('2024-11-21')
  cy.get('#tipo').select('SCFV')
  cy.get('#observacao').type('Atendimento de inicio de ano')
  cy.get('[type="submit"]').click()
  cy.get('.Toastify__toast-body > :nth-child(2)').contains('Atendimento cadastrado com sucesso')
})

it("Deve visualizar os dados da pessoa", () => {
  cy.get(':nth-child(2) > #nome').type(mascaraCPF(cpf))
  cy.get(':nth-child(3) > .styles_container__NSLBw > #buscar').click()
  cy.wait(1000)
  cy.get(':nth-child(1) > :nth-child(5) > .styles_container__NSLBw > [alt="Informações da pessoa"]').click()
  cy.get('.styles_modalHeader__WEL2t > .styles_text__68fzG').contains(`Informações de ${nome}`)
})

it("Deve buscar pessoa listar os atendimentos recebidos e aterar os dados", () => {
  cy.get(':nth-child(2) > #nome').type(mascaraCPF(cpf))
  cy.get(':nth-child(3) > .styles_container__NSLBw > #buscar').click()
  cy.wait(1000)
  cy.get(':nth-child(1) > :nth-child(5) > .styles_container__NSLBw > [alt="Ver atendimentos dessa pessoa"]').click()
  cy.wait(1000)
  cy.get(':nth-child(1) > :nth-child(5) > .styles_container__NSLBw > [alt="Editar Atendimento"]').click()
  cy.wait(1000)
  cy.get('#observacaoAtendimento').clear()
  cy.get('#observacaoAtendimento').type('Atendimento de início de ano novo')
  cy.get('[type="submit"]').click()
  cy.get('.Toastify__toast-body > :nth-child(2)').contains('Atendimento atualizado com sucesso')

})



});