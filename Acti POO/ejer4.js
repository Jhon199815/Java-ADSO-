
// Actividad 4
//Crear una clase Pedido que contenga una lista de objetos Producto.

class Pedido{

    constructor(productos) {
        this.productos = productos
    }
    total() {
        return this.productos.reduce((acc, p) => acc + p.total(), 0)
    }

}

class Producto {
   
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
    }

    total() {
        return this.precio * this.cantidad
    }
}

const prod1 = new Producto("cuaderno", 5000, 5)
const prod2 = new Producto("lapizcero", 1000, 3)
const pedido = new Pedido([prod1, prod2])
console.log("Total:", pedido.total())   


//Modelar un sistema de biblioteca con Libro, Autor, Editorial relacionados

class Autor {
    constructor(nombre, nacionalidad) {
        this.nombre = nombre
        this.nacionalidad = nacionalidad
    }
}

class Editorial {
    constructor(nombre) {
        this.nombre = nombre
        
    }
}

class Libro {
    constructor(titulo, autor, editorial) {
        this.titulo = titulo
        this.autor = autor
        this.editorial = editorial
        
    }
}
const autor1 = new Autor("Ernesto Sabato", "Argentino")
const editorial1 = new Editorial("Seix Barral")
const libro1 = new Libro("El tunel", autor1, editorial1)
console.log("Titulo:", libro1.titulo)
console.log("Autor:", libro1.autor.nombre)
console.log("Nacionalidad:", libro1.autor.nacionalidad)
console.log("Editorial:", libro1.editorial.nombre)