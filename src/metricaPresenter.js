import { ObtenerCantidadCommits, ObtenerCantidadPruebas, ObtenerCantidadLineas, ObtenerCobertura, ObtenerDia, obtenerRetroalimentacionPorCoberturadePruebas,ObtenerComplejidad,calcularMayorDiferenciaDias,obtenerRetroalimentacionFinalPorFrecuencia} from "./tdd.js";
import { obtenerPuntajeTotalPorCommit, obtenerRetroalimentacionPorPuntajePruebas, obtenerRetroalimentacionPorPuntajeLineas, obtenerPuntajePorCantidadPruebas, obtenerPuntajePorCantidadLineas, obtenerPuntajePorCobertura} from "./totalizador.js";
import { obtenerPuntajePorComplejidad } from "./tdd.js";

const puntajeTotalProyectoDiv = document.getElementById('puntaje-total-proyecto');
const retroalimentacionFrecuenciaDiv = document.getElementById('frecuencia-proyecto');

let sumaPuntajesTotales = 0;

//METRICAS
const form = document.querySelector("#calcular-form");
const tablaDatosBody = document.querySelector("#datos-ingresados-body");
const puntajeComplejidadDiv = document.getElementById("puntaje-complejidad");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const dia = parseInt(document.querySelector("#dia").value);
  const cantidad = parseInt(document.querySelector("#cantidad").value);
  const cantidadPruebas = parseInt(document.querySelector("#cantidad-pruebas").value);
  const cantidadLineas = parseInt(document.querySelector("#cantidad-lineas").value);
  const cobertura = parseFloat(document.querySelector("#cobertura").value);
  const complejidad = parseInt(document.querySelector("#complejidad").value);

  // Obtener los valores de las métricas
  const frecuencia = ObtenerDia(dia);
  const commits = ObtenerCantidadCommits(cantidad);
  const pruebas = ObtenerCantidadPruebas(cantidadPruebas);
  const lineas = ObtenerCantidadLineas(cantidadLineas);
  const cov = ObtenerCobertura(cobertura);
  const complejidadTotal = ObtenerComplejidad(complejidad);

  // Calcular los puntajes de los commits
  const puntajePruebas = obtenerPuntajePorCantidadPruebas(pruebas);
  const puntajeLineas = obtenerPuntajePorCantidadLineas(lineas);
  const puntajeCobertura = obtenerPuntajePorCobertura(cov);
  const puntajeComplejidad = ObtenerComplejidad(complejidadTotal);

  // Calcular el puntaje total por commit
  const puntajeTotal = obtenerPuntajeTotalPorCommit(puntajeLineas, puntajePruebas, puntajeCobertura,puntajeComplejidad);

  // Obtener la retroalimentación para cada puntaje
  const retroalimentacionPruebas = obtenerRetroalimentacionPorPuntajePruebas(puntajePruebas);
  const retroalimentacionLineas = obtenerRetroalimentacionPorPuntajeLineas(puntajeLineas);
  const retroalimentacionCobertura = obtenerRetroalimentacionPorCoberturadePruebas(puntajeCobertura);
  const retroalimentacionComplejidad = obtenerPuntajePorComplejidad(puntajeComplejidad);

  // Calcula la suma de los puntajes totales
  sumaPuntajesTotales += puntajeTotal;

  // Calcula el promedio de los puntajes totales
  const cantidadFilas = tablaDatosBody.children.length + 1;
  const promedioPuntajesTotales = sumaPuntajesTotales / cantidadFilas;

  // Crear una nueva fila en la tabla con los valores de las métricas y el puntaje total
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
     <td>${frecuencia}</td>
     <td>${commits}</td>
     <td>${pruebas}</td>
     <td>${lineas}</td>
     <td>${cov}</td>
     <td>${puntajeComplejidad}</td>
     <td>${puntajeTotal}</td>
     <td>Cantidad de Pruebas: ${retroalimentacionPruebas}<br>Cantidad de Lineas: ${retroalimentacionLineas}<br>Cobertura: ${retroalimentacionCobertura}<br>Complejidad: ${retroalimentacionComplejidad}</td>
     <td><button class="eliminar-button">Eliminar</button></td>
  `;

  // Agregar la nueva fila a la tabla
  tablaDatosBody.appendChild(newRow);

  // Agregar evento de click al botón de eliminar
  newRow.querySelector(".eliminar-button").addEventListener("click", () => {
      tablaDatosBody.removeChild(newRow);
  });

  const mayorDiferenciaDias = obtenerRetroalimentacionFinalPorFrecuencia(calcularMayorDiferenciaDias(tablaDatosBody));

  // Muestra el puntaje total del proyecto y la frecuencia en los divs correspondientes
  retroalimentacionFrecuenciaDiv.textContent =  `freceuncia del proyecto: ${mayorDiferenciaDias}`;
  puntajeTotalProyectoDiv.textContent = `Puntaje total del proyecto: ${promedioPuntajesTotales}`;
});

