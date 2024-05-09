
import { agregarProyecto,buscarProyecto } from "./tdd.js";


// Obtener referencias a los elementos del DOM
const modal = document.getElementById('modal');
const agregarProyectoBtn = document.getElementById('agregar-proyecto');
const cerrarModalBtn = document.querySelector('.close');
const proyectosLista = document.getElementById('proyectos-lista');
const agregarProyectoForm = document.getElementById('agregar-proyecto-form');

// Función para mostrar el modal
const mostrarModal = () => modal.style.display = 'block';

// Función para cerrar el modal
const cerrarModal = () => modal.style.display = 'none';

// Función para manejar el clic fuera del modal
const clicFueraDelModal = (event) => {
  if (event.target === modal) {
    cerrarModal();
  }
};

// Función para manejar el envío del formulario de agregar proyecto
const manejarEnvioFormulario = (event) => {
  event.preventDefault();
  const nombreProyecto = document.getElementById('nombre-proyecto').value;
  const descripcionProyecto = document.getElementById('descripcion-proyecto').value;
  agregarProyecto(nombreProyecto, descripcionProyecto, proyectosLista);
  cerrarModal();
  event.target.reset(); // Limpiar el formulario después de agregar el proyecto

  // Buscar y mostrar el proyecto agregado
  buscarProyecto(nombreProyecto, proyectosLista);
};
// Asignar manejadores de eventos
agregarProyectoBtn.addEventListener('click', mostrarModal);
cerrarModalBtn.addEventListener('click', cerrarModal);
window.addEventListener('click', clicFueraDelModal);
if (agregarProyectoForm) {
  agregarProyectoForm.addEventListener('submit', manejarEnvioFormulario, );
}
//nicolette corregir examen
// Obtener referencias a los elementos del DOM
const buscarProyectoInput = document.getElementById('buscar-proyecto');
const buscarBtn = document.getElementById('buscar');
const busquedaProyecto = document.getElementById('busqueda-proyecto');

// Función para buscar un proyecto
function buscarProyectoEnLista() {
  const nombreProyecto = buscarProyectoInput.value;
  const proyectoEncontrado = buscarProyecto(nombreProyecto, proyectosLista);
  mostrarProyectoEncontrado(proyectoEncontrado);
}
// Función para buscar un proyecto en la lista y mostrar solo el proyecto buscado

function mostrarProyectoEncontrado(proyectoEncontrado) {
  const busquedaProyecto = document.getElementById('busqueda-proyecto');
  if (proyectoEncontrado) {
    busquedaProyecto.innerHTML = `<h3>Proyecto Encontrado:</h3><p>${proyectoEncontrado.textContent}</p>`;
  } else {
    busquedaProyecto.innerHTML = '<p>Proyecto no encontrado en la lista.</p>';
  }
}

// Asignar evento click al botón buscar
buscarBtn.addEventListener('click', buscarProyectoEnLista);

