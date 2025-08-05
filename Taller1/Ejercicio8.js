const prompt = require('prompt-sync')();

let personas = parseInt(prompt("Para cuantas personas es la torta?: "));
let gramosPapa = personas * 200;
let kilosPapa = gramosPapa / 1000;
let huevos = kilosPapa * 5;
let gramosCebolla = kilosPapa * 300;

console.log("Gramos de papa: " + gramosPapa);
console.log("Huevos: " + Math.ceil(huevos));
console.log("Gramos de cebolla: " + gramosCebolla);
