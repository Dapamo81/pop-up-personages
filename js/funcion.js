// Obtener todos los botones con la clase 'mostrarBtn'
const btnsMostrar = document.querySelectorAll('.mostrarBtn');
// Obtener las ventanas por su clase
const ventanas = document.querySelectorAll('.ventana');
// Fondo para bloquear la pantalla
const fondo = document.getElementById('fondo');

// Variable para guardar el temporizador actual
let temporizadorCierre = null;

// Función para mostrar la ventana correspondiente
function mostrarVentana(event) {
  const ventanaId = event.currentTarget.getAttribute('data-ventana');
  const ventana = document.getElementById(ventanaId);
  
  // Mostrar la ventana y el fondo
  ventana.style.display = 'block';
  fondo.style.display = 'block';

  // Limpiar cualquier temporizador previo
  if (temporizadorCierre) {
    clearTimeout(temporizadorCierre);
  }

  // Iniciar un temporizador para cerrar la ventana en 5 segundos
  temporizadorCierre = setTimeout(() => {
    cerrarVentanas();
  }, 5000);
}

// Función para cerrar todas las ventanas
function cerrarVentanas() {
  ventanas.forEach(ventana => {
    ventana.style.display = 'none';
  });
  fondo.style.display = 'none';

  // Limpiar el temporizador si existe
  if (temporizadorCierre) {
    clearTimeout(temporizadorCierre);
    temporizadorCierre = null;
  }
}

// Agregar evento a cada botón para mostrar la ventana
btnsMostrar.forEach(btn => {
  btn.addEventListener('click', mostrarVentana);
});

// Agregar evento a los elementos de cerrar en cada ventana
const cerrarBtns = document.querySelectorAll('.ventana .cerrar');
cerrarBtns.forEach(cerrarBtn => {
  cerrarBtn.addEventListener('click', cerrarVentanas);
});

// También cerrar al hacer clic en el fondo
fondo.addEventListener('click', cerrarVentanas);