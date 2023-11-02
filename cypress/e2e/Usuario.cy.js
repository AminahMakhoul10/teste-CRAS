//SE DER ERRO EM ALGUM TESTE, PARE DE RODAR E RODE NOVAMENTE, NA MINHA MÁQUINA FUNCIONA

import fake from "faker-br";

describe("Login", () => {
    beforeEach(() => {
        cy.visit("https://front-cras.app.fslab.dev/");
        cy.get("#email").type("aminahm@gmail.com");
        cy.get("#senha").type("@Aminah12345678");
        cy.get(".styles_button__dr0t2").click();
    });

    const nomeFaker = fake.name.firstName()

    it('Deve realizar realizar cadastro de um usuário com status ativo - cenário de sucesso', () => {
        cy.get(".styles_buttonMenu__mmyUS > img").click();
        cy.visit('https://front-cras.app.fslab.dev/usuarios/listar')
        cy.get(":nth-child(5) > .styles_button__dr0t2").click();
        cy.get("#nomeCadastrar").type(nomeFaker);
        cy.get("#emailCadastrar").type(fake.internet.email());
        cy.get("#senhaCadastrar").type(fake.internet.password() + "@12345678");
        cy.get('#unidadeCadastrar').select('CRAS - Vilhena')
        cy.get('#grupoCadastrar').select('Administrador')
        cy.get('[type="submit"]').click();

        cy.get('.Toastify__toast-body').contains('Usuário cadastrado com sucesso');
    })

    it('Deve retornar as mensagem de validação ao cadastrar usuário  - cenário de insucesso', () => {

        cy.get(".styles_buttonMenu__mmyUS > img").click();
        cy.visit('https://front-cras.app.fslab.dev/usuarios/listar')
        cy.get(":nth-child(5) > .styles_button__dr0t2").click();
        cy.get("#nomeCadastrar").type(nomeFaker);
        cy.get("#emailCadastrar").type("TesteCrasAminah@gmail.com");
        cy.get("#senhaCadastrar").type(fake.internet.password() + "Am@212345678");
        cy.get('#unidadeCadastrar').select('CRAS - Vilhena')
        cy.get('#grupoCadastrar').select('Administrador')
        cy.get('[type="submit"]').click();

        cy.get('.Toastify__toast-body').contains('E-mail já cadastrado!');
    })

    it("Deve retornar uma consulta do usuário cadastrado com status ativo - cenário de sucesso", () => {
        cy.get(".styles_buttonMenu__mmyUS > img").click();
        cy.visit("https://front-cras.app.fslab.dev/usuarios/listar");
        cy.get("#nome").type(nomeFaker);
        cy.get(":nth-child(4) > .styles_button__dr0t2").click();
        cy.get(" tbody > :nth-child(1) > :nth-child(1)").contains(nomeFaker);
        cy.get("tbody > :nth-child(1) > :nth-child(4)").contains("Sim");
    })

    it("Deve atualizar os dados de um usuário - cenário de sucesso", () => {
    
        cy.get(".styles_buttonMenu__mmyUS > img").click();
        cy.visit("https://front-cras.app.fslab.dev/usuarios/listar");
        cy.get("#nome").type(nomeFaker);
        cy.get(":nth-child(4) > .styles_button__dr0t2").click();
        cy.wait(1000)
        cy.get('[alt="Atualizar usuário"]').click();
        cy.get('#grupo').select('Padrão')
        cy.get('[type="submit"]').click();

        cy.get('.Toastify__toast-body > :nth-child(2)').contains('Usuário atualizado com sucesso');
    })

     it("Deve visualizar as informações de um usuário - cenário de sucesso", () => {

        cy.get(".styles_buttonMenu__mmyUS > img").click();
        cy.visit("https://front-cras.app.fslab.dev/usuarios/listar");
        cy.get("#nome").type(nomeFaker);
        cy.get(":nth-child(4) > .styles_button__dr0t2").click();
        cy.wait(1000)
        cy.get('[alt="Informação do usuário"]').click();
        cy.get(':nth-child(2) > .styles_formItem__H8I19 > .styles_container__NSLBw > .styles_text__68fzG').contains('Padrão');
     })

})

