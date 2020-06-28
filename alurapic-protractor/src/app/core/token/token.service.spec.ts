import { TokenService } from './token.service';

describe('O servico TokenService', () => {
  let token = '';
  let tokenService;

  beforeEach(() => {
    token = 'alkshdfkjashlfads';
    tokenService = new TokenService();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('deve ser instanciado', () => {
    expect(tokenService).toBeDefined();
  });

  it('deve guardar um token', () => {
    tokenService.setToken(token);

    expect(tokenService.hasToken()).toBeTruthy();
    expect(tokenService.getToken()).toBe(token);
  });

  it('deve remover um token', () => {
    tokenService.setToken(token);
    tokenService.removeToken();

    expect(tokenService.hasToken()).toBeFalsy();
    expect(tokenService.getToken()).toBeNull();
  });
});
