import { agregarProyecto } from "./tdd";

// Función para mostrar el modal
function mostrarModal() {
  modal.style.display = 'block';
}

// Función para cerrar el modal
function cerrarModal() {
  modal.style.display = 'none';
}

// Función para manejar el clic fuera del modal
function clicFueraDelModal(event) {
  if (event.target == modal) {
    cerrarModal();
  }
}

// Función para manejar el envío del formulario de agregar proyecto
function manejarEnvioFormulario(event) {
  event.preventDefault();
  const nombreProyecto = document.getElementById('nombre-proyecto').value;
  const descripcionProyecto = document.getElementById('descripcion-proyecto').value;
  agregarProyecto(nombreProyecto, descripcionProyecto, proyectosLista);
  cerrarModal();
  // Limpiar el formulario después de agregar el proyecto
  agregarProyectoForm.reset();
}

// Obtener referencias a los elementos del DOM
const modal = document.getElementById('modal');
const agregarProyectoBtn = document.getElementById('agregar-proyecto');
const cerrarModalBtn = document.getElementsByClassName('close')[0];
const agregarProyectoForm = document.getElementById('agregar-proyecto-form');
const proyectosLista = document.getElementById('proyectos-lista');

// Asignar manejadores de eventos
agregarProyectoBtn.addEventListener('click', mostrarModal);
cerrarModalBtn.addEventListener('click', cerrarModal);
window.addEventListener('click', clicFueraDelModal);
agregarProyectoForm.addEventListener('submit', manejarEnvioFormulario);
