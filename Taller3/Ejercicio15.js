const prompt = require("prompt-sync")();

let cuentas = [];
let consecutivo = 0;

function crearCuenta() {
    let year = new Date().getFullYear();
    consecutivo = consecutivo + 1;
    let codigo = year + "-" + consecutivo;
    let fecha = new Date().toISOString().slice(0, 10);
    let saldo = 0;
    let cuenta = { codigo: codigo, fechaCreacion: fecha, saldo: saldo };
    cuentas.push(cuenta);
    console.log("cuenta creada:", cuenta);
}

function buscarCuenta(codigo) {
    for (let i = 0; i < cuentas.length; i++) {
        if (cuentas[i].codigo === codigo) {
            return cuentas[i];
        }
    }
    return null;
}

function consignarCuenta() {
    let codigo = prompt("cdigo de la cuenta: ");
    let cuenta = buscarCuenta(codigo);
    if (!cuenta) {
        console.log("cuenta no encontrada");
        return;
    }
    let valor = parseFloat(prompt("valor a consignar: "));
    if (isNaN(valor) || valor <= 0) {
        console.log("valor inválido");
        return;
    }
    cuenta.saldo = cuenta.saldo + valor;
    console.log("nuevo saldo:", cuenta.saldo);
}

function retirarCuenta() {
    let codigo = prompt("codigo de la cuenta: ");
    let cuenta = buscarCuenta(codigo);
    if (!cuenta) {
        console.log("cuenta no encontrada");
        return;
    }
    let valor = parseFloat(prompt("valor a retirar: "));
    if (isNaN(valor) || valor <= 0) {
        console.log("valor inválido");
        return;
    }
    if (valor > cuenta.saldo) {
        console.log("fondo insuficiente");
        return;
    }
    cuenta.saldo = cuenta.saldo - valor;
    console.log("nuevo saldo:", cuenta.saldo);
}

function consultarCuentaPorCodigo() {
    let codigo = prompt("codigo de la cuenta: ");
    let cuenta = buscarCuenta(codigo);
    if (!cuenta) {
        console.log("cuenta no encontrada");
        return;
    }
    console.log("cuenta:", cuenta);
}

function listarCuentas() {
    if (cuentas.length === 0) {
        console.log("no hay cuentas");
        return;
    }
    for (let i = 0; i < cuentas.length; i++) {
        console.log(cuentas[i]);
    }
}

function menu() {
    let salir = false;
    while (!salir) {
        console.log("MENU BANCO ADSO");
        console.log("1.crear cuenta");
        console.log("2.consignar cuenta");
        console.log("3.retirar cuenta");
        console.log("4.consultar cuenta por codigo");
        console.log("6 listar cuentas");
        console.log("7.Salir");
        let op = prompt("ingrese opcion (1-7): ");
        switch (op) {
            case "1":
                crearCuenta();
                break;
            case "2":
                consignarCuenta();
                break;
            case "3":
                retirarCuenta();
                break;
            case "4":
                consultarCuentaPorCodigo();
                break;
            case "6":
                listarCuentas();
                break;
            case "7":
                salir = true;
                break;
            default:
                console.log("opcion invalida");
        }
    }
    console.log("fin del programa");
}
menu();
