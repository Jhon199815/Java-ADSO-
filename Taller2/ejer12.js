const prompt = require('prompt-sync')()

let num1 = parseInt(prompt("escriba el primer numero: "));
let num2 = parseInt(prompt("escriba el segundo numero: "));
while (num1 > num2) {
    console.log("el primer numero debe ser menor o igual que el segundo");
    num1 = parseInt(prompt("escrba el primer numero: "));
    num2 = parseInt(prompt("escriba el segndo numero: "));
}

let sumaPares = 0;
let sumaImpares = 0;
let conteoImpares = 0;
let i = num1;
while (i <= num2) {
    if (i % 2 == 0) {
        sumaPares += i;
    } else {
        sumaImpares += i;
        conteoImpares++;
    }
    i++;
}

let promedioImpares = 0;
if (conteoImpares > 0) {
    promedioImpares = sumaImpares / conteoImpares;
}

console.log("La suma de los numeros pares es: " + sumaPares);
console.log("El promedio de los numeros impares es: " + promedioImpares);