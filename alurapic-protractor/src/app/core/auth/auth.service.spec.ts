import { AuthService } from './auth.service';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from '../user/user.service';

describe('O servico AuthService', () => {
  let authService: AuthService;
  let httpMock: HttpTestingController;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ AuthService, UserService ]
    });

    authService = TestBed.get(AuthService);
    httpMock = TestBed.get(HttpTestingController);
    userService = TestBed.get(UserService);
  });

  it('deve ser instanciado', () => {
    expect(authService).toBeDefined();
  });

  it('deve autenticar o usuario', fakeAsync(() => {
    const spy = spyOn(userService, 'setToken').and.returnValue(null);

    const tokenTest = 'tokenTest';
    const responseBodyEsperado = {
      id: 1,
      nome: 'alvaro',
      email: 'alvaro@gmail.com'
    };

    authService.authenticate('alvaro', '1234').subscribe(response => {
      expect(response.body).toEqual(responseBodyEsperado);
      expect(spy).toHaveBeenCalledWith(tokenTest);
    });

    httpMock
      .expectOne(request => request.method === 'POST')
      .flush(responseBodyEsperado, { headers: { 'x-access-token': tokenTest } });

    tick();
  }));
});
