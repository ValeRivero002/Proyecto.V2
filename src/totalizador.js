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
     }else if(cantidadLineas > 20 && cantidadLineas <= 35){
       puntajeLineas = 50 
     }else
       puntajeLineas;
     return puntajeLineas;
  }
function obtenerPuntajePorCobertura(cobertura) {
    return cobertura;
   }
function obtenerPuntajeTotalPorCommit(obtenerPuntajePorCantidadLineas,obtenerPuntajePorCantidadPruebas,obtenerPuntajePorCobertura) {
    return (obtenerPuntajePorCantidadLineas + obtenerPuntajePorCantidadPruebas + obtenerPuntajePorCobertura) / 3;
   }     
function obtenerRetroalimentacionPorPuntajePruebas(puntajePruebas) {
if(puntajePruebas == 100){
    return "Cantidad de pruebas correctas";
}else{
    return "Tienes mas de una prueba en este commit, recuerda que tienes que tener maximo 1 prueba por commit.";
}
}
    
    export {obtenerPuntajePorCantidadPruebas, obtenerPuntajePorCantidadLineas, obtenerPuntajePorCobertura, obtenerPuntajeTotalPorCommit, obtenerRetroalimentacionPorPuntajePruebas};