function obtenerPuntajePorCantidadPruebas(cantidadPruebas) {
    var puntajePruebas = 0;
        if(cantidadPruebas <= 1){
          puntajePruebas = 100;
        }else
          puntajePruebas;
    
        return puntajePruebas;
        }
function obtenerPuntajePorCantidadLineas(cantidadLineas) {
var puntajeLineas = 0;
     if(cantidadLineas <= 20){
       puntajeLineas = 100;
     }
     return puntajeLineas;
  }
     
    
    export {obtenerPuntajePorCantidadPruebas, obtenerPuntajePorCantidadLineas};