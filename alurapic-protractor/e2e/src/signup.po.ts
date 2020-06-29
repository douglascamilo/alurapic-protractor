import { browser, by, element } from 'protractor';
import { PagesHelper } from './helper.po';

export class SignupPage {
  public readonly urlPagina = '/home/signup';

  acessarPagina() {
    return browser.get(`/#/${this.urlPagina}`);
  }

  obterUrlAtual() {
    return PagesHelper.obterUrlAtual();
  }

  obterLinkLogout() {
    return element(by.id('link-logout'));
  }

  definirValor(valorFormControlName: string, valorCampo: string) {
    return PagesHelper.definirValor(valorFormControlName, valorCampo);
  }
}