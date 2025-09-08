const prompt = require('prompt-sync')();
let num1 = parseInt(prompt("Ingrese el primer numero: "));
let num2 = parseInt(prompt("Ingrese el segundo numero: "));
let num3 = parseInt(prompt("Ingrese el tercer numero: "));

let media = (num1 + num2 + num3) / 3;
console.log("La media es: " + media);