function contarVocales(texto) {
    let cadena = texto.toLowerCase();
    let contador = 0;

    for (let i = 0; i < cadena.length; i++) {
        let letra = cadena[i];
        if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
            contador++;
        }
    }
    return contador;

}
console.log(contarVocales("Jefferson"));     


