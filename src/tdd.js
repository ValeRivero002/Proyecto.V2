export function agregarProyecto(nombre, descripcion, listaProyectos) {
  const nuevoProyecto = document.createElement('li');
  nuevoProyecto.textContent = `${nombre}: ${descripcion}`;
  listaProyectos.appendChild(nuevoProyecto);
}
export function eliminarProyecto(proyecto, listaProyectos) {
  listaProyectos.removeChild(proyecto);
}