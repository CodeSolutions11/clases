// Seleccionar elemento del DOM
// const nav = document.querySelector('nav');
// console.log(nav)

// Craer Elemento en el DOM
//const footer = document.createElement('footer');

// footer.classList.add('footer');
// footer.className = 'footer';
//console.log(footer);



// Insertar Elementos en el DOM


// API Nodos

// NODE.appendChild(node) Añade o inserta un elemento  como hijo al NODO y devuelve el nodo insertado

const container = document.querySelector('.container');

const p = document.createElement('p');
p.innerText = 'contenido del parrafo';

console.log(container.appendChild(p));

// NODO.removeChild(node)
const h3 = document.querySelector('h3');

console.log(container.removeChild(h3));

// NODO.replaceChild(new, old)

const button = document.createElement('button');
button.innerText = 'Boton';
const link = document.querySelector('.link');

container.replaceChild(button, link);


// NODO.inserBefore(new, node);

const h2 = document.createElement('h2');
h2.textContent = 'Titulo del h2';

container.insertBefore(h2, p);