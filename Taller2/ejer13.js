const prompt = require('prompt-sync')()

let numero = parseInt(prompt("Escriba un numero decimal: "));

let binario = "";

while (numero > 0) {
    binario = (numero % 2) + binario;
    numero = Math.floor(numero / 2);
}

console.log("el numero binario es: " + binario);