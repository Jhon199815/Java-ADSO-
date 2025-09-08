import  libros from "./libros.json" with { type: "json" };

// 1 enRango: 
export function enRango(n) {
  if (typeof n !== 'number' || !Number.isFinite(n)) return 'Ingresa un número válido';
  return n >= 10 && n <= 50 ? 'En rango' : 'Fuera de rango';
}

// 2 calcularDescuento
export function calcularDescuento(precio) {
  if (typeof precio !== 'number' || !Number.isFinite(precio) || precio <= 0) return 0;
  let desc = 0;
  if (precio > 1000) desc = 0.20;
  else if (precio >= 500) desc = 0.10;
  return precio * (1 - desc);
}

// 3 categoriaIMC
export function categoriaIMC(imc) {
  if (!Number.isFinite(imc) || imc <= 0) return 'IMC no válido';
  if (imc < 18.5) return 'Bajo peso';
  if (imc < 25)   return 'Normal';
  if (imc < 30)   return 'Sobrepeso';
  return 'Obesidad';
}

// 4 nivelRiesgo 
export function nivelRiesgo(edad, enfermedadesPrevias) {
  if (!Number.isFinite(edad) || edad < 0) return 'Edad no válida';
  if (edad >= 65 || (enfermedadesPrevias && edad >= 55)) return 'Alto riesgo';
  if (enfermedadesPrevias) return 'Riesgo moderado';
  return 'Bajo riesgo';
}

// 5 esBisiesto
export function esBisiesto(año) {
  if (!Number.isInteger(año)) return 'Año no válido';
  const b = (año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0);
  return b ? 'Es bisiesto' : 'No es bisiesto';
}

// 6 esElegibleParaPrestamo 
export function esElegibleParaPrestamo(salario, puntaje) {
  if (!Number.isFinite(salario) || !Number.isFinite(puntaje)) return 'Datos no válidos';
  return (salario >= 3000000 && puntaje >= 650) ? 'Elegible para préstamo' : 'No elegible para préstamo';
}

// 7 Consultas de libros
export function consultarLibrosPorPalabraClaveTitulo(palabra = '') {
  const q = String(palabra).toLowerCase().trim();
  if (!q) return [];
  return libros.filter(l => String(l.titulo).toLowerCase().includes(q));
}

export function consultarLibrosPaginas() {
  return libros.map(l => ({ titulo: l.titulo, numeroPaginas: l.numeroPaginas }));}
