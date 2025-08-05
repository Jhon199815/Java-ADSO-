const prompt = require('prompt-sync')();
let kilometros = parseInt(prompt("Ingrese kilometros recorridos: "));
let litros = parseInt(prompt("Ingrese litros consumidos: "));
let consumo = litros / kilometros;
console.log("El consumo es: " + consumo + " litros por kilómetro");