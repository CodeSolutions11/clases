/*
const box = document.querySelectorAll('.box');

const boxs = [ ...document.querySelectorAll('.box') ];

console.log(box.map)
console.log(boxs.map)
*/

// Crear elementos en el DOM

// 1. Método .createElement()
//document.createElement("div");
/*
const div = document.createElement("div");
const span = document.createElement("span");
const img = document.createElement("img");

console.log(div);
console.log(span);
console.log(img);
*/

// 2. Crear comentarios .createComment();

//const comment = document.createComment("Comentario");
//console.log(comment);


// Gestionar Atributos del DOM
/*
const div = document.querySelector('.div');

console.log(div);

div.style = "background: #00f; border-radius: 5rem";
div.id = "element";
div.className = 'box box1';
*/

// Obtener Atributos html => hasAttributes(); hasAttribute(attr); getAttributeNames(); getAttribute(attr)
/*
const element = document.querySelector('#box');

console.log(element);

console.log(element.hasAttributes()); // Indica si el elemento tiene atributos html, me devuelve un boolean

console.log(element.hasAttribute('name')); //indica si el elemento tiene el atributo html especificado, me devuelve un boolean



const attributes = element.getAttributeNames();
console.log(attributes); // Nos devuelve un Array con los atributos del elemento 
//attributes.forEach( e => console.log(e));

let valor = "info";
valor = valor.toLowerCase(); // Convierte un string a minusculas
console.log(valor);
valor = valor.toUpperCase();// Convierte un string a mayusculas
console.log(valor);
console.log(element.getAttribute('class'));
console.log( element.getAttribute('class') === valor )
*/


// Ejercicio
const light = document.querySelector(".light");
const body = document.querySelector(".body");


console.log(light.getAttribute('class'));

if( light.getAttribute('class') === light.className ){
    light.className = "box dark";
    body.className = "light"
}

light.className = "box light";
body.className = "dark";