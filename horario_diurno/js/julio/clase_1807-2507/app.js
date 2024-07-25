
const date = document.querySelector('.date');
const list = document.querySelector('.list');
const btnAddTask = document.querySelector('.btnAddTask');
const input = document.querySelector('.input');

const check = 'fa-solid fa-check';
const uncheck = 'fa-regular fa-circle-xmark'
const lineThrough  = 'line-through';

const name = document.querySelector('.name');

// Crear e insertar fecha
const DATE = new Date();
date.textContent = DATE.toLocaleDateString('es-VE', {
    weekday: 'long',
    month:'long',
    day:"numeric"
});


// insert y obtener datos en el localStorage
localStorage.setItem('taskApp', JSON.stringify({
    id: 1,
    name: 'Jesus Adrian',
    email: 'jesus@gmail.com'
}))

let data = localStorage.getItem('taskApp')
data = JSON.parse(data)
console.log(data.name);
console.log(localStorage);


// Pedir nombre
name.textContent = data.name;

const taskAdd = (task, taskComplete)=>{

    const realizado = taskComplete ? uncheck : check;
    const line = taskComplete ? lineThrough : '';

    const codeTask = `
        <li class="codeTask">
            <i class="${realizado}"></i>
            <p class="text ${line}">${task}</p>
            <i class="fa-solid fa-trash"></i>
        </li>
    `;

    //list.insertAdjacentElement('beforeend', element);
    // list.appendChild(element)

    list.insertAdjacentHTML('beforeend', codeTask);

}


btnAddTask.addEventListener('click', (event) => {
    
    console.log(event);

    const task = input.value;
    
    if(task && task.length > 3){
        taskAdd(task, false)
    }
    
});

input.addEventListener('keyup', event => {
    if(event.key == 'Enter'){
        const task = input.value;

        if(task && task.length > 3){
            taskAdd(task, false)
        }
    }
});

function taskRealized(element){
    /*element.classList.toggle(check)
    element.classList.toggle(uncheck)
*/
    //console.log(element.parentNode);
}


