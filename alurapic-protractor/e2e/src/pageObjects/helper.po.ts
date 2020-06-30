import { browser, by, element } from 'protractor';

export class PagesHelper {

  static travaExecucao(timeMillis?: number) {
    browser.sleep(timeMillis || 750);
  }

  static obterUrlAtual() {
    return browser.getCurrentUrl().then(url => {
      const indiceInicioUrl = url.indexOf('#') + 1;
      return url.substr(indiceInicioUrl);
    });
  }

  static definirValor(valorFormControlName: string, valorCampo: string) {
    return element(by.formControlName(valorFormControlName)).sendKeys(valorCampo)
  }
}