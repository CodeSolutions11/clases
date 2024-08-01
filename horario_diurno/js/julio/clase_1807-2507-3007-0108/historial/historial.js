
const date = document.querySelector('.date');
const list = document.querySelector('.list');
const btnAddTask = document.querySelector('.btnAddTask');
const input = document.querySelector('.input');
const name = document.querySelector('.name');


let id;
let list_task;

// Crear e insertar fecha
const DATE = new Date();
date.textContent = DATE.toLocaleDateString('es-VE', {
    weekday: 'long',
    month:'long',
    day:"numeric"
});

let userName = localStorage.getItem('taskAppUser');

name.textContent = `¡Hola ${userName}, feliz ${DATE.toLocaleDateString('es-VE', {
    weekday: 'long',
})}!`


// Agregar tareas

const taskAdd = (id, task, taskComplete, actualDate)=>{

    if(taskComplete){
        
        const codeTask = `
            <li class="codeTask">
                <p class="text line-through">${task}. ${actualDate}</p>
            </li>
        `;
    
        list.insertAdjacentHTML('beforeend', codeTask);
    }


}


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
    invData = data.sort((a,b) => {
        return b.id - a.id
    })

    data.forEach(task => {
        taskAdd(task.id, task.taskValue, task.realized, task.actualDate)
    });
}
