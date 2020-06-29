import { browser, by, element } from 'protractor';
import { PagesHelper } from './helper.po';

export class SigninPage {

  acessarHome() {
    return browser.get('');
  }

  obterUrlAtual() {
    return PagesHelper.obterUrlAtual();
  }

  definirValor(valorFormControlName: string, valorCampo: string) {
    return PagesHelper.definirValor(valorFormControlName, valorCampo);
  }

  obterBotaoLogin() {
    return element(by.buttonText('login'));
  }
}