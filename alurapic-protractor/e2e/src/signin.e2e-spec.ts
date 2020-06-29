import { SigninPage } from './signin.po';

describe('Testando tela Home', () => {
  let signinPage: SigninPage;

  beforeEach(() => {
    signinPage = new SigninPage();
  });

  it('deve ir para home', () => {
    signinPage.acessarHome();
  });

  it('deve verificar url', () => {
    expect(signinPage.obterUrlAtual()).toBe('http://localhost:4200/#/home');
  });

  it('deve fazer login', () => {
    expect(signinPage.pegarInput('userName', 'flavio'));
    expect(signinPage.pegarInput('password', '123'));
    expect(signinPage.pegarBotaoLogin().click());
  });

  // it('should ', function () {
  //   let valor = 0;
  //
  //   while (valor < 999999999) {
  //     valor++;
  //   }
  // });
});