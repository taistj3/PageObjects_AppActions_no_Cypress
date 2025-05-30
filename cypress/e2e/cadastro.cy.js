/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import { cadastroPage } from '../support/cadastroPage'

describe('Cadastro de usuário', () => {
  beforeEach(() => {
    cadastroPage.visitar();
  });

  it('Deve cadastrar usuário com sucesso', () => {
    const email = faker.internet.email();
    const senha = faker.internet.password(10, true);

    cadastroPage.acessarCadastro();
    cadastroPage.preencherEmail(email);
    cadastroPage.preencherSenha(senha);
    cadastroPage.enviar();
    cadastroPage.verificarContaCriada();
  });
});

