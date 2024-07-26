// Selecciono la etiqueta body
const body = document.querySelector('body');
const container = document.querySelector('.container');


//Creé 3 div y los almacené en 3 constantes distintas 
const div = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const div4 = document.createElement('div');

// asignarles 3 clases a cada elemento
div.className = 'div-1';
div2.className = 'div-2';
div3.className = 'div-3';
div4.className = 'div-4';

/*
// Añadir como hijo del nodo body
body.appendChild(div);
body.appendChild(div2);
body.appendChild(div3);

// Elliminar  un nodo del dom
body.removeChild(div2);

// reemplzar un nodo
const h1 = document.createElement('h1');
h1.textContent = 'Titulo de la página';

body.replaceChild(h1, div);

// insertar un nuevo nodo antes un de un nodo de referencia
body.insertBefore(div, div3);
*/

// Api de elementos o metodos de elementos

/* Añadir un elemento como hijo del elemento body
container.append(div)
container.append(div2)
*/
//inserta un elemento justo antes o despues del contenedor
/*
container.before(div4)
container.after(div3)
*/
/* Eliminar el propio elemento
div.remove()
div2.remove()
container.remove()
*/

// INSERCION DE ELEMENTOS ADJACENTES
// 1. insertAdjacentElement(position, element) : inserta un elemento element en la posicion position

// 2. insertAdjacentHTML(position, htmlCode) : inserta el codigo html htmlCode en la posicion position

// 3. insertAdjacentText(position, text) : inserta el texto text en la posicion position

/* posiciones diponibles:
1. 'beforebegin': inserta el elemento antes de la etiqueta HTML de apertura
2. 'afterbegin': inserta el elemento dentro, antes de su primer hijo
3. 'beforeend' : inserta el elemento dentro, justo antes de la etiqueta html de cierre
4. 'afterend': inserta el elemento despues de la etiqueta html de cierre
*/

/*
container.insertAdjacentElement('beforebegin', div);
container.insertAdjacentElement('afterbegin', div2);
container.insertAdjacentElement('beforeend', div3);
container.insertAdjacentElement('afterend', div4);

*/
/*
const codeHtml = `
    <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
    </ul>
`;
const codeHtml2 = `
    <table>
        <tr>
            <th>item1</th>
            <th>item2</th>
            <th>item3</th>
        </tr>
        <tr>
            <td>item1</td>
            <td>item2</td>
            <td>item3</td>
        </tr>
        <tr>
            <td>item1</td>
            <td>item2</td>
            <td>item3</td>
        </tr>

    </table>
`;
body.insertAdjacentHTML('afterbegin', codeHtml)
body.insertAdjacentHTML('afterbegin', codeHtml2)

container.insertAdjacentText('afterend', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.')

*/


////////////////// EVENTOS/////////////////////


const btn = document.querySelector('button');


/* const saludar = () => alert(`hola!!`)

function saludar(name){
    alert(`hola ${name}!!`)
}

btn.onclick = () => saludar('jesus');


console.log(btn)
*/


/*
btn.onclick = ()=>{
    const input = document.createElement('input');

    body.insertAdjacentElement('beforeend', input)
}
*/


function createInput (evento){
    const input = document.createElement('input');

    body.insertAdjacentElement('beforeend', input)
    console.log(evento);
}

function createSquare(){
    
    const square = document.createElement('div');
    
    body.insertAdjacentElement('beforeend', square)
    
}

btn.addEventListener('click', createInput)
btn.addEventListener('click', createSquare)