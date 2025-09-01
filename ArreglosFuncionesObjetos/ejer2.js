const prompt = require('prompt-sync')();

const areaRectangulo = (base, altura) => {
    return base * altura;
}

let base = prompt('Ingrese la base: ');
let altura = prompt('Ingrese la altura: ');

let area = areaRectangulo(base, altura);
console.log(`El area del rectangulo es ${area}`);

