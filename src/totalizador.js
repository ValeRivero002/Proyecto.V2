function obtenerPuntajePorCantidadPruebas(cantidadPruebas) {
     var puntajePruebas = 
        cantidadPruebas >= 100 ? 20 : 
        cantidadPruebas >= 80 ? 16 : 
        cantidadPruebas >= 60 ? 12 : 
        8;

    return puntajePruebas;

        }
function obtenerPuntajePorCantidadLineas(cantidadLineas) {
        if (cantidadLineas < 20) {
        return 20; // Excelente
    }
    if (cantidadLineas <= 40 && cantidadLineas >= 20) {
        return 16; // Bueno
    }
    if (cantidadLineas <= 60 && cantidadLineas > 40) {
        return 12; // Regular
    }
    return 8; // Deficiente

  }
function obtenerPuntajePorCobertura(cobertura) {
    return cobertura;
   }
function obtenerPuntajeTotalPorCommit(obtenerPuntajePorCantidadLineas,obtenerPuntajePorCantidadPruebas,obtenerPuntajePorCobertura) {
    return (obtenerPuntajePorCantidadLineas + obtenerPuntajePorCantidadPruebas + obtenerPuntajePorCobertura) / 3;
   }     
function obtenerRetroalimentacionPorPuntajePruebas(puntajePruebas) {
  if (puntajePruebas === 20) {
    return "Excelente";
} else if (puntajePruebas ===16) {
    return "Bueno";
} else if (puntajePruebas ==12) {
    return "Regular";
} else {
    return "Deficiente";
}
}
function obtenerRetroalimentacionPorPuntajeLineas(puntajeLineas) {
  if (puntajeLineas === 20) {
        return "Excelente";
    } else if (puntajeLineas === 16) {
        return "Bueno";
    } else if (puntajeLineas === 12) {
        return "Regular";
    } else if (puntajeLineas === 8) {
        return "Deficiente";
    } else {
        return "Puntaje no válido";
    }
  }
function obtenerRetroalimentacionPorCobertura(cobertura) {
if(cobertura < 100){
    return "Tienes lineas de codigo que pueden mejorarse en el commit";
}else
    return "Cobertura del commit correcta";
}  
    export {obtenerPuntajePorCantidadPruebas, obtenerPuntajePorCantidadLineas, obtenerPuntajePorCobertura, obtenerPuntajeTotalPorCommit, obtenerRetroalimentacionPorPuntajePruebas, obtenerRetroalimentacionPorPuntajeLineas, obtenerRetroalimentacionPorCobertura};