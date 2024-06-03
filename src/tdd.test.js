import { agregarProyecto, eliminarProyecto,ObtenerCantidadCommits,ObtenerCantidadPruebas ,ObtenerCantidadLineas,ObtenerCobertura,crearBoton, redirigirAMetricas, obtenerPuntajePorComplejidad} from "./tdd";
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

  it("Si el número de pruebas por commit es mayor o igual a 100 entonces el puntaje es de 20 puntos", () => {
      expect(obtenerPuntajePorCantidadPruebas(100)).toEqual(20);
      expect(obtenerPuntajePorCantidadPruebas(120)).toEqual(20);
  });

  it("Si el número de pruebas por commit es mayor o igual a 80 pero menor que 100 entonces el puntaje es de 16 puntos", () => {
      expect(obtenerPuntajePorCantidadPruebas(80)).toEqual(16);
      expect(obtenerPuntajePorCantidadPruebas(99)).toEqual(16);
  });

  it("Si el número de pruebas por commit es mayor o igual a 60 pero menor que 80 entonces el puntaje es de 12 puntos", () => {
      expect(obtenerPuntajePorCantidadPruebas(60)).toEqual(12);
      expect(obtenerPuntajePorCantidadPruebas(79)).toEqual(12);
  });

  it("Si el número de pruebas por commit es menor que 60 entonces el puntaje es de 8 puntos", () => {
      expect(obtenerPuntajePorCantidadPruebas(59)).toEqual(8);
      expect(obtenerPuntajePorCantidadPruebas(0)).toEqual(8);
  });
 
    it("Si el número de líneas por commit es menor a 20, el puntaje es de 20 puntos", () => {
        expect(obtenerPuntajePorCantidadLineas(15)).toEqual(20);
    });

    it("Si el número de líneas por commit está entre 20 y 40, el puntaje es de 16 puntos", () => {
        expect(obtenerPuntajePorCantidadLineas(30)).toEqual(16);
    });

    it("Si el número de líneas por commit está entre 41 y 60, el puntaje es de 12 puntos", () => {
        expect(obtenerPuntajePorCantidadLineas(50)).toEqual(12);
    });

    it("Si el número de líneas por commit es mayor a 60, el puntaje es de 8 puntos", () => {
        expect(obtenerPuntajePorCantidadLineas(70)).toEqual(8);
    });
  it("Retornamos la cantidad de cobertura que obtuvo el proyecto ejemplo: obtenerPuntajePorCobertura(100) => 100", () => {
    expect(obtenerPuntajePorCobertura(100)).toEqual(100);
  });
 /* it("Retornamos el puntaje total por commit", () => {
    expect(obtenerPuntajeTotalPorCommit(obtenerPuntajePorCantidadLineas(30),obtenerPuntajePorCantidadPruebas(1),obtenerPuntajePorCobertura(90))).toEqual(80);
  });*/
  it("Retornamos la retroalimentacion correspondiente al puntaje de 100 de cantidad de pruebas por commit", () => {
  expect(obtenerRetroalimentacionPorPuntajePruebas(obtenerPuntajePorCantidadPruebas(100))).toEqual("Excelente");
  });
  
  it("Retornamos la retroalimentacion correspondiente al puntaje de 20 de cantidad de lineas por commit", () => {
    expect(obtenerRetroalimentacionPorPuntajeLineas(obtenerPuntajePorCantidadLineas(19))).toEqual("Excelente");
});

it("Retornamos la retroalimentacion correspondiente al puntaje de 16 de cantidad de lineas por commit", () => {
    expect(obtenerRetroalimentacionPorPuntajeLineas(obtenerPuntajePorCantidadLineas(40))).toEqual("Bueno");
});
it("Retornamos la retroalimentacion correspondiente al puntaje de 12 de cantidad de lineas por commit", () => {
  expect(obtenerRetroalimentacionPorPuntajeLineas(obtenerPuntajePorCantidadLineas(60))).toEqual("Regular");
});
it("Retornamos la retroalimentacion correspondiente al puntaje de 8 de cantidad de lineas por commit", () => {
  expect(obtenerRetroalimentacionPorPuntajeLineas(obtenerPuntajePorCantidadLineas(65))).toEqual("Deficiente");
});
it("Retornamos la retroalimentacion correspondiente a la cobertura del commit para el puntaje menor 100", () => {
  expect(obtenerRetroalimentacionPorCobertura(obtenerPuntajePorCobertura(90))).toEqual("Tienes lineas de codigo que pueden mejorarse en el commit");
}); 
it("Retornamos la retroalimentacion correspondiente a la cobertura del commit para el puntaje igual a 100", () => {
  expect(obtenerRetroalimentacionPorCobertura(obtenerPuntajePorCobertura(90))).toEqual("Tienes lineas de codigo que pueden mejorarse en el commit");
}); 
  });

  import { obtenerRetroalimentacionPorCoberturadePruebas } from "./tdd.js";

  describe("Retroalimentación por cobertura de pruebas", () => {
    it("debería devolver 'Excelente' si la cobertura es mayor que 90%", () => {
      expect(obtenerRetroalimentacionPorCoberturadePruebas(91)).toEqual("Excelente");
      expect(obtenerRetroalimentacionPorCoberturadePruebas(95)).toEqual("Excelente");
    });
    it("debería devolver 'Bueno' si la cobertura está entre 80% y 90%", () => {
    expect(obtenerRetroalimentacionPorCoberturadePruebas(80)).toEqual("Bueno");
    expect(obtenerRetroalimentacionPorCoberturadePruebas(85)).toEqual("Bueno");
    expect(obtenerRetroalimentacionPorCoberturadePruebas(90)).toEqual("Bueno");
  });
    it("debería devolver 'Regular' si la cobertura está entre 70% y 79%", () => {
      expect(obtenerRetroalimentacionPorCoberturadePruebas(70)).toEqual("Regular");
      expect(obtenerRetroalimentacionPorCoberturadePruebas(75)).toEqual("Regular");
      expect(obtenerRetroalimentacionPorCoberturadePruebas(79)).toEqual("Regular");
    });
    it("debería devolver 'Deficiente' si la cobertura es menor que 70%", () => {
      expect(obtenerRetroalimentacionPorCoberturadePruebas(69)).toEqual("Deficiente");
      expect(obtenerRetroalimentacionPorCoberturadePruebas(50)).toEqual("Deficiente");
    });
  });


describe("obtenerPuntajePorComplejidad", () => {
  it("debería devolver 'Excelente' para baja complejidad (por debajo de 10)", () => {
    expect(obtenerPuntajePorComplejidad(5)).toEqual("Excelente");
  });
  it("debería devolver 'Bueno' para moderada complejidad (entre 10 y 20)", () => {
    expect(obtenerPuntajePorComplejidad(15)).toEqual("Bueno");
  });
  it("debería devolver 'Regular' para alta complejidad (entre 20 y 30)", () => {
    expect(obtenerPuntajePorComplejidad(25)).toEqual("Regular");
  });
  it("debería devolver 'Deficiente' para muy alta complejidad (mayor de 30)", () => {
    expect(obtenerPuntajePorComplejidad(35)).toEqual("Deficiente");
  });
});
