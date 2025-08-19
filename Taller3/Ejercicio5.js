function contarPalabras(texto) {

    let partes = texto.trim().split(" ");
    let contador = 0;
    for (let i = 0; i < partes.length; i++) {
        if (partes[i] !== "") {
            contador++;
        }
    }
    return contador;
}
console.log(contarPalabras("analisis y desarrollo de software"));

