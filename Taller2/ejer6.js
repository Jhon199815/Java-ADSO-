const prompt = require('prompt-sync')()

let salario = prompt("escriba su salario mensual: ");

while (salario <= 0) {
    console.log("El salario debe ser mayor a 0");
    salario = prompt("escriba su salario mensual: ");
}
let impuesto = 0;
if (salario < 1000000) {
    impuesto = salario * 0.01;
} else if (salario >= 1000000 && salario <= 2000000) {
    impuesto = salario * 0.03;
} else if (salario > 2000000 && salario <= 4000000) {
    impuesto = salario * 0.05;
} else if (salario > 4000000 && salario <= 10000000) {
    impuesto = salario * 0.07;
} else if (salario > 10000000) {
    impuesto = salario * 0.10;
}
console.log("Debe pagar de impuesto: " + impuesto.toLocaleString("es-CO"));