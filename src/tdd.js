export function agregarProyecto(nombre, descripcion, listaProyectos) {
  const nuevoProyecto = document.createElement('li');
  nuevoProyecto.textContent = `${nombre}: ${descripcion}`;
  listaProyectos.appendChild(nuevoProyecto);
}
