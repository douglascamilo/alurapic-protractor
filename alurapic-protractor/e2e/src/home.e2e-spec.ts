import { SigninPage } from './pageObjects/home/signin.po';
import { PagesHelper } from './pageObjects/helper.po';
import { SignupPage } from './pageObjects/home/signup.po';

describe('Testando tela Home', () => {
  let signinPage = new SigninPage();
  let signupPage = new SignupPage();
  const nomeUsuario = 'test1';
  const senhaUsuario = 'test_password';

  afterEach(() => {
    PagesHelper.travaExecucao();
  });

  it('navegar para formulario novo usuario', () => {
    signupPage.acessarPagina();
    expect(signupPage.obterUrlAtual()).toBe(signupPage.urlPagina);
  });

  it('preencher formulario', () => {
    signupPage.definirValor('email', 'test_1@gmail.com');
    signupPage.definirValor('fullName', 'Full Name');
    signupPage.definirValor('userName', nomeUsuario);
    signupPage.definirValor('password', senhaUsuario);

    signupPage.obterBotaoRegister().click();
  });

  it('deve ir para home', () => {
    signinPage.acessarHome();
    expect(signinPage.obterUrlAtual()).toBe('/home');
  });

  it('deve fazer login', () => {
    signinPage.definirValor('userName', nomeUsuario);
    signinPage.definirValor('password', senhaUsuario);
    signinPage.obterBotaoLogin().click();

    expect(signinPage.obterUrlAtual()).toBe(`/user/${nomeUsuario}`);
  });
});