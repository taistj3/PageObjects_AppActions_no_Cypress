Cypress.Commands.add('adicionarProdutoAoCarrinho', (produto, tamanho, cor, quantidade) => {
  cy.get('.product-block').contains(produto).click();
  cy.get(`.button-variable-item-${tamanho}`).click();
  cy.get(`.button-variable-item-${cor}`).click();
  cy.get('.input-text').clear().type(quantidade);
  cy.get('.single_add_to_cart_button').click();
  cy.get('.woocommerce-message > .button').click();
});
