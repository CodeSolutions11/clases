const date = document.querySelector('.date')
const list = document.querySelector('.list')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const name = document.querySelector('.name')

const check = 'fa-check-circle';
const uncheck = 'fa-circle';
const task_realized = 'task_realized';


// Agregar Fecha Actualizada
const DATE = new Date();
const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
};
date.textContent = DATE.toLocaleDateString('es-VE', options)

// Mostrar y/o pedir Nombre al usuario
//localStorage.setItem('taskUser', 'Jesus Adrian');

let userName = localStorage.getItem('taskUser');

if(userName){
    name.textContent = `Hola ${userName}, feliz ${DATE.toLocaleDateString('es-VE', {
        weekday: 'long'
    })}!!`
}else{
    let newUser = prompt('Ingresar Nombre')

    name.textContent = `Hola ${userName}, feliz ${DATE.toLocaleDateString('es-VE', {
        weekday: 'long'
    })}!!`;

    localStorage.setItem('taskUser', newUser);
}


// Funcion para agregar la tarea del usuario
function taskAdd(taskContent){

    const taskHtml = `
        <li class="li">
            <p class="text">${taskContent}</p>
            <div class="icons">
                <i class="far fa-circle" data="realized"></i>                    
                <i class="fa-solid fa-trash" data="removed"></i>
            </div>
        </li>
    `;

    list.insertAdjacentHTML('beforeend', taskHtml)
}

// Evento del click para el icono de agregar tarea
btn.addEventListener('click', () => {

    taskContent = input.value;

    taskAdd(taskContent)

    input.value = ''
})

// Evento keyup para el imput de agregar tarea
input.addEventListener('keyup', (event) => {

    taskContent = input.value;

    if(event.key === 'Enter'){
        taskAdd(taskContent)

        input.value = ''

    }



})

function taskRealized(element){
    const li = element.parentNode.parentNode;

    element.classList.toggle(check);
    element.classList.toggle(uncheck);

    li.classList.toggle(task_realized)
    li.classList.toggle('li')

    console.log(element.parentNode.parentNode);

}

function taskRemoved(element){
    const li = element.parentNode.parentNode;

    list.removeChild(li);

    
}

list.addEventListener('click', event => {

    const element = event.target;
    const elementData = element.attributes.data.value

    console.log(elementData);

    if(elementData == 'realized'){
        taskRealized(element)
    }else if(elementData == 'removed'){
        taskRemoved(element)
    }


})