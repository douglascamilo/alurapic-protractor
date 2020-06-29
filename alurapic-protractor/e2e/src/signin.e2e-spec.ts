import { SigninPage } from './signin.po';

describe('Testando tela Home', () => {
  let signinPage: SigninPage;

  beforeEach(() => {
    signinPage = new SigninPage();
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

  // it('atrasar termino da execucao', () => {
  //   let valor = 0;
  //
  //   while (valor < 999999999) {
  //     valor++;
  //   }
  // });
});