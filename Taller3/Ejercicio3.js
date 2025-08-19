function contarPares(numeros) {
    let contador = 0;

    for (let i = 0; i < numeros.length; i++) {
        let num = numeros[i];
        if (num % 2 === 0) {  
            contador++;
        }
    }
    return contador;
}
console.log(contarPares([10, 20, 30, 40])); 
