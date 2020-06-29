import { SignupPage } from './signup.po';
import { PagesHelper } from './helper.po';

describe('Testando tela SignUp', () => {
  let signupPage = new SignupPage();

  beforeEach(() => {
    PagesHelper.travaExecucao();
  });

  it('efetua logout', () => {
    signupPage.obterLinkLogout().click();
    expect(signupPage.obterUrlAtual()).toBe('/home');
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
  });
});