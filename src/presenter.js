import { agregarProyecto } from "./tdd";

const modal = document.getElementById('modal');
const agregarProyectoBtn = document.getElementById('agregar-proyecto');
const cerrarModalBtn = document.getElementsByClassName('close')[0];
const agregarProyectoForm = document.getElementById('agregar-proyecto-form');
const proyectosLista = document.getElementById('proyectos-lista'); // Referencia al elemento ul

// Mostrar modal al hacer clic en "Agregar Proyecto"
agregarProyectoBtn.onclick = function() {
  modal.style.display = 'block';
}

// Cerrar modal al hacer clic en la "X"
cerrarModalBtn.onclick = function() {
  modal.style.display = 'none';
}

// Cerrar modal al hacer clic fuera del modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
