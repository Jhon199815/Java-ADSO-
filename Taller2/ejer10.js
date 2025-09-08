const prompt = require('prompt-sync')()

let numero;
let frase;
do {
    numero = parseInt(prompt("sscriba un numero entre 1 y 20: "));
} while (numero < 1 || numero > 20);

frase = prompt("escriba una frase: ");
let i = 1;
do {
    console.log(frase);
    i++;
} while (i <= numero);
