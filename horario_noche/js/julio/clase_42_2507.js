
const containerBox = document.querySelector('.containerBox');
const btn = document.querySelector('button');
const input = document.querySelector('input');

/*
function crearCaja(){

    const data = input.value;

    if(data.length >= 4 && data.length != 5 && data.length != 6 && data.length < 8){

        const div = document.createElement('div');

        div.style.background = input.value;

        containerBox.insertAdjacentElement('beforeend', div);

    }else{
        alert("El Color no es válido")
    }

}
*/
// Eventos del mouse

//btn.onclick = () => crearCaja();

//btn.addEventListener('click', () => crearCaja());
btn.addEventListener('click', () => {
    const data = input.value;

    if(data.length >= 4 && data.length != 5 && data.length != 6 && data.length < 8){

        const div = document.createElement('div');

        div.style.background = input.value;

        containerBox.insertAdjacentElement('beforeend', div);

    }else{
        alert("El Color no es válido")
    }
});


// Eventos del mouse
input.addEventListener('keyup', event =>{
    console.log(event.key)
    console.log(event.code)

    if(event.key == 'Enter'){
        const data = input.value;

        if(data.length >= 4 && data.length != 5 && data.length != 6 && data.length < 8){

        const div = document.createElement('div');

        div.style.background = input.value;

        containerBox.insertAdjacentElement('beforeend', div);

        }else{
            alert("El Color no es válido")
        }
    }
});