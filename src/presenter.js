import { agregarProyecto, eliminarProyecto } from "./tdd";

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
};

// Asignar manejadores de eventos
agregarProyectoBtn.addEventListener('click', mostrarModal);
cerrarModalBtn.addEventListener('click', cerrarModal);
window.addEventListener('click', clicFueraDelModal);
if (agregarProyectoForm) {
  agregarProyectoForm.addEventListener('submit', manejarEnvioFormulario);
}
