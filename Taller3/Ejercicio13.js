function crearAlumno(nombre, notas) {
    let alumno = {
        nombre: nombre,
        notas: notas,
        promedio: function() {
            let suma = 0;
            for (let i = 0; i < this.notas.length; i++) {
                suma = suma + this.notas[i];
            }
            return suma / this.notas.length;
        }
    };
    return alumno;
}
let estudiante = crearAlumno("jefferson", [2, 5, 1, 4, 3.2]);
console.log("nombre:", estudiante.nombre);
console.log("notas:", estudiante.notas);
console.log("promedio:", estudiante.promedio());