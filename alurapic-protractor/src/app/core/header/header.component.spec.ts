import { async, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { UserService } from '../user/user.service';
import { MenuModule } from '../../shared/componets/menu/menu.module';
import { AlertModule } from '../../shared/componets/alert/alert.module';
import { RouterTestingModule } from '@angular/router/testing';
import { LoadingModule } from '../../shared/componets/loading/loading.module';
import { of } from 'rxjs';
import { User } from '../user/user';
import { Router } from '@angular/router';

describe('O componente HeaderComponent', () => {
  let componente: HeaderComponent;
  let userService: UserService;
  let router: Router;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [ HeaderComponent ],
        providers: [ UserService ],
        imports: [ RouterTestingModule.withRoutes([]), MenuModule, AlertModule, LoadingModule ]
      }).compileComponents();
  }));

  beforeEach(() => {
    userService = TestBed.get(UserService);
    router = TestBed.get(Router);

    let usuarioMock = {
      id: 1,
      name: 'Douglas Sousa',
      email: 'douglas@teste.com'
    };

    spyOn(userService, 'getUser').and.returnValue(of<User>(usuarioMock));

    const fixture = TestBed.createComponent(HeaderComponent);
    componente = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser instanciado', () => {
    expect(componente).toBeDefined();
  });

  it('deve realizar o logout', () => {
    spyOn(userService, 'logout');
    spyOn(router, 'navigate');
    componente.logout();

    expect(userService.logout).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith([''])
  });
});