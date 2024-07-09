
// Insertar elementos en DOM
/*
    API de nodos => .appendChild(node), .removeChild(node), .replaceChild(newElement, oldEment), .insertBefore(newElement, nodeElement)
*/

/*
    API de elementos => .before(), .after(), .prepend(), .append(), .replaceChildren(), replaceWith(), remove()
*/

const container = document.querySelector('.container');
const box = document.querySelector('.box-1');
const box2= document.querySelector('.box-2');
const grayBox = document.querySelector('.box-3');

const div = document.createElement('div');
div.innerText = ' Nuevo elemeneto div ';

const div2 = document.createElement('div');
div2.innerText = ' segundo elemeneto div ';

/*
box.before(div); // Inserta div antes del elemnto box
box2.after(div2);// Inserta div2 despues del elemnto box2

console.log(container);
console.log(document);
*/
/*
container.prepend(div); // Inserta antes del primer hijo del contenedor
container.append(div2);// Inserta despues del ultimo hijo del contenedor
*/

//container.replaceChildren(div); //Elimina todos los elementos hijos del contenedor y los reemplaza por un nuevo elemento
/*
box.replaceWith(div);
box2.replaceWith(div2);
box2.remove();
*/



// Navegar por elementos del DOM
//* Navergar a traves de elementos
//=> children, parentElement, firstElementChild, lastElementChild, previousElementSibling, nextElementSibling

/*
let listElement = [ ...container.children];

listElement.forEach(element => {
    console.log(element);
    });
*/
//console.log(container.parentElement);
/*
console.log(container.firstElementChild);
console.log(container.lastElementChild);

console.log(grayBox.previousElementSibling);
console.log(grayBox.nextElementSibling);
*/

// Navegar a trave de nodos
//=> childNodes, parentNode, firstChild, lastChild
/*
console.log(document.body.childNodes.length);
console.log(document.body.childNodes);
console.log(document.body.parentNode);
*/
/*
console.log(container.childNodes.length);
console.log(container.childNodes);
*/
/*
console.log(container.childNodes);

console.log(container.firstChild);
console.log(container.lastChild);
*/


// Eventos JS
// Las Caracteristicas pueden ser:
/*
 - Click
 - Pulsacion de alguna tecla especifica del teclado
 - Reproduccion de un archivo audio/video 
 - scroll
*/