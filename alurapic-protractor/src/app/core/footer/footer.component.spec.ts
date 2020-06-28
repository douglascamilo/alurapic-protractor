import { async, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '../user/user.service';
import { of } from 'rxjs';
import { User } from '../user/user';

describe('O componente FooterComponent', () => {
  let component: FooterComponent;
  let userService: UserService;

  const usuarioMock: User = {
    id: 1,
    name: 'Alvaro Silva',
    email: 'alvaro@gmail.com'
  };

  // Boa pratica para criacao de componentes em Angular.
  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [ RouterTestingModule ],
        providers: [ UserService ],
        declarations: [ FooterComponent ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    userService = TestBed.get(UserService);
    spyOn(userService, 'getUser').and.returnValue(of<User>(usuarioMock));

    const fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser instanciado', () => {
    expect(component).toBeDefined();
  });

  it('deve obter usuario com sucesso', () => {
    userService.getUser().subscribe(usuario => {
      expect(usuario).toBeDefined();
      expect(usuario).toEqual(usuarioMock);
    });
  });
});