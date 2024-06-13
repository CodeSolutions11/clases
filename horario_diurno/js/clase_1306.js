

/*
class Math{
    constructor(n1, n2){
        this.n1 = n1
        this.n2 = n2
    }

    suma() {
        return this.n1 + this.n2
    }

    resta() {
        return this.n1 - this.n2
    }

    multiplicar() {
        return this.n1 * this.n2
    }

    dividir() {
        return this.n1 / this.n2
    }
}

const operacion = new Math(15, 6)

document.write(operacion.suma() + "<br>")
document.write(operacion.resta()+ "<br>")
document.write(operacion.multiplicar()+ "<br>")
document.write(operacion.dividir())
*/


class Animal{
    constructor(name){
        this.speed = 0;
        this.name = name;
    }
    
    run(speed){
        this.speed = speed;
        document.write(`${this.name} corre a una velocidad de ${this.speed}km/h <br>`)
    }
}

class Perro extends Animal{
    constructor(name){
        super(name);
    }
}

class felino extends Animal{
   constructor(name){
    super(name);
   } 
}

const firulai = new Perro("Perro");
const leon = new felino("Leon");

firulai.run(30);
leon.run(60);