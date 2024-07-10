//import { name, nroFav, verdadero } from "./../../modules/Variables.js";
// import {name as  nombre, nroFav} from "./../../modules/Variables.js";

import {name, nroFav} from "./../../modules/Variables.js";
import {names, nros} from "./../../modules/Arrays.js";
import {sumarNros, multiplicarNros} from "./../../modules/Funciones.js";
import {person, car} from "./../../modules/Objetos.js";
import {Saludar, Piedra} from "./../../modules/Clases.js";


// impottando variables
console.log(nroFav);
console.log(name);


// importando arrays
console.log(names);
console.log(nros);
names.forEach( e => console.log(e));

// Importando funciones
sumarNros(4, 8);
multiplicarNros(5, 9);

// Importando objetos
console.log(person);
console.log(car);
console.log(person.name);
console.log(car.marca);

// Importando Clases
const saludo1 = new Saludar('Carolina');
console.log(saludo1);
//saludo1.saludo();


/*
Ejercicio:
    Crear una clase de nombre piedra  
        propiedades:
            - masa
            - volumen
        metodo:
            - densidad: cacular el valor(masa/volumen)
    Instanciar almenos un objeto de esta clase dandole un valor a su masa y a su volumen y ejecutar el metodo densiadad
*/

const esmralda = new Piedra(180, 12);
esmralda.densidad();