function indiceDeValor(arr, valor) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === valor) {
            return i;
        }
    }
    return -1;
}
console.log(indiceDeValor([10, 20, 30, 40], 30));
console.log(indiceDeValor(["q", "w", "e"], "e"));