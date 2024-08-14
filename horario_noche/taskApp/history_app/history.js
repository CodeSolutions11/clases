const date = document.querySelector('.date')
const list = document.querySelector('.list')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const name = document.querySelector('.name')
const btnApp = document.querySelector('.app')

let task_list;
let id;

// Ir a la pagina de historial
btnApp.addEventListener('click', ()=>{
    window.location.href = '../app.html'
})



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

name.textContent = `Hola ${userName}, feliz ${DATE.toLocaleDateString('es-VE', {
    weekday: 'long'
})}!!`



// Funcion para agregar la tarea del usuario
function taskAdd(id, taskContent, taskComplete, date){

    console.log(taskContent);
    
    if(taskComplete){

        const taskHtml = `
            <li class="task_realized">
                <p class="text">${taskContent}. ${date}</p>
            </li>
        `;
    
        list.insertAdjacentHTML('beforeend', taskHtml)
    }
}


const data = localStorage.getItem('task_list');

if(data){
    task_list = JSON.parse(data)
    id=task_list.length

    loadTaskList(task_list)

}else{
    task_list = []
    id = 0
}

function loadTaskList(task_list){
    task_list.forEach(e => {
        taskAdd(e.id, e.taskValue, e.taskComplete, e.date)
    });
}