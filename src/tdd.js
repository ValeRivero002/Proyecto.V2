export function agregarProyecto(nombre, descripcion, listaProyectos) {
  // Crear un contenedor de proyecto (caja)
  const contenedorProyecto = document.createElement('div');
  contenedorProyecto.classList.add('proyecto');

  // Crear el título del proyecto
  const tituloProyecto = document.createElement('h3');
  tituloProyecto.textContent = nombre+ ": ";

  // Crear la descripción del proyecto
  const descripcionProyecto = document.createElement('p');
  descripcionProyecto.textContent = descripcion;

  // Crear el botón de eliminar
  const botonEliminar = crearBoton('Eliminar', 'eliminar', () => {
    eliminarProyecto(contenedorProyecto, listaProyectos);
  });

  // Crear el botón de ver métricas
  const botonVerMetricas = crearBoton('Ver métricas', 'ver-metricas', () => {
    redirigirAMetricas();
  });

  // Agregar elementos al contenedor del proyecto (caja)
  contenedorProyecto.appendChild(tituloProyecto);
  contenedorProyecto.appendChild(descripcionProyecto);
  contenedorProyecto.appendChild(botonEliminar);
  contenedorProyecto.appendChild(botonVerMetricas);
  
  // Agregar el contenedor del proyecto a la lista de proyectos
  listaProyectos.appendChild(contenedorProyecto);

  // Modificamos el contenido del proyecto para excluir el botón de eliminar
  const contenidoProyecto = `${nombre}: ${descripcion}`;
  return contenidoProyecto;
}

// Función auxiliar para crear botones
export function crearBoton(texto, clase, callback) {
  const boton = document.createElement('button');
  boton.textContent = texto;
  boton.classList.add(clase);
  boton.addEventListener('click', callback);
  return boton;
}

// Función para redirigir a la página de métricas
export function redirigirAMetricas() {
  // Aquí deberías implementar la lógica para redirigir a la página de métricas
  console.log('Redirigir a la página de métricas');
}

// Función para eliminar un proyecto de la lista
export function eliminarProyecto(proyecto, listaProyectos) {
  listaProyectos.removeChild(proyecto);
}


//FUNCIONES PAGINA METRICAS

export function ObtenerCantidadCommits(cantidad) {
  return cantidad;
}

function ObtenerCantidadPruebas(cantidadPruebas) {
  return cantidadPruebas;
}

function ObtenerCantidadLineas(cantidadLineas) {
  return cantidadLineas;
}
function ObtenerCobertura(cobertura) {
  return cobertura;
} 

export { ObtenerCantidadPruebas, ObtenerCantidadLineas,ObtenerCobertura };