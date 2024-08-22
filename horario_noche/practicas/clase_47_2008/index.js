const inputs = document.querySelectorAll('input')
const btnBuscar = document.querySelector('.btnBuscar')

btnBuscar.onclick = ()=> window.location.href = './cliente/cliente.html';



console.log(inputs);
let id

let data = JSON.parse(localStorage.getItem('clientes'))

if(data){
    id= data.length

}else{
    id = 0
    data = [] 
}


console.log(data);
inputs[2].addEventListener('keyup', (e)=>{
    if(e.key == "Enter"){
        console.log(e);
        data.push({
            id: id,
            Nombre: inputs[0].value,
            Ciudad: inputs[1].value,
            Correo: inputs[2].value,
        })
        console.log(data);
        localStorage.setItem('clientes', JSON.stringify(data))
        
        id++
    }
})

