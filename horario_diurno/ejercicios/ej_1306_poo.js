/*
Crea una clase Ficha, con su constructor, que se usará para almacenar el número de kilómetros recorridos por una persona en cada sesión de ejercicios. Las propiedades de la clase serán

nombre
sesiones
numsesiones

El nombre es el de la persona, en los sesiones se almacenará el número de kilometros recorridos en cada sesión y numsesiones contiene el número de sesiones anotadas.

Tiene dos métodos:

anotar: anota los kilómetros
media: calcula la media de kilómetros recorridos
*/

class Ficha{
    constructor(nombre){
        this.nombre = nombre;
        this.sesiones = [];
        this.numsesiones = 0;
    }
    anotar(km) {
        this.sesiones[this.numsesiones] = km;
        this.numsesiones++;  
    }
    media(){
        let media = 0;

        for(let i=0; i < this.sesiones.length; i++){
            media += this.sesiones[i];
        }
        return media/this.numsesiones;
    }
}

const fichaJesus = new Ficha("Jesus");
const fichaEwil = new Ficha("Ewil");
const fichaMercedes = new Ficha("Mercedes");

fichaJesus.anotar(10);
fichaJesus.anotar(9);
fichaJesus.anotar(5);

document.write(`${fichaJesus.nombre} ha recorrido una media  de ${fichaJesus.media()} km <br>`)

fichaEwil.anotar(12);
fichaEwil.anotar(10);
fichaEwil.anotar(7);
fichaEwil.anotar(4);

document.write(`${fichaEwil.nombre} ha recorrido una media  de ${fichaEwil.media()} km <br>`)

fichaMercedes.anotar(15);
fichaMercedes.anotar(14);
fichaMercedes.anotar(11);
fichaMercedes.anotar(7);
fichaMercedes.anotar(4);

document.write(`${fichaMercedes.nombre} ha recorrido una media  de ${fichaMercedes.media()} km`)