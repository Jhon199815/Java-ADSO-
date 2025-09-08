
import { enRango, calcularDescuento, categoriaIMC, nivelRiesgo, esBisiesto, esElegibleParaPrestamo, consultarLibrosPorPalabraClaveTitulo, consultarLibrosPaginas } from "./utilidades.js";
import Alcancia from './alcancia.js';
import Contacto from './contacto.js';

//  ALCANCÍA 

const alcancia = new Alcancia();
let contactos = [];

function actualizarVista() {
  const monedas = alcancia.contarMonedas();
  document.getElementById('c200').textContent = monedas.monedas200;
  document.getElementById('c500').textContent = monedas.monedas500;
  document.getElementById('c1000').textContent = monedas.monedas1000;
  document.getElementById('total').textContent = alcancia.totalAhorrado();
}


document.getElementById('agregar').addEventListener('click', () => {
  const valor = Number(document.getElementById('denominacion').value);
  const msg = document.getElementById('mensaje');
  if (alcancia.agregarMoneda(valor)) {
    actualizarVista();
    msg.textContent = "Moneda agregada.";
    msg.classList.remove('d-none');
  } else {
    msg.textContent = "Denominación no válida.";
    msg.classList.remove('d-none');
  }
});


const lista = document.getElementById('listaAlcancia');
if (lista) {
  lista.addEventListener('click', (e) => {
    const li = e.target.closest('li[data-denom]');
    if (!li) return;

    const valor = Number(li.dataset.denom);
    if (alcancia.agregarMoneda(valor)) {
      actualizarVista();

      const msg = document.getElementById('mensaje');
      msg.textContent = 'Agregaste $' + valor;
      msg.classList.remove('d-none');

      const badge = document.getElementById('c' + valor);
      if (badge && window.anime) {
        anime({ targets: badge, scale: [1, 1.2, 1], duration: 300, easing: 'easeOutBack' });
      }

      const select = document.getElementById('denominacion');
      if (select) select.value = String(valor);
    } else {
      const msg = document.getElementById('mensaje');
      msg.textContent = 'Denominación no válida.';
      msg.classList.remove('d-none');
    }
  });
}


document.getElementById('romper').addEventListener('click', () => {
  const contenido = alcancia.romper();
  actualizarVista();
  const msg = document.getElementById('mensaje');
  msg.textContent =
    `Alcancía rota. Monedas: $200=${contenido.monedas200}, $500=${contenido.monedas500}, $1000=${contenido.monedas1000}`;
  msg.classList.remove('d-none');
  animRomperAlcanciaFancy();   // animación fancy 💥🐷
});


document.getElementById('nueva').addEventListener('click', () => {
  alcancia.nuevaAlcancia();
  actualizarVista();
  const msg = document.getElementById('mensaje');
  msg.textContent = "Alcancía reiniciada.";
  msg.classList.remove('d-none');
});
//  CONTACTOS 

function renderTabla() {
  var tbody = document.getElementById('tablaContactos');
  tbody.innerHTML = '';
  contactos.forEach(function(c) {
    var tr = document.createElement('tr');
    tr.innerHTML =
      '<td>' + c.identificacion + '</td>' +
      '<td>' + c.nombre + '</td>' +
      '<td>' + c.apellido + '</td>' +
      '<td>' + c.correo + '</td>' +
      '<td>' + c.celular + '</td>' +
      '<td>' +
        '<button class="editar" data-id="' + c.identificacion + '">Editar</button> ' +
        '<button class="eliminar" data-id="' + c.identificacion + '">Eliminar</button>' +
      '</td>';
    tbody.appendChild(tr);
  });


  var btnsEditar = document.querySelectorAll('.editar');
  for (var i = 0; i < btnsEditar.length; i++) {
    btnsEditar[i].onclick = function() {
      var elId = this.getAttribute('data-id');
      editarContacto(elId);
    };
  }
  var btnsEliminar = document.querySelectorAll('.eliminar');
  for (var j = 0; j < btnsEliminar.length; j++) {
    btnsEliminar[j].onclick = function() {
      var elId2 = this.getAttribute('data-id');
      eliminarContacto(elId2);
    };
  }
}


