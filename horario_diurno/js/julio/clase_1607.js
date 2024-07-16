/*
const btn = document.querySelector('button');

const saludo = name => alert(`Saludos ${name}!!`);
//const changeColor = () => btn.className = 'colorBtn';
const changeColor = () => btn.classList.toggle('colorBtn');
console.log(btn);

btn.addEventListener('click', ()=>{saludo('Ewil')});
btn.addEventListener('click', changeColor);
*/

/*
class EventManager{
    constructor(btn, title, name, color) {
    	//this.element = element;
    	/*
        element.addEventListener('click', ()=>{
            //this.sendMessage(name)
            this.changeColor(element);

        });
        
        btn.addEventListener('click', ()=>{this.sendMessage(title, name)});
        btn.addEventListener('click', this.changeColor(btn, color));
    }
    sendMessage(title, name){
       return title.textContent = `Saludos ${name}`;

    }

    changeColor(btn, color){
    	const result = () => {btn.classList.toggle(color)};
    	console.log(result);
    	return result;
    }
}

const btn = document.querySelector('button');
const title = document.querySelector('h1');

const event1 =  new EventManager(btn, title, 'Ewil', 'red');

*/
const btn = document.querySelector('button');

//objeto pointerEvent
/*
btn.addEventListener('click', (event) => {

	if(event.altKey === true){
		btn.classList.toggle('red');

	}else {
		btn.classList.toggle('blue');
	}

	console.log(event);
});
*/
/*
btn.addEventListener('click', (event) =>{
	const { type, timeStamp, altKey} = event;
	console.log({ type, timeStamp, altKey});
})
*/


//objeto keyboardEvent

document.addEventListener('keydown', (event) => {
	console.log(event);
	console.log(`has pulsado la tecla ${event.key} codigo: ${event.code}`)

})