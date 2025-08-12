const prompt = require('prompt-sync')()

let numero;

do {
    numero = parseInt(prompt("Escriba un numero entero mayor que 1: "));
} while (numero <= 1);

let esPrimo = true;
for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
        esPrimo = false;
        break;
    }
}
if (esPrimo) {
    console.log("es primo");
} else {
    console.log("no es primo");
}