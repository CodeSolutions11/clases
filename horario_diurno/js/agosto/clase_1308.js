const registerUser = document.querySelector('.registerUser')
const registerPassword = document.querySelector('.registerPassword')
const btnRegister = document.querySelector('.register')

const inputUser = document.querySelector('.userName')
const inputPassword = document.querySelector('.password')
const btnLogin = document.querySelector('.login')

const p = document.querySelector('p')

const tbody = document.querySelector('tbody')


let users = []
let table

const bdUsers = JSON.parse(localStorage.getItem('bdUsers'))

if(bdUsers){
    bdUsers.forEach(e=>{
        table = `
            <tr>
                <td>${e.name}</td>
                <td>${e.password}</td>
            </tr>
        `
        tbody.insertAdjacentHTML('beforeend', table)
    
    })
    
}else{
    let users =[]
}

function createUser(){
    users.push({
        name: registerUser.value,
        password: registerPassword.value
    })
    console.log(users);

    localStorage.setItem('bdUsers', JSON.stringify(users))

    window.location.href = '/html/agosto/clase_1308.html'
}

btnRegister.addEventListener('click', ()=>{
    createUser()
})



function validarDatos(datos) {
    return datos.name === inputUser.value;
}

btnLogin.addEventListener('click', ()=>{

    const user = users.find(validarDatos)

    if(user){
        if(user.password == inputPassword.value){
            p.textContent = `Bienvenido ${user.name}!!`
            console.log(user);
        }else{
            console.log('password invalid');
        }
    }else{
        console.log('User no found');
    }
})




