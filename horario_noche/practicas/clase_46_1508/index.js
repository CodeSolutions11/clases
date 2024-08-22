// Elementos de la section-1
const name = document.querySelector('.name')
const email = document.querySelector('.email')
const phone = document.querySelector('.phone')
const btn = document.querySelector('.btn')
const body = document.querySelector('body')
// Elementos de la section-2
const tbody = document.querySelector('tbody')

// Elementos de la section-3
const input_find = document.querySelector('.section-3__email')
const btn_find = document.querySelector('.section-3__btn')

// Elementos de la section-4
const ul = document.querySelector('ul')


let customer_list
let customer_id


const data = JSON.parse(localStorage.getItem('customer_list'))


if(data){
    customer_list = data
    customer_id = data.lenght
}else{
    customer_list = []
    customer_id=1
}

btn.addEventListener('click', ()=>{

    const customer = {
        customer_id: customer_id,
        name: name.value,
        email: email.value,
        phone: phone.value
    }

    customer_list.push(customer)


    localStorage.setItem('customer_list', JSON.stringify(customer_list))

    name.value=''
    email.value=''
    phone.value=''

    customer_id++

    body.insertAdjacentHTML('afterbegin', `
        <div class="registrado">
        <h3>Usuario Registrado!!!</h3>
        <i class="fa-solid fa-delete-left delete"></i>
    </div>`)

    const registrado = document.querySelector('.registrado')
    const iconDelete = document.querySelector('.delete')

    iconDelete.addEventListener("click", ()=>{
        registrado.style.display = "none"
    })
})

customer_list.forEach(customer => {
    tbody.insertAdjacentHTML('beforeend', `
        <tr>
            <td>${customer.name}</td> 
            <td>${customer.email}</td> 
            <td>${customer.phone}</td> 
        </tr>
    `)
});




btn_find.addEventListener('click', ()=>{

    customer_list.forEach(customer => {
        if(customer.email === input_find.value){
            mostrarDatos(customer)
        }
    })

})

function mostrarDatos(customer){
    datos = `
        <li>Id: ${customer.customer_id}</li>
        <li>Nombre: ${customer.name}</li>
        <li>Email: ${customer.email}</li>
        <li>Télefono: ${customer.phone}</li>
    `

    ul.innerHTML = datos
}



