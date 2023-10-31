describe("Cadastro Usuário", () => {
    beforeEach(() => {
        cy.visit("https://front-cras.app.fslab.dev/")
        cy.get("#email").type("dev@gmail.com")
        cy.get("#senha").type("123")
        //cy.get  (".styles_button_dr0t2").click()
    })

    it("Deve realizar cadastro de um usuário com status ativo - cenário de sucesso", () =>{
        cy.get(".styles_buttonMenu_mmyUS > img").click();
        cy.visit("https://front-cras.app.fslab.dev/usuarios/listar")
        cy.get(":nth-child(5) > .styles_button__dr0t2").click()
        cy.get("#nomeCadastrar").type("TesteCrasAminah");
        cy.get("#emailCadastrar").type("TesteCrasAminah@gmail.com");
        cy.get("#senhaCadastrar").type("@TesteCrasAminah12345678");
        cy.get('#unidadeCadastrar').select('CRAS - Vilhena')
        cy.get('#grupoCadastrar').select('Administrador')
        cy.get('[type="submit"]').click();
        cy.get('.Toastify__toast-body').contains('Usuário cadastrado com sucesso!');
    })

    it("Deve retornar as mensagem de validação ao cadastrar usuário  - cenário de insucesso" , () => {
        cy.get(".styles_buttonMenu__mmyUS > img").click();
        cy.visit('https://front-cras.app.fslab.dev/usuarios/listar')
        cy.get(":nth-child(5) > .styles_button__dr0t2").click();
        cy.get("#nomeCadastrar").type("TesteCrasAminah");
        cy.get("#emailCadastrar").type("TesteCrasaminahmakhoul@gmail.com");
        cy.get("#senhaCadastrar").type("@TesteCrasAminah12345678");
        cy.get('#unidadeCadastrar').select('CRAS - Vilhena')
        cy.get('#grupoCadastrar').select('Administrador')
        cy.get('[type="submit"]').click();
        
    })

    it("Deve retornar uma consulta do usurário cadastrado com status ativo - cenário de sucesso", () => {
        cy.get(".styles_buttonMenu__mmyUS > img").click();
        cy.visit("https://front-cras.app.fslab.dev/usuarios/listar");
        cy.get(":nth-child(4) > .styles_button__dr0t2").click();
        cy.get("tbody > :nth-child(1) > :nth-child(4)").contains("Sim");
    })

    it("Deve retornar uma consulta do usurário cadastrado com status inativo - cenário de sucesso", () => {
        cy.get(".styles_buttonMenu__mmyUS > img").click()
        cy.visit("https://front-cras.app.fslab.dev/usuarios/listar");
        cy.get("span.styles_slider__0TNp_").click();
        cy.get(":nth-child(4) > .styles_button__dr0t2").click();
        cy.get("#nome").type("TesteCrasAminah");
        cy.get(":nth-child(4) > .styles_button__dr0t2").click();
        cy.get("tbody > :nth-child(1) > :nth-child(4)").contains("Não");

    })

    it("Deve atualizar os dados de um usuário - cenário de sucesso" , () => {
        cy.get(".styles_buttonMenu__mmyUS > img").click();
        cy.visit("https://front-cras.app.fslab.dev/usuarios/listar");
        cy.get("#nome").type("TesteCrasAminah");
        cy.get(":nth-child(4) > .styles_button__dr0t2").click();
        cy.wait(1000)
        

    })

    it("Deve visualizar as informações de um usuário - cenário de sucesso", () => {
        cy.get(".styles_buttonMenu__mmyUS > img").click();
        cy.visit("https://front-cras.app.fslab.dev/usuarios/listar");
        cy.get("#nome").type("TesteCrasAminah");
        cy.get(":nth-child(4) > .styles_button__dr0t2").click();
        cy.wait(1000)
        cy.get('[alt="Informação do usuário"]').click();
        cy.get(':nth-child(2) > .styles_formItem__H8I19 > .styles_container__NSLBw > .styles_text__68fzG').contains('Padrão');

    }) 
  
    
  
  });
  
 
  