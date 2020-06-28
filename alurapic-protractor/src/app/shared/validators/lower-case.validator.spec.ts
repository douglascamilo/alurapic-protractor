import { isLowerCase } from './lower-case.validator';

describe('A funcao isLowerCase', () => {
  it('Deve confirmar quanto texto em caixa baixa', () => {
    const valor = 'douglas';
    const resultado = isLowerCase(valor);

    expect(resultado).toBeTruthy();
  });

  it('Deve falhar quanto texto nao eh caixa baixa', () => {
    const valor = 'DouglaS';
    const resultado = isLowerCase(valor);

    expect(resultado).toBeFalsy();
  });
});
