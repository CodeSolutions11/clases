export class EventManager{
    constructor(element, name) {
        element.addEventListener('click', ()=>{
            this.sendMessage(name)
        });
    }
    sendMessage(name){
        alert(`saludos para ${name}`);
    }
}