class Bus{
    constructor(conductor, capacidad){
        this.capacidad = capacidad;
        this.pasajeros = 0;
        this.conductor = conductor;
    }

    subir(numPasajeros){
        if((this.pasajeros + numPasajeros) < this.capacidad){
            this.pasajeros += numPasajeros;
        }else{
            this.result = this.capacidad - this.pasajeros;

            alert(`Solo pudieron subir ${this.result} pasajeros en esta parada`);

            this.pasajeros = this.capacidad;
        }
    }

    bajar(numPasajeros){
        if(numPasajeros <= this.pasajeros){
            this.pasajeros -= numPasajeros;
        }else{
            alert("El Bus ha quedado vacio");

            this.pasajeros = 0
        }
    }
}
class Conductor{
    constructor(nombre, licencia){
        this.nombre = nombre;
        this.licencia = licencia;
    }
}

const conductor1 = new Conductor("Ewil", 123456);
const linea1 = new Bus(conductor1, 40);
linea1.subir(30);
linea1.bajar(25);
linea1.subir(12);

document.write(`
    Nombre del Conductor: ${linea1.conductor.nombre}<br>
    Licencia del conductor: ${linea1.conductor.licencia}<br>
    Tiene un total de pasajeros: ${linea1.pasajeros}

`)

console.log(linea1.conductor)
