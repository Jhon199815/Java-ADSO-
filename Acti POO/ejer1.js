

//Actividade 1

//Crear una clase Círculo con radio y método calcularÁrea(). 


class Circulo {

    /**
     * @param {float} radio
     */
    constructor(radio){
        this.radio = radio
    }

    calcularArea(){
        return Math.PI * Math.pow(this.radio,2)
    }
}

const radio=5.5
const circulo = new Circulo(radio)
const areaCirculo = circulo.calcularArea()
console.log(`El area del circulo de radio ${radio} es de: ${areaCirculo}`)

//Crear una clase Estudiante con nombre, materias (array), y método listarMaterias()

class Estudiante{
    /**
     * @param {string} nombre
     * @param {array} materias
     */
    constructor(nombre, materias){
        this.nombre = nombre
        this.materias = materias
    }

    listarMaterias(){
        console.log(`Materias de ${this.nombre}:`)
        this.materias.forEach((m, i) => console.log(`${i+1}. ${m}`))
       
    }
}

const estudiante = new Estudiante("Jefferson", ["POO", "JS", "SQL"])
estudiante.listarMaterias()