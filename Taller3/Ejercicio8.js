function eliminarDuplicados(arr) {
    let resultado = [];
    for (let i = 0; i < arr.length; i++) {
        if (resultado.indexOf(arr[i]) === -1) {
            resultado.push(arr[i]);
        }
    }
    return resultado;
}
console.log(eliminarDuplicados([1, 2, 2, 3, 4, 5]));
console.log(eliminarDuplicados(["a", "b", "a", "b"]));
