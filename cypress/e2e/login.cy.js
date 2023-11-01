
describe('Login', () => {
    beforeEach(() => {
      cy.visit('https://front-cras.app.fslab.dev/');
    })

    it("Deve realizar o login com sucesso- cenário de  sucesso", () => {
        cy.get("#email").type("dev@gmail.com");
        cy.get("#senha").type("123");
        cy.get(" .styles_button__dr0t2").click();

    })

    it("Deve retornar mensagem de erro devido usuário inválido - cenário de insucesso", ()=> {
        cy.get("#email").type("dev4@gmail.com");
        cy.get("#senha").type("123");
        cy.get(" .styles_button__dr0t2").click();
        cy.contains("Usuário ou Senha inválida!");

    })

    it("Deve retornar msg dos campos obrigatórios para login - cenário de insucesso", ()=> {
        cy.get(" .styles_button__dr0t2").click();
        cy.contains("O email é obrigatório");
        cy.contains("A senha é obrigatória")

    })

    it("Deve retornar mensagem de erro por senha ou usuário - cenário de insucesso", ()=> {
        cy.get("#email").type("dev4@gmail.com");
        cy.get("#senha").type("123");
        cy.get(" .styles_button__dr0t2").click();
        cy.contains("Usuário ou Senha inválida!");

    })

    
  
  })
  
  