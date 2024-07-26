const element = document.querySelector('div');


// setAttribute(attr, value) Añade o cambia el atributo attr al valor value del elemento html
/*
console.log(element.id)


element.setAttribute('id', 'div-2');
element.setAttribute('name', 'element-1');

console.log(element.id);
console.log(element.attributes.name.value);
*/
//removeAttribute(attr)
/*element.removeAttribute('name');
element.removeAttribute('id');

console.log(element.attributes);
*/

// element.className = 'div-2';
/*
element.classList.forEach( e => console.log(e))

const  list = [ ...element.classList ]


console.log(element.classList);

console.log(list);
*/
/*
const h1 = document.querySelector('h1');

console.log(h1.classList);
// h1.classList.add('bg')
h1.classList.toggle('bg');
h1.classList.toggle('title');

h1.classList.forEach( e => {
    console.log(e)
});
*/
/*
const link = document.querySelectorAll('a');

link[0].classList.toggle('active');
*/

// Contenido en el DOM, textContent, innerHtml
// const p = document.querySelector('p');
// const b = document.querySelector('b');
/*
console.log(p.textContent);

let name = prompt("ingresar nombre");


p.textContent =  `hola ${name}`;

console.log(p.textContent);
*/
/*
b.textContent= 'texto';

console.log(p.textContent);

console.log(p.innerHTML);
*/


// Insertar elementos en el DOM
/*
const container = document.querySelector('.container');

const paragraph = document.createElement('p');

paragraph.classList.toggle('title');
paragraph.classList.toggle('bg');
paragraph.textContent = 'Lorem ipsum dolorsit amet consectetur adipisicing elit';

console.log(container);
console.log(paragraph);

container.appendChild(paragraph);

console.log(container);
*/

function createCard(cardTitle){
    const body = document.querySelector('body');

    const card = document.createElement('section');
    card.classList.toggle('card');

 
    const img = document.createElement('img');
    img.src = '../../images/1.png';

    const title = document.createElement('h3');
    title.textContent = cardTitle;

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et laudantium repellendus dolorum porro amet maxime recusandae quia, blanditiis possimus quos qui magnam aut maiores expedita accusantium mollitia. Quo, ad harum!';

    const btn = document.createElement('button');
    btn.textContent = 'botom';

    body.appendChild(card);

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(paragraph);
    card.appendChild(btn);


}

createCard('servicio de tecnologia');
createCard('servicio de Servidores');
createCard('servicio de Programacion');
createCard('servicio de soporte');
createCard('servicio de soporte tecnico');
createCard('servicio de redes');
createCard('servicio de marketing');
createCard('servicio de auromatizacion');