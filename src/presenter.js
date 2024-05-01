import { agregarProyecto, eliminarProyecto,ObtenerCantidadCommits,ObtenerCantidadPruebas,ObtenerCantidadLineas,ObtenerCobertura } from "./tdd";

// Obtener referencias a los elementos del DOM
const modal = document.getElementById('modal');
const agregarProyectoBtn = document.getElementById('agregar-proyecto');
const cerrarModalBtn = document.querySelector('.close');
const proyectosLista = document.getElementById('proyectos-lista');
const agregarProyectoForm = document.getElementById('agregar-proyecto-form');

//METRICAS
const form = document.querySelector("#calcular-form");
const tablaDatosBody = document.querySelector("#datos-ingresados-body");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const cantidad = document.querySelector("#cantidad").value;
    const cantidadPruebas = document.querySelector("#cantidad-pruebas").value;
    const cantidadLineas = document.querySelector("#cantidad-lineas").value;
    const cobertura = document.querySelector("#cobertura").value;
    
    ObtenerCantidadCommits(cantidad);
    ObtenerCantidadPruebas(cantidadPruebas);
    ObtenerCantidadLineas(cantidadLineas);
    ObtenerCobertura(cobertura);
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
       <td>${nombre}</td>
       <td>${cantidad}</td>
       <td>${cantidadPruebas}</td>
       <td>${cantidadLineas}</td>
       <td>${cobertura}</td>
    `;
    tablaDatosBody.appendChild(newRow);
});



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


