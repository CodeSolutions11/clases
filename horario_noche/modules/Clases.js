class Saludar{
    
    constructor(name){
        this.name = name
    }

    saludo(){
        alert(`Hola ${this.name}`)
    }
}

class Piedra{
    constructor(masa, volumen){
        this.m = masa;
        this.v = volumen;
    }

    densidad = function(){
        let result = this.m / this.v;
        console.log(`
            <div>su masa es de: <b>${this.m} grs</b></div>
            <div>su volumen es de: <b>${this.v} cc</b></div>
            <div>su densidad es de: <b>${result}</b></div>
        `);
    }
}

export{
    Saludar,
    Piedra
}