function limpiarFormulario() {
  document.getElementById('formContacto').reset();
  document.getElementById('identificacion').readOnly = false;
}


function editarContacto(id) {
  var c = contactos.find(function(x){ return x.identificacion === id; });
  if (c) {
    document.getElementById('identificacion').value = c.identificacion;
    document.getElementById('nombre').value = c.nombre;
    document.getElementById('apellido').value = c.apellido;
    document.getElementById('correo').value = c.correo;
    document.getElementById('celular').value = c.celular;
    document.getElementById('identificacion').readOnly = true;
    document.getElementById('mensajeContacto').textContent = 'Editando contacto.';
  }
}

function eliminarContacto(id) {
  var c = contactos.find(function(x){ return x.identificacion === id; });
  if (!c) {
    window.Swal.fire({ title: 'No encontrado', text: 'Ese contacto no existe' });
    return;
  }
  window.Swal.fire({
    title: '¿Eliminar contacto?',
    text: 'Se eliminará a ' + c.nombre + ' ' + c.apellido,
    showCancelButton: true
  }).then(function(r){
    if (r.isConfirmed) {
      contactos = contactos.filter(function(x){ return x.identificacion !== id; });
      renderTabla();
      limpiarFormulario();
      window.Swal.fire({ title: 'Eliminado', text: 'Se eliminó: ' + c.nombre + ' ' + c.apellido });
      document.getElementById('mensajeContacto').textContent = 'Contacto eliminado.';
    }
  });
}


document.getElementById('formContacto').addEventListener('submit', function(e){
  e.preventDefault();

  var id       = document.getElementById('identificacion').value.trim();
  var nombre   = document.getElementById('nombre').value.trim();
  var apellido = document.getElementById('apellido').value.trim();
  var correo   = document.getElementById('correo').value.trim();
  var celular  = document.getElementById('celular').value.trim();

  if (!id || !nombre || !apellido || !correo || !celular) {
    window.Swal.fire({ title: 'Campos vacíos', text: 'Completa todos los campos.' });
    return;
  }

  var idx = contactos.findIndex(function(c){ return c.identificacion === id; });

  if (idx === -1) {
    contactos.push(new Contacto(id, nombre, apellido, correo, celular));
    renderTabla();
    limpiarFormulario();
    window.Swal.fire({ title: 'Contacto agregado', text: 'Se agregó: ' + nombre + ' ' + apellido });
  } else {
    contactos[idx].nombre  = nombre;
    contactos[idx].apellido= apellido;
    contactos[idx].correo  = correo;
    contactos[idx].celular = celular;
    renderTabla();
    limpiarFormulario();
    window.Swal.fire({ title: 'Contacto actualizado', text: 'Se actualizó: ' + nombre + ' ' + apellido });
  }
});


document.getElementById('btnBuscar').addEventListener('click', function(){
  var id = document.getElementById('buscarId').value.trim();
  var c = contactos.find(function(x){ return x.identificacion === id; });
  if (c) {
    document.getElementById('mensajeContacto').textContent =
      'Encontrado: ' + c.nombre + ' ' + c.apellido + ', ' + c.correo + ', ' + c.celular;
  } else {
    document.getElementById('mensajeContacto').textContent = 'No se encontró el contacto.';
  }
});

// Botón limpiar de contactos
document.getElementById('btnLimpiar').addEventListener('click', function(){
  limpiarFormulario();
  document.getElementById('mensajeContacto').textContent = '';
});


// IMC 
document.getElementById('btnIMC').addEventListener('click', () => {
  const imc = Number(document.getElementById('inputIMC').value);
  const resultado = document.getElementById('resultadoIMC');
  resultado.textContent = categoriaIMC(imc);
  resultado.classList.remove('d-none');
});


