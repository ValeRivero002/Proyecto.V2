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
  const url = 'indexMetrica.html';
  window.open(url, '_self')
}

// Función para eliminar un proyecto de la lista
export function eliminarProyecto(proyecto, listaProyectos) {
  listaProyectos.removeChild(proyecto);
}


//FUNCIONES PAGINA METRICAS

export function ObtenerCantidadCommits(cantidad) {
  return cantidad;
}

export function ObtenerCantidadPruebas(cantidadPruebas) {
  return cantidadPruebas;
}

export function ObtenerCantidadLineas(cantidadLineas) {
  return cantidadLineas;
}
export function ObtenerCobertura(cobertura) {
  return cobertura;
} 
export function ObtenerComplejidad(complejidad) {
  return complejidad;
}
export function ObtenerDia(dia) {
  return dia;
}

export function calcularMayorDiferenciaDias(tablaDatosBody) {
  const filas = tablaDatosBody.querySelectorAll("tr");
  
  if (filas.length === 0) {
    // Si no hay filas, la frecuencia es 1
    return 1;
  } else if (filas.length === 1) {
    // Si solo hay una fila, la frecuencia es 1
    return 1;
  } else {
    // Creamos un array para almacenar las diferencias entre días
    const diferencias = [];
    
    // Calculamos la diferencia entre cada par de días consecutivos
    for (let i = 1; i < filas.length; i++) {
      const diaActual = parseInt(filas[i].querySelector("td:nth-child(1)").textContent);
      const diaAnterior = parseInt(filas[i - 1].querySelector("td:nth-child(1)").textContent);
      const diferencia = diaActual - diaAnterior;
      
      diferencias.push(diferencia);
    }

    // Obtenemos el último día ingresado
    const ultimoDia = parseInt(filas[filas.length - 1].querySelector("td:nth-child(1)").textContent);
    
    // Obtenemos el día anterior al último día ingresado
    const diaAnteriorUltimo = parseInt(filas[filas.length - 2].querySelector("td:nth-child(1)").textContent);
    
    // Calculamos la diferencia entre el último día ingresado y el día anterior
    const diferenciaUltimoDia = ultimoDia - diaAnteriorUltimo;
    
    diferencias.push(diferenciaUltimoDia);

    // Encontramos la mayor diferencia entre días
    const mayorDiferencia = Math.max(...diferencias);
    
    return mayorDiferencia;
  }
}

export function obtenerRetroalimentacionFinalPorFrecuencia(diferencia) {
  if(diferencia < 2){
    return "Excelente"
  }
  
}



export function obtenerRetroalimentacionPorCoberturadePruebas(cobertura) {
  switch (true) {
    case (cobertura > 90):
      return "Excelente";
    case (cobertura >= 80):
      return "Bueno";
    case (cobertura >= 70):
      return "Regular";
    default:
      return "Deficiente";
  }
}
export function obtenerPuntajePorComplejidad(complejidad) {
  switch (true) {
    case (complejidad < 10):
      return "Excelente";
    case (complejidad < 20):
      return "Bueno";
    case (complejidad < 30):
      return "Regular";
    default:
      return "Deficiente";
  }
}

