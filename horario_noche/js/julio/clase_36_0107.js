/*

Crea una clase que llamaremos Bus.
 Sus atributos serán:

capacidad: número máximo de pasajeros
pasajeros: número de pasajeros (inicialmente 0)
conductor: objeto conductor.

Sus métodos:

subir(pasajeros): aumenta el numero de pasajeros
bajar(pasajaeros): disminuye el número de pasajeros

conductor: asigna un objeto conductor.
El ojeto conductor es de una clase (Conductor) cuyos atributos son:

nombre: nombre del conductor
licencia: un número que identifica al condcutor.

Al crear el objeto se asigna también el conductor

No pueden subir más pasajeros que los máximos admitidos y no pueden bajar más de los que hay.*/

class Bus{
    constructor(capacidad, conductor){
        this.capacidad = capacidad;
        this.pasajeros = 0;
        this.conductor = conductor;
        
    }

    subir(numPasajeros){
        let comprobarPasajeros = numPasajeros + this.pasajeros;

        let comprobarEspacios = this.capacidad - this.pasajeros;

        if( comprobarPasajeros <= this.capacidad){
            // this.pasajeros = this.pasajeros + numPasajeros;
            this.pasajeros += numPasajeros; 

        }else if(comprobarEspacios <= this.capacidad){
            this.pasajeros += comprobarEspacios;
            alert(`Solo pudieron subir ${comprobarEspacios} pasajeros de los ${numPasajeros} que estaban!`)
        }
    }

    bajar(numPasajeros){

        if(numPasajeros <=  this.pasajeros){
            // this.pasajeros = this.pasajeros -= numPasajeros;
            this.pasajeros -= numPasajeros;   
        }else{
            this.pasajeros = 0;
        }
    }
}

class Conductor{
    constructor(nombre, licencia){
        this.nombre = nombre;
        this.licencia = licencia;
    }
}

const conductor1 = new Conductor('Carlos', 123456);
const bus1 = new Bus(40, conductor1);


bus1.subir(57);
document.write(bus1.pasajeros + '<br>' );


bus1.bajar(45);
document.write(bus1.pasajeros + '<br>' );
