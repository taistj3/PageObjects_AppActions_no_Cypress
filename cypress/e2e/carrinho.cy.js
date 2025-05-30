/// <reference types="cypress" />

describe('Carrinho usando comando customizado', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve adicionar um produto ao carrinho', () => {
    cy.adicionarProdutoAoCarrinho('Augusta Pullover Jacket', 'M', 'Blue', 2);
    cy.get('.page-title').should('contain.text', 'Carrinho');
  });
});
