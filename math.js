// 1era funcion sobre validar contraseñas
function validarPassword(password) {
  if (password.length < 8) {
    return false;
  }

  const tieneMayuscula = /[A-Z]/.test(password);
  const tieneNumero = /[0-9]/.test(password);

  return tieneMayuscula && tieneNumero;
}


// 2da funcion sobre calcular promedios
function calcularPromedio(notas) {
  if (notas.length === 0) {
    return 0;
  }

  let suma = 0;
  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
  }

  return suma / notas.length;
}

module.exports = { validarPassword, calcularPromedio };