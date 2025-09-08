export default class Alcancia {
  constructor() {
    this.monedas200 = 0;
    this.monedas500 = 0;
    this.monedas1000 = 0;
  }

  agregarMoneda(denominacion) {
    if (denominacion === 200) this.monedas200++;
    else if (denominacion === 500) this.monedas500++;
    else if (denominacion === 1000) this.monedas1000++;
    else return false;
    return true;
  }

  contarMonedas() {
    return {
      monedas200: this.monedas200,
      monedas500: this.monedas500,
      monedas1000: this.monedas1000
    };
  }

  totalAhorrado() {
    return this.monedas200 * 200 + this.monedas500 * 500 + this.monedas1000 * 1000;
  }

  romper() {
    const contenido = this.contarMonedas();
    this.monedas200 = 0;
    this.monedas500 = 0;
    this.monedas1000 = 0;
    return contenido;
  }

  nuevaAlcancia() {
    this.monedas200 = 0;
    this.monedas500 = 0;
    this.monedas1000 = 0;
  }
}