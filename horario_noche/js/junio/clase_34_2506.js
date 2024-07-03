/*
    Personaje:
        - Name (Propiedades)
        - vidas restantes (Propiedades)
        - Fuerza (Propiedades)
        - Energía (Propiedades)

        - Hablar (Métodos)
        - Disparar (Métodos)
        - Curar (Métodos)
*/
/*

class Animal {}; // Ejemplo de instanciar una clase

const elefante = new Animal(); // Ejemplo de instanciar un objeto basado en una clase

console.log(Animal);
console.log(elefante);
*/
/*
class Animal{
    // Propiedades
    name = "firulais";
    type = "dog";

    //Método
    ladrar(){
        return "ladrar";
    }
}

const perro = new Animal();

console.log(perro);
console.log(perro.type);
document.write(perro.ladrar());
*/

/*

class Personaje {
    constructor(name, type, lifes){
        this.name = name;
        this.type = type;
        this.lifes = lifes;

        this.info = `
            Name: <b>${this.name}</b> <br>
            Type: <b>${this.type}</b> <br>
            Lifes: <b>${this.lifes}</b> <br>
        `;
    }

};

const thor = new Personaje("Thor", "Dios", 3);
const potter = new Personaje("Harry", "Mago", 10);



document.write(thor.info);
document.write("<hr>")
document.write(potter.info)

console.log(thor.name)
*/
/*
1. Crear una clase ficha, con su constructor que se usará para almacenar el nro de kilometros recorridos por una persona en cada sesión de ejercicios

    propiedades:

    - nombre (nombre de la persona)
    - sesiones (Se almacenará el nro de km recorridos en cada sesión)
    - numSesiones (Nro de sesiones anotadas)

    Métodos

    - anotar (anota los km)
    - media (calcular la media de los km recorridos)
*/
/*
class Ficha {
    constructor(nombre){
        this.nombre = nombre;
        this.sesiones = [];
        this.numSesiones = 0;
    }

    anotar(km) {
        this.sesiones[this.numSesiones] = km;
        this.numSesiones++;
        alert(`Sesion de ${km}km anotada correctamente`);
    }
    media(){
        let totalKm = 0;
        let media;

        for(let i = 0; i < this.sesiones.length; i++){
            // totalKm = totalKm + this.sesiones[i];
            totalKm += this.sesiones[i];
        }
        media = totalKm / this.numSesiones;
        document.write(`<h2>
            
            La media recorrida por ${this.nombre} es de: ${media}km diarios</h2>
        `);
    }
}

const fichaPatty = new Ficha("Patty");

console.log(fichaPatty);

fichaPatty.anotar(12);
fichaPatty.anotar(8);
fichaPatty.anotar(7);

fichaPatty.media();
*/


class Ficha {
    constructor(nombre) {
      this.nombre = nombre;
      this.sesiones = [];
      this.NumSes = 0;
    }
  
    anotar(km) {
      this.sesiones.push(km);
      this.NumSes++;
    }
  
    media() {
      let suma = 0;
      for (let km of this.sesiones) {
        suma += km;
      }
      return suma / this.NumSes;
    }
}


const ficha = new Ficha("Juan");
ficha.anotar(7);
ficha.anotar(9);
ficha.anotar(5);
console.log(ficha.media()); 
