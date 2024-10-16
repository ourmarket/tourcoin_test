export function generateUniqueNumber() {
  const timestamp = Date.now(); // Obtiene la marca de tiempo actual en milisegundos
  const randomNum = Math.floor(Math.random() * 1e6); // Genera un número aleatorio entre 0 y 999999
  return Number(`${timestamp}${randomNum}`); // Concatena y convierte en un número entero
}
