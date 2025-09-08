let precios = new Map();
let historial = [];
let productosUnicos = new Set();

function agregarProducto(nombre, precio) {
    precios.set(nombre, precio);
    historial.push(nombre);
    productosUnicos.add(nombre);
}

agregarProducto("arroz", 3500);
agregarProducto("leche", 2430);
agregarProducto("arroz", 3500);
agregarProducto("huevo", 18000);

console.log("productos unicos:", productosUnicos);
console.log("precios:", precios);
console.log("historial:", historial);