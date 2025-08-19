function reemplazarElemento(arr, valorViejo, valorNuevo) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === valorViejo) {
            arr[i] = valorNuevo;
        }
    }
    return arr;
}
console.log(reemplazarElemento([1, 2, 3, 4], 4, 45));
console.log(reemplazarElemento(["rojo", "azul", "verde"], "azul", "blanco"));