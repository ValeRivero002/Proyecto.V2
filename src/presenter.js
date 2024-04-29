import { agregarProyecto, eliminarProyecto } from "./tdd";

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
  agregarProyectoConBoton(nombreProyecto, descripcionProyecto, proyectosLista);
  cerrarModal();
  // Limpiar el formulario después de agregar el proyecto
  agregarProyectoForm.reset();
}

// Función para agregar un proyecto a la lista con un botón de eliminar
function agregarProyectoConBoton(nombre, descripcion, listaProyectos) {
  const nuevoProyecto = document.createElement('li');
  nuevoProyecto.textContent = `${nombre}: ${descripcion}`;
    // Crear botón de eliminar
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.classList.add('eliminar'); // Agregar la clase "eliminar" al botón de eliminar
    botonEliminar.addEventListener('click', () => {
      eliminarProyecto(nuevoProyecto, listaProyectos); // Llamar a la función para eliminar el proyecto al hacer clic en el botón
    });
  
    // Agregar el botón de eliminar al proyecto
    nuevoProyecto.appendChild(botonEliminar);
  // Agregar el proyecto a la lista
  listaProyectos.appendChild(nuevoProyecto);
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
