const btn = document.querySelector('button');
const caja = document.querySelector('div');
//const link = document.querySelector('a');


const changeColor = ()=>{
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    caja.style.background = "#"+randomColor;
}

/*
caja.setAttribute("class", "caja1");

link.setAttribute('target', '_blank');
link.setAttribute('href', 'https://developer.mozilla.org/es/docs/Web/API/Element/setAttribute');

btn.setAttribute('onclick', 'changeColor()');
*/

// .addEventListener(event, function) :permite añadir una escucha del evento indicado (primer parametro) y se ocurre el evento se ejecutara la funcion asociada (segundo parametro)

//btn.addEventListener('click', changeColor);
/*
btn.addEventListener('click', changeColor);
let count = 0;

btn.addEventListener('click', ()=>{
    caja.textContent = 'Click nro '+count;
    count++;
});
*/

import {EventManager}  from '../../modulos/Clases.js';

const evenManager = new EventManager(btn, 'Mercedes');