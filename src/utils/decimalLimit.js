export function decimalLimit(num) {
  // Si el número tiene parte decimal
  if (num % 1 !== 0) {
    // Redondea a 8 dígitos decimales sin eliminar ceros innecesarios
    return parseFloat(num.toFixed(8));
  }
  return num; // Si es un entero, lo devuelve tal cual
}
