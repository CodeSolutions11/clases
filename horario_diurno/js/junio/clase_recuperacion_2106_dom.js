//console.log(document)

// Element => La representacion de una etiqueta html ( HTMLElement )
// Node => Una unidad mas básica, puede ser un Element o un nodo de texto

// 1. Seleccionar Elementos del DOM

// 1.1 getElementById() => Seleccionar un elemento html por su id 
/*/const div = document.getElementById('div1');
console.log(div)*/

// 1.2 getElementsByClassName()
/*
const p = document.getElementsByClassName('paragraph');
console.log(p);
*/

// Selectores modernos
// 1.3 querySelector()
/*
const elementoHtml = document.querySelector('#div1');
console.log(elementoHtml)

const elemento2Html = document.querySelector('.paragraph');
console.log(elemento2Html)
*/
// 1.3 querySelectorAll()

const elemento3Html = document.querySelectorAll('.paragraph');

elemento3Html.forEach( e => console.log(e.innerHTML = 'dfjksd'));