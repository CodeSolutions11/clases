
console.log(document);

// Seleccionar elementos del DOM

// Métodos tradicionales

//Selecccionar elementos html por su nombre
// const p = document.getElementsByTagName('p');//Este metodo me devuelve array
// console.log(p);

// // Seleccionar elementos por su id
// const link = document.getElementById('link1'); // Devuelve el elemento por su id
// console.log(link);

// // Seleccionar elementos por su clase
// const title = document.getElementsByClassName('title');// devuelve un array
// console.log(title);

// // Seleccionar elementos por su atributo name
// const h2 = document.getElementsByName('h2-title');// Devuelve un array
// console.log(h2);


// Métodos Modernos
// querySelector Devuelve el primer elemento que coincida con el selector
/*
const paragraph = document.querySelector("p");
const link = document.querySelector("#link1");
const title = document.querySelector(".title");
const h2 = document.querySelector('[name="h2-title"]');

console.log(paragraph);
console.log(link);
console.log(title);
console.log(h2);
*/
//querySelectorAll devuelve un array con todos los elemento que conincidan con el selector
/*
const p = document.querySelectorAll("p");
const box = document.querySelectorAll('.box');

console.log(p);
console.log(box);
*/


// Crear elementos en el DOM

// createElement(etiqueta); Crea y devuelve el elemento HTML definido en el metodo
/*
const div = document.createElement('div');
const nav = document.createElement('nav');
const p = document.createElement('p');


console.log(div);
console.log(nav);
console.log(p);
*/
// createComment(texto) //Crea y devuelve un nodo de comentarios HTML definido en el metodo
/*
const comment = document.createComment("Texto simple");
console.log(comment);

// Propiedad isConnected devuelve un boolean indicando si esta insertado en el documento html

const span = document.querySelector("span");

console.log(div.isConnected);
console.log(span.isConnected);
*/

// Gestionar Atributos del DOM
/*
//Acceder a atributos html
const div = document.querySelector('div');
const h1 = document.querySelector("h1");
/*
let forma = "rectangulo";


if(forma == 'cuadrado'){

    div.className = "cuadrado";
}else{
    div.className = "rectangulo";

}
*/
/*
div.className = "cuadrado";
h1.style = "color: #00f; background: #ff0";

console.log(div);
*/
/*
// obtener atributos html 
        // =>hasAttributes(); hasAttributes(attr); getAttributeNames(); getAttribute(attr); 
const paragraph = document.querySelector('p');

console.log(paragraph.hasAttributes()); // Devuelve un boolean indicando si el elemento tiene atributos

console.log(paragraph.hasAttribute('target')); // Devuelve un boolean indicando si el elemento tiene el atributo que se pasa como parametro

console.log(paragraph.getAttributeNames()); // Devuelve un array con todos los atributos del elemento

console.log(paragraph.getAttribute('target')); // Devuelve el valor del atributo que se pasa por parametro o  devuelve null si ese atributo no existe
*/

const paragraph = document.querySelector('p');

let listAtributes = paragraph.getAttributeNames();

listAtributes.forEach(atributo => console.log(paragraph.getAttribute(atributo)));