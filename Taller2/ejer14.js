const prompt = require('prompt-sync')()

let fila = 1;

while (fila <= 5) {
    let estrellas = "";
    let i = 1;
    while (i <= fila) {
        estrellas += "* ";
        i++;
    }
    console.log(estrellas);
    fila++;
}