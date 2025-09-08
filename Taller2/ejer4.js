const prompt = require('prompt-sync')()

let numero;
do {
    numero = prompt("escriba un numero del 1 al 7: ");
    if (numero < 1 || numero > 7) {
        console.log("numero fuera de rango");
    }
} while (numero < 1 || numero > 7);
if (numero == 1) {
    console.log("lunes");
} else if (numero == 2) {
    console.log("martes");
} else if (numero == 3) {
    console.log("miercoles");
} else if (numero == 4) {
    console.log("jueves");
} else if (numero == 5) {
    console.log("viernes");
} else if (numero == 6) {
    console.log("sabado");
} else if (numero == 7) {
    console.log("domingo");
}