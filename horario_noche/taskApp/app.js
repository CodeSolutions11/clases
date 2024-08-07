const date = document.querySelector('.date')
const list = document.querySelector('.list')

const btn = document.querySelector('.btn')
const input = document.querySelector('.input')


const DATE = new Date();

const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
};
  

date.textContent = DATE.toLocaleDateString('es-VE', options)
console.log(DATE);


function taskAdd(){

    const taskHtml = `
        <li class="li">
            <p>Tarea del usuario</p>
            <div class="icons">
                <i class="far fa-check-circle"></i>                    
                <i class="fa-solid fa-trash"></i>
            </div>
        </li>
    `;

    list.insertAdjacentHTML('beforeend', taskHtml)
}

btn.addEventListener('click', () => {
    taskAdd()
})

input.addEventListener('keyup', (event) => {
    if(event.key === 'Enter'){
        taskAdd()
    }
})