// RIESGO 
document.getElementById('btnRiesgo').addEventListener('click', () => {
  const edad = Number(document.getElementById('inputEdad').value);
  const enfermedades = document.getElementById('inputEnfermedad').checked;
  const resultado = document.getElementById('resultadoRiesgo');
  resultado.textContent = nivelRiesgo(edad, enfermedades);
  resultado.classList.remove('d-none');
});


// AÑO BISIESTO (
document.getElementById('btnBisiesto').addEventListener('click', () => {
  const año = Number(document.getElementById('inputBisiesto').value);
  const resultado = document.getElementById('resultadoBisiesto');
  resultado.textContent = esBisiesto(año);
  resultado.classList.remove('d-none');
});


//ELEGIBILIDAD PRESTAMO 
document.getElementById('btnPrestamo').addEventListener('click', () => {
  const salario = Number(document.getElementById('inputSalario').value);
  const puntaje = Number(document.getElementById('inputPuntaje').value);
  const resultado = document.getElementById('resultadoPrestamo');
  resultado.textContent = esElegibleParaPrestamo(salario, puntaje);
  resultado.classList.remove('d-none');
});


//  CALCULAR DESCUENTO 

document.getElementById('btnDescuento').addEventListener('click', function () {
  var precio = Number(document.getElementById('inputDescuento').value);
  var box = document.getElementById('resultadoDescuento');
  if (isNaN(precio) || precio <= 0) {
    box.textContent = 'Ingresa un precio válido.';
    box.classList.remove('d-none');
    return;
  }
  var total = calcularDescuento(precio);
  var porcentaje = 0;
  if (precio > 1000) porcentaje = 20;
  else if (precio >= 500 && precio <= 1000) porcentaje = 10;
  box.textContent = 'Precio final: $' + Math.round(total) + ' (descuento ' + porcentaje + '%)';
  box.classList.remove('d-none');
});


// LIBROS
// 
document.getElementById('btnBuscarLibro').addEventListener('click', () => {
  const palabra = document.getElementById('inputPalabraLibro').value;
  const resultado = consultarLibrosPorPalabraClaveTitulo(palabra);
  const ul = document.getElementById('resultadoLibros');
  ul.innerHTML = '';
  if (resultado.length === 0) {
    ul.innerHTML = '<li>No se encontraron libros.</li>';
  } else {
    resultado.forEach(libro => {
      ul.innerHTML += `<li><strong>${libro.titulo}</strong> - ${libro.autor} (${libro.numeroPaginas} páginas)</li>`;
    });
  }
});


document.getElementById('btnListarPaginas').addEventListener('click', () => {
  const resultado = consultarLibrosPaginas();
  const ul = document.getElementById('resultadoPaginas');
  ul.innerHTML = '';
  resultado.forEach(libro => {
    ul.innerHTML += `<li><strong>${libro.titulo}</strong>: ${libro.numeroPaginas} páginas</li>`;
  });
});


//  RANGO 
document.getElementById('btnRango').addEventListener('click', () => {
  const valor = Number(document.getElementById('inputRango').value);
  const resultado = document.getElementById('resultadoRango');
  resultado.textContent = enRango(valor);
  resultado.classList.remove('d-none');
 
});



actualizarVista();
renderTabla();



console.log(enRango(15));
console.log(enRango(51));
console.log(enRango(9));

console.log(calcularDescuento(1200)); 
console.log(calcularDescuento(800));  
console.log(calcularDescuento(300));

console.log(categoriaIMC(17));
console.log(categoriaIMC(22));
console.log(categoriaIMC(27));
console.log(categoriaIMC(32));

console.log(nivelRiesgo(65, false));
console.log(nivelRiesgo(45, true));
console.log(nivelRiesgo(30, false));
console.log(nivelRiesgo(50, false));
console.log(nivelRiesgo(70, true));

console.log(esBisiesto(2020));
console.log(esBisiesto(1900));
console.log(esBisiesto(2000));
console.log(esBisiesto(2023));

console.log(esElegibleParaPrestamo(3500000, 700));
console.log(esElegibleParaPrestamo(2500000, 700));
console.log(esElegibleParaPrestamo(3500000, 600));

