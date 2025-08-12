const prompt = require('prompt-sync')()
let numero = prompt("escribe un numero entero: ");
let suma = 0;

for (let i = 0; i < numero.length; i++) {
    suma += parseInt(numero[i]);
}
console.log("la suma de los digitos es de:  " + suma);