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
  const botonEliminar = document.createElement('button');
  botonEliminar.textContent = 'Eliminar';
  botonEliminar.classList.add('eliminar');
  botonEliminar.addEventListener('click', () => {
    eliminarProyecto(contenedorProyecto, listaProyectos);
  });
  const botonVerMetricas = document.createElement('button');
  botonVerMetricas.textContent = 'Ver métricas';
  botonVerMetricas.classList.add('ver-metricas');
  botonVerMetricas.addEventListener('click', () => {
    // Redireccionar a otra página para ver métricas
    window.location.href = 'ruta-a-tu-pagina-de-metricas';
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


export function eliminarProyecto(proyecto, listaProyectos) {
  listaProyectos.removeChild(proyecto);
}