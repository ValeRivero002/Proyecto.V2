import { agregarProyecto, eliminarProyecto,ObtenerCantidadCommits,ObtenerCantidadPruebas ,ObtenerCantidadLineas,ObtenerCobertura,buscarProyecto,crearBoton, redirigirAMetricas} from "./tdd";
import {obtenerPuntajePorCantidadPruebas, obtenerPuntajePorCantidadLineas, obtenerPuntajePorCobertura, obtenerPuntajeTotalPorCommit, obtenerRetroalimentacionPorPuntajePruebas, obtenerRetroalimentacionPorPuntajeLineas, obtenerRetroalimentacionPorCobertura} from "./totalizador.js";
// Mock del DOM utilizando JSDOM
const { JSDOM } = require('jsdom');
const jsdom = new JSDOM('<!DOCTYPE html><html><body><ul id="proyectos-lista"></ul></body></html>');
global.document = jsdom.window.document;

describe("agregarProyecto", () => {
  let listaProyectos;
//hola como estas
  beforeEach(() => {
    // Limpiamos el contenido de la lista de proyectos antes de cada prueba
    listaProyectos = document.getElementById('proyectos-lista');
    listaProyectos.innerHTML = '';
  });

  it("debería agregar un proyecto a la lista de proyectos", () => {
    // Llamamos a la función agregarProyecto con un nuevo proyecto
    const Producto = agregarProyecto("Proyecto 1", "Descripción del proyecto 1", listaProyectos);

    // Verificamos que se haya agregado un nuevo proyecto a la lista
    expect(listaProyectos.children.length).toEqual(1);

    // Verificamos que el contenido del nuevo proyecto sea el esperado
    expect(Producto).toEqual("Proyecto 1: Descripción del proyecto 1");
  });

  it("debería agregar otro proyecto a la lista de proyectos", () => {
    // Llamamos a la función agregarProyecto con otro nuevo proyecto
    const Producto = agregarProyecto("Proyecto 2", "Descripción del proyecto 2", listaProyectos);

    // Verificamos que se haya agregado un nuevo proyecto a la lista
    expect(listaProyectos.children.length).toEqual(1);

    // Verificamos que el contenido del nuevo proyecto sea el esperado
    expect(Producto).toEqual("Proyecto 2: Descripción del proyecto 2");
  });
  

  // Agrega más casos de prueba según sea necesario
});
describe("eliminarProyecto", () => {
  let listaProyectos;

  beforeEach(() => {
    // Limpiamos el contenido de la lista de proyectos antes de cada prueba
    listaProyectos = document.getElementById('proyectos-lista');
    listaProyectos.innerHTML = '';
  });

  it("debería eliminar un proyecto de la lista de proyectos", () => {
    // Creamos un nuevo proyecto y lo agregamos a la lista
    const nuevoProyecto = document.createElement('li');
    listaProyectos.appendChild(nuevoProyecto);

    // Verificamos que haya un proyecto en la lista
    expect(listaProyectos.children.length).toEqual(1);

    // Llamamos a la función eliminarProyecto para eliminar el proyecto
    eliminarProyecto(nuevoProyecto, listaProyectos);

    // Verificamos que el proyecto haya sido eliminado
    expect(listaProyectos.children.length).toEqual(0);
  });
  it("eliminarProyecto debería eliminar el proyecto de la lista de proyectos", () => {
    // Creamos un proyecto simulado
    const proyectoSimulado = document.createElement('li');
    proyectoSimulado.textContent = "Proyecto de prueba";
    listaProyectos.appendChild(proyectoSimulado);

    // Llamamos a la función eliminarProyecto para eliminar el proyecto simulado
    eliminarProyecto(proyectoSimulado, listaProyectos);

    // Verificamos que el proyecto se haya eliminado correctamente de la lista
    expect(listaProyectos.children.length).toEqual(0);
  });
  it("debería llamar a eliminarProyecto cuando se hace clic en el botón 'Eliminar'", () => {
    // Llamamos a la función agregarProyecto con un nuevo proyecto
    agregarProyecto("Proyecto 1", "Descripción del proyecto 1", listaProyectos);

    // Simulamos hacer clic en el botón 'Eliminar'
    listaProyectos.children[0].querySelector('.eliminar').click();

    // Verificamos que la función eliminarProyecto haya sido llamada
    expect(listaProyectos.children.length).toEqual(0);
  });
});


//FUNCIONES PAGINA METRICAS
describe("Totalizador", () => {
   it("debería devolver la cantidad introducida en Cantidad de Commits", () => {
    
    expect(ObtenerCantidadCommits(10)).toEqual(10);
   });

   it("debería devolver la cantidad introducida en Cantidad de ", () => {
    
    expect(ObtenerCantidadLineas(20)).toEqual(20);
   });
   it("debería devolver la cantidad introducida en Cantidad de pruebas", () => {
    
    expect(ObtenerCantidadPruebas(10)).toEqual(10);
   });
   it("debería devolver la cantidad introducida en Cobertura", () => {
    
    expect(ObtenerCobertura(20)).toEqual(20);
   });
});


