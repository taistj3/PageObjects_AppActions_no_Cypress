Cypress.Commands.add('adicionarProdutoAoCarrinho', (produto, tamanho, cor, quantidade) => {
  cy.get('.product-block').contains(produto).click();
  cy.get(`.button-variable-item-${tamanho}`).click();
  cy.get(`.button-variable-item-${cor}`).click();
  cy.get('.input-text').clear().type(quantidade);
  cy.get('.single_add_to_cart_button').click();
  cy.get('.woocommerce-message > .button').click();
});

const { faker } = require('@faker-js/faker');
Cypress.Commands.add('preencherCheckout', () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const address = faker.location.streetAddress();
  const city = faker.location.city();
  const postcode = faker.location.zipCode('#####-###');
  const email = faker.internet.email();
  cy.get('#billing_first_name').type(firstName);
  cy.get('#billing_last_name').type(lastName);
  cy.get('#billing_address_1').type(address);
  cy.get('#billing_city').type(city);
  cy.get('#billing_postcode').type(postcode);
  cy.get('#billing_phone').type(67123456789);
  cy.get('#billing_email').type(email);
  
  cy.get(`.select2-selection__arrow`).eq(1).click();
  cy.get('.select2-search__field').type('Mato Grosso do Sul');
  cy.get(`[class="select2-results__option select2-results__option--highlighted"]`).click();
 
});
