const prompt = require('prompt-sync')()

let numero = prompt("ingresa un numero:");
numero = parseInt(numero);
if (numero % 2 == 0) {
    console.log("el numero es par");
} else {
    console.log("el numero es impar");
}