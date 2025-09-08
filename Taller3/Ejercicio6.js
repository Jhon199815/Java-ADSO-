function invertirArreglo(arr) {
    let invertido = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        invertido.push(arr[i]);
    }
    return invertido;
}
console.log(invertirArreglo([1, 2, 3, 4, 5]));
console.log(invertirArreglo(["a", "b", "c"]));