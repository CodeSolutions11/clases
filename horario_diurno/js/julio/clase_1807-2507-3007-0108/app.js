
const date = document.querySelector('.date');
const list = document.querySelector('.list');
const btnAddTask = document.querySelector('.btnAddTask');
const input = document.querySelector('.input');

const check = 'fa-check-circle';
const uncheck = 'fa-circle'
const lineThrough  = 'line-through';

let id;
let list_task;

// Crear e insertar fecha
const DATE = new Date();
date.textContent = DATE.toLocaleDateString('es-VE', {
    weekday: 'long',
    month:'long',
    day:"numeric"
});


/* insert y obtener datos en el localStorage
const name = document.querySelector('.name');

localStorage.setItem('taskApp', JSON.stringify({
    id: 1,
    name: 'Jesus Adrian',
    email: 'jesus@gmail.com'
}))


let data = localStorage.getItem('taskApp')
data = JSON.parse(data)
console.log(data.name);
console.log(localStorage);

*/
// Pedir Nombre
let userName = localStorage.getItem('taskAppUser');
const name = document.querySelector('.name');

if(userName && userName != 'null' && userName != null){
    name.textContent = `¡Hola ${userName}, feliz ${DATE.toLocaleDateString('es-VE', {
        weekday: 'long',
    })}!`
}else{
    let newName = prompt("Ingresar Nombre");

    name.textContent = `¡Hola ${userName}, feliz ${DATE.toLocaleDateString('es-VE', {
        weekday: 'long',
    })}!`;
    localStorage.setItem('taskAppUser', newName)
}


// Agregar tareas

const taskAdd = (id, task, taskComplete, taskRemoved)=>{

    if(taskRemoved){
        return
    }

    const realizado = taskComplete ? uncheck : check;
    const line = taskComplete ? lineThrough : '';

    const codeTask = `
        <li class="codeTask">
            <i class="far ${realizado}" data="realized" id="${id}"></i>
            <p class="text ${line}">${task}</p>
            <i class="fa-solid fa-trash" data="removed" id="${id}"></i>
        </li>
    `;

    //list.insertAdjacentElement('beforeend', element);
    // list.appendChild(element)

    list.insertAdjacentHTML('beforeend', codeTask);

}


btnAddTask.addEventListener('click', (event) => {
    
    const actualDate = DATE.toLocaleDateString('es-VE', {
        month:'long',
        day:"numeric"
    });

    const task = input.value;
    
    if(task && task.length > 3){
        taskAdd(id, task, false, false)

        list_task.push({
            id: id,
            taskValue: task,
            realized: false,
            removed: false,
            actualDate: actualDate
        })

    }
    localStorage.setItem('list_task', JSON.stringify(list_task));
    input.value = ''
    id++;
});

input.addEventListener('keyup', event => {

    const actualDate = DATE.toLocaleDateString('es-VE', {
        month:'long',
        day:"numeric"
    });

    if(event.key == 'Enter'){
        const task = input.value;

        if(task && task.length > 3){
            taskAdd(id, task, false, false)

            list_task.push({
                id: id,
                taskValue: task,
                realized: false,
                removed: false,
                actualDate: actualDate

            })
        }

        localStorage.setItem('list_task', JSON.stringify(list_task));
        input.value = ''
        id++;
    }

});

function taskRealized(element){

    //elementClass = element.classList.value;

    element.classList.toggle(check)
    element.classList.toggle(uncheck)
    element.parentNode.querySelector('.text').classList.toggle(lineThrough)



    console.log(list_task[element.id]);
    
    list_task[element.id].realized = list_task[element.id].realized ? false : true;
    

}


const taskRemoved = element => {

    element.parentNode.parentNode.removeChild(element.parentNode);

    list_task[element.id].removed = true
    console.log(list_task[element.id].removed)
}


list.addEventListener('click', event => {

    
    const element = event.target;
    const elementData = element.attributes.data.value

    console.log(element.attributes.data.value);

    if(elementData == 'realized'){
        taskRealized(element);
    }else if(elementData == 'removed'){
        taskRemoved(element);
    }

    localStorage.setItem('list_task', JSON.stringify(list_task))

})

const data = localStorage.getItem('list_task');

if(data){
    list_task = JSON.parse(data);
    id = list_task.length
    loadTaskList(list_task)
}else{
    list_task = []
    id = 0
}

function loadTaskList(data){
    data.forEach(task => {
        taskAdd(task.id, task.taskValue, task.realized, task.removed)
    });
}
