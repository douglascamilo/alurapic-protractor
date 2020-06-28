import { UserService } from './user.service';
import { inject, TestBed } from '@angular/core/testing';

describe('O servico UserService', () => {
  let service: UserService;
  const nomeUsuarioFlavio = 'flavio';
  const tokenUsuarioFlavio = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVt' +
      'YWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsImlhdCI6MTU5MzAyMTM1MiwiZXhwIjoxNTkzMTA3NzUyfQ.' +
      'eK77FASHxq66m9wOiT1_GHfzvAiQzVjar6h7C-it-lg';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ UserService ]
    });
  });

  it('deve ser instanciado', inject([ UserService ], (service: UserService) => {
    expect(service).toBeDefined();
  }));

  it('deve, atraves de um token, retornar as informacoes de um usuario', inject(
      [ UserService ], (service: UserService) => {
        service.setToken(tokenUsuarioFlavio);

        expect(service.isLogged()).toBeTruthy();
        expect(service.getUserName()).toBe(nomeUsuarioFlavio);

        service.getUser().subscribe(user => {
          expect(user.name).toBe(nomeUsuarioFlavio);
        });
      }
  ));

  it('deve limpar informacoes no logout', inject(
      [ UserService ], (userService: UserService) => {
        userService.setToken(tokenUsuarioFlavio);
        userService.logout();

        expect(userService.isLogged()).toBeFalsy();
        expect(userService.getUserName()).toBe('');
      })
  );
});
