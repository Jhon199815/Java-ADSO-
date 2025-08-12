const prompt = require('prompt-sync')()

let edad = prompt("Ingresa tu edad: ");
if (edad < 5) {
    console.log("entra gratis");
} else if (edad >= 5 && edad <= 18) {
    console.log("debes pagar 5.000 pesos");
} else if (edad > 18) {
    console.log("debes pagar 10.000 pesos");
}