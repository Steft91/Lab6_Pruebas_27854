const {validarPassword, calcularPromedio} = require('./math');

describe('validarPassword', () => {
  test('password válida', () => {
    expect(validarPassword('Clave123')).toBe(true);
  });

  test('password sin mayúscula', () => {
    expect(validarPassword('clave123')).toBe(false);
  });

  test('password muy corta', () => {
    expect(validarPassword('Abc12')).toBe(false);
  });
});

describe('calcularPromedio', () => {
  test('calcula el promedio correctamente', () => {
    expect(calcularPromedio([8, 9, 10])).toBe(9);
  });

  test('retorna 0 si el arreglo está vacío', () => {
    expect(calcularPromedio([])).toBe(0);
  });
});
