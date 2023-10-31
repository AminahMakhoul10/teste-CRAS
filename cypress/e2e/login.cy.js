describe('Login', () => {
    beforeEach(() => {
      cy.visit('https://front-cras.app.fslab.dev/');
    })

    it("Deve realizar o login com sucesso- cenário de  sucesso", () => {
        cy.get("#email").type("dev@gmail.com");
        cy.get("#senha").type("123");
        cy.get(" .styles_button__dr0t2").click();

    })

    it("Deve retornar mensagem de erro devido usuário inválido  - cenário de insucesso", () => {
        cy.get("#email").type("dev@gmail.com");
        cy.get("#senha").type("123");
        cy.get(" .styles_button__dr0t2").click();
        cy.get('.Toastify__toast-body').should('be.visible').contains('Usuário ou Senha inválida', { timeout: 10000 });

        
    })

    it("Deve retornar msg dos campos obrigatório para login - cenário de insucesso", () => {
        cy.get(" .styles_button__dr0t2").click();
        cy.get(':nth-child(2) > .styles_formItem__H8I19 > .styles_errorMessage__IKSlh').contains('O email é obrigatório'); 
        cy.get(':nth-child(3) > .styles_formItem__H8I19 > .styles_errorMessage__IKSlh').contains('A senha é obrigatória'); 

    })

    it("Deve retornar mensagem de erro por senha ou usuário  - cenário de insucesso", () => {
        cy.get("#email").type("dev@gmail.com");
        cy.get("#senha").type("123");
        cy.get(" .styles_button__dr0t2").click();
        cy.get('.Toastify__toast-body').should('be.visible').contains('Usuário ou Senha inválida', { timeout: 10000 });

        

    })
  
  
  })
  
  