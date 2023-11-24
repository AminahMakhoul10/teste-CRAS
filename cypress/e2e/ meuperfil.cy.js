//TODOS FUNCIONANDO

describe("Meu Perfil", () => {
  beforeEach(() => {
    cy.visit("https://front-cras.app.fslab.dev")

    cy.get(`#email`).type("aminahm@gmail.com");
    cy.get("#senha").type("@Aminah12345678");
    cy.get(`.styles_button__dr0t2`).click();
  })

  it("Deve alterar os campos e a senha", () => {
    cy.get('.styles_buttonMenu__mmyUS > img').click();
    cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/usuarios/perfil"]').click()
    cy.get('.styles_buttonMenu__mmyUS > img').click();
    cy.get('.styles_button__dr0t2').click()
    
    cy.get("#senha").type("aminaH123@");
    cy.get("#confirmarSenha").type("aminaH123@")
    cy.get('.styles_container__NSLBw > .styles_button__dr0t2').click()
    cy.contains("Senha alterada com sucesso")
  })

})

