import { browser, by, element } from 'protractor';

export class SigninPage {

  acessarHome() {
    return browser.get('');
  }

  obterUrlAtual() {
    return browser.getCurrentUrl().then(url => {
      const indiceInicioUrl = url.indexOf('#') + 1;
      return url.substr(indiceInicioUrl);
    });
  }

  definirValor(valorFormControlName: string, valorCampo: string) {
    return element(by.css(`input[formControlName="${valorFormControlName}"]`)).sendKeys(valorCampo);
  }

  obterBotaoLogin() {
    return element(by.buttonText('login'));
  }
}