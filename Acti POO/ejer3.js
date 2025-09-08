/** actividad 3
 * • Crear una clase Persona y dos clases hijas, una Instructor y otra Aprendiz: 
o Persona: 
▪ Atributos: identificación, nombre, correo 
o Aprendiz: 
▪ Atributo: puntajeIcfes 
▪ Métodos: info(): muestra un mensaje con todos los atributos del aprendiz 
o Instructor: 
▪ Atributo: especialidad 
▪ Méodos: info(): muestra un mensaje con todos los atributos del instructor 
 */

class Persona{
    /**
     * @param {string} identificacion
     * @param {string} nombre
     * @param {string} correo
     */
    constructor(identificacion, nombre, correo) {
        this.identificacion = identificacion
        this.nombre = nombre
        this.correo = correo
    }
}


class Aprendiz extends Persona{
    /**
     * @param {string} identificacion
     * @param {string} nombre
     * @param {number} puntajeIcfes
     * @param {string} correo
     * 
     */
    constructor(identificacion, nombre, correo, puntajeIcfes) {
        super(identificacion, nombre, correo)
        this.puntajeIcfes = puntajeIcfes
    }

    info(){
        return `aprendiz: ${this.nombre} , correo: ${this.correo} , puntaje: ${this.puntajeIcfes}`
    }
}

class Instructor extends Persona{
    /**
     * @param {string} identificacion
     * @param {string} nombre
     * @param {string} correo
     * @param {string} especialidad
     */

    constructor(identificacion, correo, nombre, especialidad) {
        super(identificacion, nombre, correo)
        this.especialidad = especialidad
    }

    info(){
        return `instructor: ${this.nombre} , correo: ${this.correo} , especialidad: ${this.especialidad}`
    }
}

const aprendiz1 = new Aprendiz("452144", "jefferson", "jefferson@mail.com", 500)
console.log(aprendiz1.info())
const instructor1 = new Instructor("77954", "cesar", "cesar@mail.com", "JS")
console.log(instructor1.info())


// Crear una clase Animal y clases hijas Perro, Gato, con comportamiento específico.

class Animal{
    /**
     * @param {string} nombre
     * 
     */
    constructor(nombre) {
        this.nombre = nombre
    }

    sociable(){
        return `${this.nombre} es un animal sociable.`
    }

}

class Perro extends Animal{
    sociable(){
        return `${this.nombre} es un perro sociable.`
    }
}

class Gato extends Animal{
    sociable(){
        return `${this.nombre} es un gato sociable.`
    }
}

const perro1 = new Perro("nala")
console.log(perro1.sociable())
const gato1 = new Gato("coni")
console.log(gato1.sociable())