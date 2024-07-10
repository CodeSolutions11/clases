// Ejemplo 1 de como exportar
export let name = 'Jesus';

// Ejemplo 2  de como exportar
let nroFav = 11;
export{nroFav};

// Ejemplo 3  de como exportar
let bool = true;
export{bool as verdadero};

// Ejemplo 4 de como exportar varios elementos
/*
export{
    name,
    nroFav,
    bool as verdadero
}
*/
// Ejemplo 5 de como exportar 
export * from './Variables.js';

// Ejemplo 6 de como exportar 

//export default nroFav;
