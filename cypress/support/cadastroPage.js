export const cadastroPage = {
  visitar: () => cy.visit('/'),
  acessarCadastro: () => cy.get('.icon-user-unfollow').click(),
  preencherEmail: (email) => cy.get('#reg_email').type(email),
  preencherSenha: (senha) => cy.get('#reg_password').type(senha),
  enviar: () => cy.get(':nth-child(4) > .button').click(),
  verificarContaCriada: () =>
    cy.get('.page-title', { timeout: 10000 }).should('contain.text', 'Minha conta')
};
