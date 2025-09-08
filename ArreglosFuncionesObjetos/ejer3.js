let cuenta = {
    titular: 'Juan Perez',
    saldo: 1000,
    mostrarSaldo: function() {
        return `El saldo de ${this.titular} es ${this.saldo}`;
    },
}
console.log(cuenta.mostrarSaldo())