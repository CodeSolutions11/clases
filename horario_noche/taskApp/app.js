const date = document.querySelector('.date')
const list = document.querySelector('.list')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const name = document.querySelector('.name')
const btnHistory = document.querySelector('.history')
const check = 'fa-check-circle';
const uncheck = 'fa-circle';
const task_realized = 'task_realized';

let task_list;
let id;

// Ir a la pagina de historial
btnHistory.addEventListener('click', ()=>{
    window.location.href = 'history_app/history.html'
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
function taskAdd(id, taskContent, taskComplete, taskRemoved){

    if(taskRemoved){
        return
    }


    console.log(taskComplete);
    const realized = taskComplete ? check : uncheck
    const task_realized = taskComplete ? 'task_realized' : "li"

    const taskHtml = `
        <li class="${task_realized}">
            <p class="text">${taskContent}</p>
            <div class="icons">
                <i class="far ${realized}" data="realized" id="${id}"></i>                    
                <i class="fa-solid fa-trash" data="removed" id="${id}"></i>
            </div>
        </li>
    `;

    list.insertAdjacentHTML('beforeend', taskHtml)
}

// Evento del click para el icono de agregar tarea
btn.addEventListener('click', () => {

    const actualDate = DATE.toLocaleDateString('es-VE', {
        month: 'long',
        day: 'numeric'
    })

    taskContent = input.value;
    if(taskContent && taskContent.length > 3 ){
        
        taskAdd(id, taskContent, false, false)
        
        task_list.push(
            {
                id: id,
                taskValue: taskContent,
                taskComplete: false,
                taskRemoved: false,
                date: actualDate
            }
        )

    }

    localStorage.setItem('task_list', JSON.stringify(task_list))
    input.value = ''
    id++
})

// Evento keyup para el imput de agregar tarea
input.addEventListener('keyup', (event) => {

    const actualDate = DATE.toLocaleDateString('es-VE', {
        month: 'long',
        day: 'numeric'
    })
    taskContent = input.value;

    if(event.key === 'Enter'){

        if(taskContent && taskContent.length > 3 ){
            taskAdd(id, taskContent, false, false)

            task_list.push(
                {
                    id: id,
                    taskValue: taskContent,
                    taskComplete: false,
                    taskRemoved: false,
                    date: actualDate
                }
            )
        }
        localStorage.setItem('task_list', JSON.stringify(task_list))
        id++
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

    console.log(task_list[element.id].taskComplete);

    task_list[element.id].taskComplete = task_list[element.id].taskComplete ? false : true

    console.log(task_list);
}

function taskRemoved(element){
    const li = element.parentNode.parentNode;

    task_list[element.id].taskRemoved = true
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
    localStorage.setItem('task_list', JSON.stringify(task_list))

})


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
        taskAdd(e.id, e.taskValue, e.taskComplete, e.taskRemoved)
    });
}