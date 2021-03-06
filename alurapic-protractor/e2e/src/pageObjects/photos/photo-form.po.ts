import { browser, by, element } from 'protractor';
import { PagesHelper } from '../helper.po';

const path = require('path');
const imagem = '../../../../src/assets/img/home.jpg';

export class PhotoFormPage {

  navegarParaPhotoForm() {
    return browser.get('/#/p/add');
  }

  carregarImagem() {
    const diretorioImagem = path.resolve(__dirname, imagem);
    return PagesHelper.definirValor('file', diretorioImagem);
  }

  obterBotaoUpload() {
    return element(by.buttonText('Upload'));
  }

  comentarImagem(comentario: string) {
    return PagesHelper.definirValor('description', comentario);
  }
}