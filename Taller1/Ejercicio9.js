let a = 10;
let b = 5;
 
console.log("Antes -> a: " + a + ", b: " + b);

let temp = a;
a = b;
b = temp;

console.log("Después -> a: " + a + ", b: " + b);