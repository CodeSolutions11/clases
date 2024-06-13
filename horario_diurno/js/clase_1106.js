
// const title = document.getElementsByClassName("title");
// console.log(title);

// console.log(title[0]);


// title[0].innerHTML  = "Otro titulo x2"

// console.log(title[0].innerHTML)

// const materias = ["fisica", "programacion", "Matematicas"];

// const alumno = {
//     name: "Jesus",
//     fisica: 19,
//     matematicas: 20,
//     programacion: 18
// };

// let media  = (alumno.fisica + alumno.matematicas + alumno.programacion) / 3;

// document.write(`
//     El promedio de ${alumno.name} es: ${(alumno.fisica + alumno.matematicas + alumno.programacion) / 3}
// `)

// alumno.materias[0] = 19;

// for(let i = 0; i < 3; i++){

//     alumno.materias[i] = prompt("Ingresar Nota de " + materias[i]);

// }


// const materias = {
//     fisica: 20,
//     matematicas: 17,
//     programacion:15,
    
// }

// const names = ["Jesus", "Ewil", "Mercedes"];

// const [ name1, name2, name3 ] = names;

// const { fisica, programacion, matematicas, name = "jesus" }  = materias;

// document.write(name + "<br>" + matematicas + "<br>" + programacion);
// console.log(materias);

// document.write(Object.keys(materias) + "<br>");
// console.log(Object.keys(materias));

// document.write(Object.values(materias) + "<br>");
// console.log(Object.values(materias));

// document.write(Object.entries(materias) + "<br>");
// console.log(Object.entries(materias));


// const materias = {
//     fisica: 20,
//     matematicas: 17,
//     programacion:15,
    
// }

class Perro {
    constructor(raza, edad, color){
        this.raza = raza;
        this.edad = edad;
        this.color = color
    }
}


const phoenix = new Perro("dalmata", 5, "blanco");
const luffy = new Perro("pastor aleman", 3, "negro");
const firulai = new Perro("pitbull", 10, "marron");

console.log(phoenix)
console.log(luffy)
console.log(firulai)
