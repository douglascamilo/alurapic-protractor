import { SigninPage } from './signin.po';
import { PagesHelper } from './helper.po';
import { SignupPage } from './signup.po';

describe('Testando tela Home', () => {
  let signinPage = new SigninPage();
  let signupPage = new SignupPage();

  afterEach(() => {
    PagesHelper.travaExecucao(1250);
  });

  it('navegar para formulario novo usuario', () => {
    signupPage.acessarPagina();
    expect(signupPage.obterUrlAtual()).toBe(signupPage.urlPagina);
  });

  it('preencher formulario', () => {
    signupPage.definirValor('email', 'test_1@gmail.com');
    signupPage.definirValor('fullName', 'Full Name');
    signupPage.definirValor('userName', 'test1');
    signupPage.definirValor('password', 'test_password');

    signupPage.obterBotaoRegister().click();
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