const prompt = require('prompt-sync')()

let edad = prompt("ingrese su edad: ");
let tieneCedula = prompt("¿tienes cedula? (si/no): ");
let cedulaInscrita = prompt("¿tienes la cedula inscrita? (si/no): ");
if (edad >= 18 && tieneCedula == "si" && cedulaInscrita == "si") {
    console.log("puede votar");
} else {
    console.log("no puedes votar");
}
