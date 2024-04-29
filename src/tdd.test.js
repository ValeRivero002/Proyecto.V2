import { agregarProyecto, eliminarProyecto } from "./tdd";

// Mock del DOM utilizando JSDOM
const { JSDOM } = require('jsdom');
const jsdom = new JSDOM('<!DOCTYPE html><html><body><ul id="proyectos-lista"></ul></body></html>');
global.document = jsdom.window.document;

describe("agregarProyecto", () => {
  let listaProyectos;

  beforeEach(() => {
    // Limpiamos el contenido de la lista de proyectos antes de cada prueba
    listaProyectos = document.getElementById('proyectos-lista');
    listaProyectos.innerHTML = '';
  });

  it("debería agregar un proyecto a la lista de proyectos", () => {
    // Llamamos a la función agregarProyecto con un nuevo proyecto
    agregarProyecto("Proyecto 1", "Descripción del proyecto 1", listaProyectos);

    // Verificamos que se haya agregado un nuevo proyecto a la lista
    expect(listaProyectos.children.length).toEqual(1);

    // Verificamos que el contenido del nuevo proyecto sea el esperado
    expect(listaProyectos.children[0].textContent).toEqual("Proyecto 1: Descripción del proyecto 1");
  });

  it("debería agregar otro proyecto a la lista de proyectos", () => {
    // Llamamos a la función agregarProyecto con otro nuevo proyecto
    agregarProyecto("Proyecto 2", "Descripción del proyecto 2", listaProyectos);

    // Verificamos que se haya agregado un nuevo proyecto a la lista
    expect(listaProyectos.children.length).toEqual(1);

    // Verificamos que el contenido del nuevo proyecto sea el esperado
    expect(listaProyectos.children[0].textContent).toEqual("Proyecto 2: Descripción del proyecto 2");
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

  // Agrega más casos de prueba según sea necesario
});