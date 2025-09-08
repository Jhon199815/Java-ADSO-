const prompt = require('prompt-sync')()

let numero = parseInt(prompt("escriba un numero: "));
let factorial = 1;
let i = 1;
do {
    factorial = factorial * i;
    i++;
} while (i <= numero);

console.log("el factorial de " + numero + " es:  " + factorial);