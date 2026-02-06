// 1era funcion sobre validar contraseñas
function validarPassword(password) {
  const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  return regex.test(password);
}

// 2da funcion sobre calcular promedios

function calcularPromedio(notas) {
  if (!Array.isArray(notas) || notas.length === 0) {
    return 0;
  }

  const suma = notas.reduce((acc, n) => acc + n, 0);
  return suma / notas.length;
}

module.exports = { validarPassword, calcularPromedio };