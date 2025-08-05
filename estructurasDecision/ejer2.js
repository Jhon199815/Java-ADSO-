const prompt = require('prompt-sync')();

let numero = prompt("Escribe un número: ");
numero = parseInt(numero);

if (numero < 0) {
  numero = numero * -1;
}

let texto = numero.toString();
let cantidad = texto.length;

if (cantidad == 2) {
  console.log("Sí, tiene 2 cifras.");
} else {
  console.log("No tiene 2 cifras.");
}