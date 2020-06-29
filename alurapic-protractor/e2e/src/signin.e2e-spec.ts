import { SigninPage } from './signin.po';
import { PagesHelper } from './helper.po';

describe('Testando tela Home', () => {
  let signinPage = new SigninPage();

  beforeEach(() => {
    PagesHelper.travaExecucao();
  });

  it('deve ir para home', () => {
    signinPage.acessarHome();
    expect(signinPage.obterUrlAtual()).toBe('/home');
  });

  it('deve fazer login', () => {
    const nomeUsuario = 'flavio';
    signinPage.definirValor('userName', nomeUsuario);
    signinPage.definirValor('password', '123');
    signinPage.obterBotaoLogin().click();

    expect(signinPage.obterUrlAtual()).toBe(`/user/${nomeUsuario}`);
  });
});