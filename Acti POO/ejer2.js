class CuentaBancaria{
    /**
     * Definicion de la propiedad saldo como privada
     */
    #saldo


    /**
     * @param {string} titular
     * @param {int} saldoInicial
     */
    constructor(titular, saldoInicial){
        this.nombre = titular
        this.#saldo = saldoInicial
    }

    /**
     * Metodo que permite realzar el porceso
     * de depositar un valor a la cuenta
     * @param {*} monto
     */

    depositar(monto){
        this.#saldo += monto
    }

    /**
     * metodo que retorna el saldo
     * @returns float
     */
    obtenerSaldo(){
        return this.#saldo
    }
/**Como actividad complementaria crear una función que permita realizar el proceso de retirar un 
monto que no exceda el saldo. 
En la implementación realizar un retiro y después mostrar por consola el saldo. */

   retirar(monto){
        if (monto <= this.#saldo) {
            this.#saldo -= monto
            console.log(`usted retiro: $${monto}.`)
        } else {
            console.log(`Fondos insuficientes $${monto}.`)
        }
    }
}

const cuenta = new CuentaBancaria("cesar", 2500000)
console.log(cuenta) //cuentabancari {titular: 'cesar'}
cuenta.depositar(500000)
cuenta.retirar(5252500000000)
console.log(cuenta.obtenerSaldo())//3000000
console.log(cuenta.titular)//cesar
console.log(cuenta.saldo)//undefiend-->es privado no podemos acceder a el


// Actividad 2
//Crear una clase Empleado con sueldo privado y método para aplicar aumento. 
//Implementar un getter y un setter para correo que valide el formato.


class Empleado{
    #sueldo
    #correo

    /**
     * @param {number} nombre
     * @param {number} sueldo
     * @param {string} correo
     */
    constructor(nombre, sueldo, correo) {
        this.nombre = nombre
        this.#sueldo = sueldo
        this.#correo = correo
    }

    /**
     * 
     * @param {number} porcentaje
     */
    
    aplicarAumento(porcentaje) {
        this.#sueldo += this.#sueldo * (porcentaje / 100)
    }

    
    obtenersueldo() {
        return this.#sueldo
    }


   
    obtenercorreo() {
        return this.#correo
    }

  
    asignarcorreo(nuevocorreo) {
        if (/\S+@\S+\.\S+/.test(nuevocorreo)) {
            this.#correo = nuevocorreo
        } else {
            console.log("invalido.")
        }
    }
}

const em1 = new Empleado("jefferson", 2000, "j4545@mail.com")
console.log(em1.obtenersueldo())
em1.aplicarAumento(10)
console.log(em1.obtenersueldo())
console.log(em1.obtenercorreo())
em1.asignarcorreo("jefferson@mail.com")
console.log(em1.obtenercorreo())
em1.asignarcorreo("correo-invalido")
console.log(em1.obtenercorreo())
console.log(em1.sueldo)
