const prompt = require('prompt-sync')()

let inicio = prompt("Escriba el primer numero: ");
let fin = prompt("Escriba el segundo numero: ");
inicio = parseInt(inicio);
fin = parseInt(fin);
for (let i = inicio; i <= fin; i++) {
    if (i % 3 == 0) {
        console.log(i);
    }
}