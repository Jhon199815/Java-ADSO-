let persona = {
    nombre : 'Carlos',
    edad : 30,
    profesion : 'Ingeniero',
}
console.log(typeof(persona))
console.log(persona)   
persona.correo = 'carlos@gmail.com';
console.log(persona)
console.log(Object.keys(persona))

function saludar (nombre){
    return `Hola ${nombre}`
}

let mensaje = saludar()

console.log(mensaje)
console.log(saludar("Maria"))

const despedir = function(nombre){
    return `Adios ${nombre}`
}
console.log(despedir("Antonio"))