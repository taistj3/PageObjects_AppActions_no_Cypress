/// <reference types="cypress" />

describe('Carrinho usando comando customizado', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve adicionar um produto ao carrinho', () => {
    cy.adicionarProdutoAoCarrinho('Augusta Pullover Jacket', 'M', 'Blue', 2);
    cy.get('.checkout-button').click();
    cy.preencherCheckout();
    cy.get('#payment_method_cod').click()
    cy.get('#terms').click()
    cy.get('#place_order').click()
    cy.contains('Obrigado. Seu pedido foi recebido.').should('be.visible')
  })
});