import { browser, by, element } from 'protractor';

export class SigninPage {

  acessarHome() {
    return browser.get('');
  }

  obterUrlAtual() {
    return browser.getCurrentUrl();
  }

  pegarInput(valorFormControlName: string, valorCampo: string) {
    return element(by.css(`input[formControlName="${valorFormControlName}"]`)).sendKeys(valorCampo);
  }

  pegarBotaoLogin() {
    return element(by.buttonText('login'));
  }
}