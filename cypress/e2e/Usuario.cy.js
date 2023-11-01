const { it } = require("mocha");

describe("Cadastro Usuário", () => {
    beforeEach(() => {
        cy.visit("https://front-cras.app.fslab.dev/")
        cy.get("#email").type("dev@gmail.com")
        cy.get("#senha").type("123")
        
    })

    it("Deve realizar cadastro de um usuário com status ativo - cenário de sucesso", () =>{
       
        cy.visit("https://front-cras.app.fslab.dev/usuarios/listar")
        cy.get(":nth-child(5) > .styles_button__dr0t2").click()
        cy.get("#nomeCadastrar").type("TesteCrasAminah");
        cy.get("#emailCadastrar").type("TesteCrasAminah@gmail.com");
        cy.get("#senhaCadastrar").type("@TesteCrasAminah12345678");
        cy.get('#unidadeCadastrar').select('CRAS - Vilhena')
        cy.get('#grupoCadastrar').select('Administrador')
        cy.get('[type="submit"]').click();
        cy.get('.Toastify__toast-body').contains('Usuário cadastrado com sucesso');
    })

    it("Deve retornar as mensagem de validação ao cadastrar usuário  - cenário de insucesso", () => {

    })

    it("Deve retornar uma consulta do usurário cadastrado com status ativo - cenário de sucesso", () => {

    })

    it("Deve atualizar os dados de um usuário - cenário de sucesso" , () => {

    })

    it("Deve visualizar as informações de um usuário - cenário de sucesso" , () => {
        
    })

    
  
  });
  
 
  