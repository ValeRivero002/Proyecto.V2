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
  agregarProyectoConBoton(nombreProyecto, descripcionProyecto);
  cerrarModal();
  event.target.reset(); // Limpiar el formulario después de agregar el proyecto
};

// Función para agregar un proyecto a la lista con un botón de eliminar
const agregarProyectoConBoton = (nombre, descripcion) => {
  const contenedorProyecto = document.createElement('div');
  contenedorProyecto.classList.add('proyecto');

  const tituloProyecto = document.createElement('h3');
  tituloProyecto.classList.add('proyecto-titulo');
  tituloProyecto.textContent = nombre;

  const descripcionProyecto = document.createElement('p');
  descripcionProyecto.classList.add('proyecto-descripcion');
  descripcionProyecto.textContent = descripcion;

  const botonEliminar = document.createElement('button');
  botonEliminar.textContent = 'Eliminar';
  botonEliminar.classList.add('eliminar');
  botonEliminar.addEventListener('click', () => {
    eliminarProyecto(contenedorProyecto, proyectosLista);
  });

  contenedorProyecto.appendChild(tituloProyecto);
  contenedorProyecto.appendChild(descripcionProyecto);
  contenedorProyecto.appendChild(botonEliminar);

  proyectosLista.appendChild(contenedorProyecto);
};

// Asignar manejadores de eventos
agregarProyectoBtn.addEventListener('click', mostrarModal);
cerrarModalBtn.addEventListener('click', cerrarModal);
window.addEventListener('click', clicFueraDelModal);
if (agregarProyectoForm) {
  agregarProyectoForm.addEventListener('submit', manejarEnvioFormulario);
}
