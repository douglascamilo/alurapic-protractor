import { SignUpComponent } from './signup.component';
import { async, TestBed } from '@angular/core/testing';
import { VMessageModule } from '../../shared/componets/vmessage/vmessage.module';
import { RouterTestingModule } from '@angular/router/testing';
import { SignUpService } from './signup.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

describe('Componente: SignUpComponent', () => {
  let componente: SignUpComponent;
  let router: Router;
  let signUpService: SignUpService;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [ SignUpComponent ],
        providers: [ SignUpService ],
        imports: [
          ReactiveFormsModule,
          VMessageModule,
          HttpClientTestingModule,
          RouterTestingModule
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    signUpService = TestBed.get(SignUpService);

    const fixture = TestBed.createComponent(SignUpComponent);
    componente = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser instanciado', () => {
    expect(componente).toBeDefined();
  });

  it('deve cadastrar um usuario', () => {
    spyOn(router, 'navigate');
    spyOn(signUpService, 'signup').and.returnValue(of({}));

    preencheFormulario();
    componente.signUp();

    expect(router.navigate).toHaveBeenCalledWith(['']);
  });

  it('deve realizar o log caso ocorra algum erro', () => {
    const mensagemDeErro = '500 - Erro no Servidor';
    spyOn(console, 'log');
    spyOn(signUpService, 'signup').and.returnValue(throwError(mensagemDeErro));

    preencheFormulario();
    componente.signUp();

    expect(console.log).toHaveBeenCalledWith(mensagemDeErro);
  });

  function preencheFormulario() {
    componente.signupForm.get('email').setValue('douglas@douglas.com');
    componente.signupForm.get('fullName').setValue('Douglas Sousa');
    componente.signupForm.get('userName').setValue('douglas');
    componente.signupForm.get('password').setValue('123');
  }
});