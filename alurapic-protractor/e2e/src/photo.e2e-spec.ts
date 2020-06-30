import { PagesHelper } from './pageObjects/helper.po';
import { PhotoFormPage } from './pageObjects/photos/photo-form.po';
import { PhotoListPage } from './pageObjects/photos/photo-list.po';

describe('Testando funcionalidades de fotos', () => {
  const comentarioFoto = 'quadro_' + new Date().toISOString();
  let photoFormPage = new PhotoFormPage();
  let photoListPage = new PhotoListPage();

  afterEach(() => {
    PagesHelper.travaExecucao();
  });

  it('deve navegar para tela cadastrar foto', () => {
    photoFormPage.navegarParaPhotoForm();
  });

  it('deve cadastrar imagem', () => {
    photoFormPage.carregarImagem();
    photoFormPage.comentarImagem(comentarioFoto);
    photoFormPage.obterBotaoUpload().click();
  });

  it('deve buscar imagem', () => {
    photoListPage.navegarParaPhotoList();
    photoListPage.buscarImagem(comentarioFoto);
    expect(photoListPage.pegarImagem()).toBeDefined();
  });
});