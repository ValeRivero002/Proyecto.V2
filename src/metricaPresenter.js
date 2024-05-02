import { ObtenerCantidadCommits, ObtenerCantidadPruebas, ObtenerCantidadLineas, ObtenerCobertura} from "./tdd.js";
import { obtenerPuntajeTotalPorCommit, obtenerRetroalimentacionPorPuntajePruebas, obtenerRetroalimentacionPorPuntajeLineas, obtenerRetroalimentacionPorCobertura, obtenerPuntajePorCantidadPruebas, obtenerPuntajePorCantidadLineas, obtenerPuntajePorCobertura} from "./totalizador.js";


const puntajeTotalProyectoDiv = document.getElementById('puntaje-total-proyecto');

let sumaPuntajesTotales = 0;

//METRICAS
const form = document.querySelector("#calcular-form");
const tablaDatosBody = document.querySelector("#datos-ingresados-body");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const cantidad = parseInt(document.querySelector("#cantidad").value);
  const cantidadPruebas = parseInt(document.querySelector("#cantidad-pruebas").value);
  const cantidadLineas = parseInt(document.querySelector("#cantidad-lineas").value);
  const cobertura = parseFloat(document.querySelector("#cobertura").value);
  

  // Obtener los valores de las métricas
  const commits = ObtenerCantidadCommits(cantidad);
  const pruebas = ObtenerCantidadPruebas(cantidadPruebas);
  const lineas = ObtenerCantidadLineas(cantidadLineas);
  const cov = ObtenerCobertura(cobertura);

//Calcular los puntajes de los commits
const puntajePruebas = obtenerPuntajePorCantidadPruebas(pruebas);
const puntajeLineas = obtenerPuntajePorCantidadLineas(lineas);
const puntajeCobertura = obtenerPuntajePorCobertura(cov);

  // Calcular el puntaje total por commit
const puntajeTotal = obtenerPuntajeTotalPorCommit(puntajeLineas, puntajePruebas, puntajeCobertura);

// Obtener la retroalimentación para cada puntaje
const retroalimentacionPruebas = obtenerRetroalimentacionPorPuntajePruebas(puntajePruebas);
const retroalimentacionLineas = obtenerRetroalimentacionPorPuntajeLineas(puntajeLineas);
const retroalimentacionCobertura = obtenerRetroalimentacionPorCobertura(puntajeCobertura);

// Calcula la suma de los puntajes totales
sumaPuntajesTotales += puntajeTotal;

// Calcula el promedio de los puntajes totales
const cantidadFilas = tablaDatosBody.children.length + 1;
const promedioPuntajesTotales = sumaPuntajesTotales / cantidadFilas;

// Muestra el puntaje total del proyecto en el div correspondiente
puntajeTotalProyectoDiv.textContent = `Puntaje total del proyecto: ${promedioPuntajesTotales}`;

// Crear una nueva fila en la tabla con los valores de las métricas y el puntaje total
const newRow = document.createElement("tr");
newRow.innerHTML = `
     
     <td>${commits}</td>
     <td>${pruebas}</td>
     <td>${lineas}</td>
     <td>${cov}</td>
     <td>${puntajeTotal}</td>
     <td>${retroalimentacionPruebas}<br>${retroalimentacionLineas}<br>${retroalimentacionCobertura}</td>
     <td><button class="eliminar-button">Eliminar</button></td>
`;

// Agregar la nueva fila a la tabla
tablaDatosBody.appendChild(newRow);
  // Agregar evento de click al botón de eliminar
  newRow.querySelector(".eliminar-button").addEventListener("click", () => {
      tablaDatosBody.removeChild(newRow);
  });

  
});