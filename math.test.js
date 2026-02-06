const {validarPassword, calcularPromedio} = require('./math');

describe('validarPassword', () => {
  test('password válida', () => {
    expect(validarPassword('Password9')).toBe(true);
  });

  test('password inválida', () => {
    expect(validarPassword('password')).toBe(false);
  });
});

describe('calcularPromedio', () => {
  test('promedio correcto', () => {
    expect(calcularPromedio([7, 8, 9])).toBe(8);
  });
});
