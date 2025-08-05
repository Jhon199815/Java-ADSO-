const prompt = require('prompt-sync')();

let horas = parseInt(prompt("Ingrese horas: "));
let minutos = parseInt(prompt("Ingrese minutos: "));
let totalSegundos = (horas * 60 * 60) + (minutos * 60);
console.log("Total de segundos: " + totalSegundos);