/// <reference types="cypress" />

describe('Funcionalidade carrinho', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve adicionar um produto ao carrinho', () => {
    cy.adicionarProdutoAoCarrinho('Augusta Pullover Jacket', 'M', 'Blue', 2);
    cy.get('.checkout-button').click();
    cy.preencherCheckout();

    cy.contains('Obrigado. Seu pedido foi recebido.').should('be.visible')
  });

  it('Deve adicionar produto ao carrinho usando intercept', () => {
    cy.intercept('POST', '**/wp-admin/admin-ajax.php', { fixture: 'carrinho.json' }).as('addCarrinho');
    cy.adicionarProdutoAoCarrinho('Augusta Pullover Jacket', 'M', 'Blue', 2);
    cy.wait('@addCarrinho').its('response.statusCode').should('eq', 200);
    cy.get('.checkout-button').click();
    cy.preencherCheckout();
    
    cy.contains('Obrigado. Seu pedido foi recebido.').should('be.visible')
  });
});

describe('Funcionalidade carrinho usando cookie "ebacVersion"', () => {
  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2');
    cy.visit('/');  
  });

  it('Deve adicionar e remover produto do carrinho', () => {
    cy.intercept('PUT', '/public/updateCart/*', { fixture: 'carrinhoCookie.json' }).as('addCarrinhoCookie');
    cy.addProdutoCookie();
    cy.wait('@addCarrinhoCookie').its('response.statusCode').should('eq', 200);
    cy.get('[data-testid="emptyCart"]').should('have.text', 'Your cart is empty');
  });
});