describe("TotalizadorPuntajes", () =>{
  it("Si el numero de pruebas por commit es menor o igual a 1 entonces el puntaje es de 100 puntos ejemplo: generar(1) => 1", () => {
      expect(obtenerPuntajePorCantidadPruebas(1)).toEqual(100);
  });
  it("Si el numero de pruebas por commit es mayor a 2 entonces el puntaje es de 0 puntos ejemplo: obtenerPuntajePorCommit(2) => 0", () => {
      expect(obtenerPuntajePorCantidadPruebas(2)).toEqual(0);
  });
  it("Si el numero de lineas por commit es menor o igual a 20 entonces el puntaje es de 100 puntos ejemplo: obtenerPuntajePorLineas(15) => 100", () => {
    expect(obtenerPuntajePorCantidadLineas(15)).toEqual(100);
  });
  it("Si el numero de lineas por commit es mayor a 20 entonces y menor a 35 el puntaje es de 50 puntos ejemplo: obtenerPuntajePorLineas(15) => 50", () => {
    expect(obtenerPuntajePorCantidadLineas(30)).toEqual(50);
  });
  it("Si el numero de lineas por commit es mayor a 35 el puntaje es de 0 puntos ejemplo: obtenerPuntajePorLineas(15) => 0", () => {
    expect(obtenerPuntajePorCantidadLineas(40)).toEqual(0);
  });
  it("Retornamos la cantidad de cobertura que obtuvo el proyecto ejemplo: obtenerPuntajePorCobertura(100) => 100", () => {
    expect(obtenerPuntajePorCobertura(100)).toEqual(100);
  });
  it("Retornamos el puntaje total por commit", () => {
    expect(obtenerPuntajeTotalPorCommit(obtenerPuntajePorCantidadLineas(30),obtenerPuntajePorCantidadPruebas(1),obtenerPuntajePorCobertura(90))).toEqual(80);
});
  it("Retornamos la retroalimentacion correspondiente al puntaje de 100 de cantidad de pruebas por commit", () => {
  expect(obtenerRetroalimentacionPorPuntajePruebas(obtenerPuntajePorCantidadPruebas(1))).toEqual("Cantidad de pruebas correctas");
  });
  it("Retornamos la retroalimentacion correspondiente al puntaje de 0 de cantidad de pruebas por commit", () => {
    expect(obtenerRetroalimentacionPorPuntajePruebas(obtenerPuntajePorCantidadPruebas(3))).toEqual("Tienes mas de una prueba en este commit, recuerda que tienes que tener maximo 1 prueba por commit.");
});
  it("Retornamos la retroalimentacion correspondiente al puntaje de 100 de cantidad de lineas por commit", () => {
  expect(obtenerRetroalimentacionPorPuntajeLineas(obtenerPuntajePorCantidadLineas(15))).toEqual("Cantidad de lineas correctas");
});
  it("Retornamos la retroalimentacion correspondiente al puntaje de 50 de cantidad de lineas por commit", () => {
  expect(obtenerRetroalimentacionPorPuntajeLineas(obtenerPuntajePorCantidadLineas(30))).toEqual("Tienes una cantidad de lineas superior a lo recomendado, recuerda que maximo tienes que tener 20 lineas por commit");
});
it("Retornamos la retroalimentacion correspondiente al puntaje de 0 de cantidad de lineas por commit", () => {
  expect(obtenerRetroalimentacionPorPuntajeLineas(obtenerPuntajePorCantidadLineas(40))).toEqual("Tienes una cantidad de lineas excesivamente superior a lo recomendado, recuerda que maximo tienes que tener 20 lineas por commit");
});
it("Retornamos la retroalimentacion correspondiente a la cobertura del commit para el puntaje menor 100", () => {
  expect(obtenerRetroalimentacionPorCobertura(obtenerPuntajePorCobertura(90))).toEqual("Tienes lineas de codigo que pueden mejorarse en el commit");
}); 
it("Retornamos la retroalimentacion correspondiente a la cobertura del commit para el puntaje igual a 100", () => {
  expect(obtenerRetroalimentacionPorCobertura(obtenerPuntajePorCobertura(90))).toEqual("Tienes lineas de codigo que pueden mejorarse en el commit");
}); 
  });



 //Tarea Nicolette Corregir examen
 describe('buscarProyecto', () => {
  it('debería encontrar un proyecto en una lista vacía', () => {
    const listaProyectos = document.createElement('ul');
    const proyecto = document.createElement('li');
    proyecto.textContent = 'Proyecto de prueba';
    listaProyectos.appendChild(proyecto);

    const resultado = buscarProyecto('Proyecto de prueba', listaProyectos);
    
    expect(resultado).toBeDefined();
    expect(resultado.textContent).toContain('Proyecto de prueba');
  });
});