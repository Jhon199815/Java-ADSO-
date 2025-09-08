const prompt = require('prompt-sync')()

let tabla = 5;
do {
    console.log("tabla del " + tabla);
    let i = 1;
    do {
        console.log(tabla + " x " + i + " = " + (tabla * i));
        i++;
    } while (i <= 10);
    tabla++;
} while (tabla <= 9);