console.log(consultarLibrosPorPalabraClaveTitulo("soledad"));
console.log(consultarLibrosPorPalabraClaveTitulo("prince"));
console.log(consultarLibrosPaginas());


// Animacion de la libreria Anime.js
document.querySelectorAll('.card-ejercicio').forEach(function(card){
  card.querySelectorAll('button').forEach(function(btn){
    btn.addEventListener('click', function(){
      anime({
        targets: card,
        boxShadow: [
          { value: '0 0 40px 0 rgba(13,110,253,.2)', duration: 320 },
          { value: '0 6px 24px rgba(0,0,0,.10)', duration: 420 }
        ],
        scale: [
          { value: 1.01, duration: 180, easing: 'easeOutQuad' },
          { value: 1.00, duration: 240, easing: 'easeOutQuad' }
        ],
        easing: 'easeInOutQuad'
      });

      var alertShown = card.querySelector('.alert:not(.d-none)');
      if (alertShown){
        anime({
          targets: alertShown,
          opacity: [{value:0, duration:0},{value:1, duration:600}],
          translateY: [{value:10, duration:0},{value:0, duration:600}],
          scale: [{value:.95, duration:0},{value:1, duration:600}],
          easing: 'easeOutElastic(1, .7)'
        });
      }
    });
  });
});

// Animacin para romper alcancia
function animRomperAlcanciaFancy() {
  var btn = document.getElementById('romper');
  var card = btn.closest('.card');
  if (!card || card.dataset.animating === '1') return;
  card.dataset.animating = '1';

  var layer = document.createElement('div');
  Object.assign(layer.style, {
    position:'absolute', inset:'0', pointerEvents:'none', overflow:'hidden'
  });
  card.appendChild(layer);

  var centerX = card.clientWidth / 2;
  var centerY = card.clientHeight * 0.38;

  function makeEmoji(txt, size){
    var el = document.createElement('div');
    el.textContent = txt;
    Object.assign(el.style, {
      position:'absolute',
      left: centerX + 'px',
      top:  centerY + 'px',
      transform:'translate(-50%,-50%)',
      fontSize: size + 'px',
      filter:'drop-shadow(0 6px 12px rgba(0,0,0,.25))'
    });
    layer.appendChild(el);
    return el;
  }

  var boom = makeEmoji('💥', 72);
  var pig  = makeEmoji('🐷', 64);

  var coins = [];
  var coinSet = ['🪙','💰','💵','🪙','💰'];
  for (var i = 0; i < 22; i++) {
    var c = makeEmoji(coinSet[i % coinSet.length], 22 + Math.random()*10);
    coins.push(c);
  }

  var tl = anime.timeline({ autoplay: true });

  tl.add({
    targets: card,
    rotate: [0, -1.2, 1.2, -0.8, 0],
    duration: 520,
    easing: 'easeInOutSine'
  })
  .add({
    targets: boom,
    scale: [0.2, 1.35],
    opacity: [0, 1],
    duration: 260,
    easing: 'easeOutBack'
  }, '-=380')
  .add({
    targets: boom,
    scale: [1.35, 1.8],
    opacity: [1, 0],
    duration: 320,
    easing: 'easeInQuad'
  }, '-=60')
  .add({
    targets: pig,
    translateY: [{ value: -20, duration: 220, easing: 'easeOutBack' },
                 { value: 160, duration: 720, easing: 'easeInCubic' }],
    rotate: [0, 15],
    scale: [1, 0.95],
    opacity: [1, 0.85]
  }, '-=360');

  anime({
    targets: coins,
    translateX: function(){ return anime.random(-220, 220); },
    translateY: function(){ return anime.random(-140, 160); },
    rotate: function(){ return anime.random(-360, 360); },
    scale: [{value: 1, duration: 0}, {value: 0.85, duration: 900}],
    opacity: [{value: 1, duration: 0}, {value: 0, duration: 900}],
    easing: 'easeOutExpo',
    delay: anime.stagger(22)
  });

  tl.finished.then(function(){
    layer.remove();
    delete card.dataset.animating;
  });
}