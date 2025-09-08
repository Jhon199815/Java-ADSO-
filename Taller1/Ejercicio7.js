const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingrese un numero de dos cifras: "));
let decenas = Math.floor(numero / 10);
let unidades = numero % 10;

console.log("Decenas: " + decenas + ", Unidades: " + unidades);