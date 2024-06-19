

// Ordenación alfabética de Arrays

// Método .sort()
/*
const names = ["Johalys", "Samuel", "Carlos", "Jesus"];

for(name of names ){
    document.write(name + " ")
}

document.write("<hr>")

const sortNames = names.sort();

for(name of sortNames ){
    document.write(`${name} `)
}

document.write("<hr>")

for(name of names ){
    document.write(name + " ")
}
*/
/*
const names = ["Johalys", "Samuel", "Carlos", "Jesus"];

for(name of names ){
    document.write(name + " ")
}

// const sortNames = structuredClone(names).sort();

const sortNames = names.toSorted();

document.write("<hr>")

for(name of sortNames ){
    document.write(`${name} `)
}

document.write("<hr>")

for(name of names ){
    document.write(name + " ")
}
*/

/*
const numbers = [11, 9, 14, 7, 4, 22];

// const sortedNumbers = numbers.toSorted(); Esto Ordena los nros alfabeticamente 

const orderNumbers = (a, b) => a - b;
const sortedNumbers = numbers.toSorted(orderNumbers); Esto ordena los numeros de forma natural

document.write(sortedNumbers)
*/


// ¿¿¿¿¿¿¿¿¿¿¿¿¿ Array Functions ??????????????????

// 1. ForEach: Es una funcion que me permite recorrer un array
/*
const names = ["Johalys", "Samuel", "Carlos", "Jesus"];

names.forEach(e => document.write(e + "<br>"));

document.write("<hr>");

for(name of names){
    document.write(name + "<br>")
}

document.write("<hr>");

for(posName in names){
    document.write(names[posName] + "<br>")
}

document.write("<hr>");

for(let i = 0; i < names.length; i++){
    document.write(names[i] + "<br>")
}
*/
/*
const ciudades = ["Caracas", "Valencia", "Maracay", "San Carlos"];

// 1. forEach con Funcion flecha
ciudades.forEach( 
    city => document.write( `<b>${city}</b> <br>`)
)

document.write("<hr>");

// 2. forEach con Funcion anonima
ciudades.forEach( 
    function(city) { 
        document.write( `<strong>${city}</strong> <br>`)
    }
)

document.write("<hr>");

// 3.  forEach con Funcion por expresion

const f = function (city) {
    document.write( `<span>${city}</span> <br>`)
};
ciudades.forEach(f);

*/

/* Utilizando el forEach con dos parametros
const ciudades = ["Caracas", "Valencia", "Maracay", "San Carlos"];

ciudades.forEach( 
    (city, index) => document.write( `<b>Posicion: ${index} - Valor: ${city}</b> <br>`)
)
*/


// 2. every(function) : Comprueba si todos los elementos del array cumplen la condicion de function y me devuelve un boolean (true o false)
/*
Primer Ejemplo de como utilizar every()
const ciudades = ["Caracas", "Caracas", "Caracas", "Caracas"];

const city = ciudades.every(e => e === "Caracas");

document.write(city);
*/

/* Segundo Ejemplo de como utilizar every()

const letters = ['ab', 'g', 'hb', 'jb'];

const comprobarLetters = letters.every(
    element => element.length === 2
)

document.write(comprobarLetters)
*/

// 3. some(function) : Comprueba si almenos uno de los elementos del array cumplen la condicion de function y me devuelve un boolean (true o false)
/*
const letters = ['ab', 'gegf', 'hb', 'jb'];

const comprobarLetters = letters.some(
    letter => letter === "abc"
)
document.write(comprobarLetters)
*/

// 4. map :es unes un método potente para trabajar con arrays. Su objetivo es devolver un nuevo array donde cada uno de los elementos será lo que devuelva la funcion por cada elemento del array original

/*
const names = ["Johalys", "Samuel", "Carlos", "Jesus", "Maria"];

const nameSizes = names.map(
    element => element.length
)

document.write(nameSizes)
console.log(nameSizes)
*/

// 5. .filter()  :nos permite filtrar los elementos de un array y devolver un nuevo array con solo los elementos que queremos. Para lograrlo, utilizaremos una funcion para establecer una condicion que devuelve true solo en los elementos que nos interesen


const names = ["Johalys", "Samuel", "Carlos", "Jesus", "Maria", "Mariana", "cristobal"];

const filteredNames = names.filter(
    name => name.startsWith("C") || name.startsWith("c")
);

document.write(names + "<hr>")

document.write(filteredNames);
// console.log(filteredNames)