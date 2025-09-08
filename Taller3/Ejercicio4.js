function sumaYPromedio(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
    }
    let promedio = suma / numeros.length;
    return "Suma: " + suma + "  Promedio: " + promedio;
}
console.log(sumaYPromedio([1, 2, 3, 4, 5]));