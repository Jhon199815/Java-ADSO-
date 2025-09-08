const prompt = require('prompt-sync')();
let numero = parseInt(prompt("Ingrese un numero: "));
let esPar = (numero % 2 === 0);
console.log(esPar ? "El número es par" : "El número es impar");