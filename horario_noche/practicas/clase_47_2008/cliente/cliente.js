const inputBuscar = document.querySelector('.inputBuscar')
const list = document.querySelector('.list')


let data = JSON.parse(localStorage.getItem('clientes'))

console.log(inputBuscar);

inputBuscar.addEventListener("keyup", event=>{
    if(event.key == 'Enter'){


        buscarCliente(inputBuscar.value)
    }
})

function buscarCliente(email){


    const dataCliente = data.find(element => element.Correo == email )

    const mostrarData = `
    <li>id: ${dataCliente.id}</li>
    <li>Nombre: ${dataCliente.Nombre}</li>
    <li>Ciudad: ${dataCliente.Ciudad}</li>
    <li>Correo: ${dataCliente.Correo}</li>
    
    `


    list.insertAdjacentHTML('beforeend', mostrarData)
}