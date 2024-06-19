
// Ejemplo del operador ternario
// let n1 = 15;
// let n2 = 20;

// if(n1 < n2){
//     document.write("La condicion se cumple");
// }
// else{
//     document.write("La condicion no se cumple");
// }

// const jose = n1 > n2 ? "La condicion se cumple" : "La condicion no se cumple";

// document.write(jose)

// document.write(n1 < n2 ? "La condicion se cumple" : "La condicion no se cumple")

// Funciones

// 1. Funcion por declaracion

// function saludar(){
//     alert("Hola a todos!!!");
//     return "Hola de nuevo!";
// }

// function mostrarNombre(nombre){

//     document.write("Hola " + nombre + " Como estás??");
// }

// let nombre = prompt("ingresar Nombre");

// mostrarNombre(nombre);

// 2. Funcion por Expresion => guardamos la funcion en una variable
/*
const sumaNum = function(n1, n2){
    // document.write(n1 + n2);
    return n1 + n2;
}
*/
// sumaNum(17, 10);
/*
let n1 = parseInt(prompt("Ingresar numero 1"));
let n2 = parseInt(prompt("Ingresar numero 2"));

document.write(sumaNum(n1, n2));*/


// let a = parseInt("17");
// let b = parseInt("25");
// let result = a + b;
// document.write(result)



// 3. Funcion Flecha o arrow funcion

// const suma = (n1, n2) => {


//     return  (n1 ** 5 ) + (n2 ** 3);
// };

// let number1 = parseInt(prompt("ingres numero 1"));
// let number2 = parseInt(prompt("ingres numero 2"));


// document.write(suma(number1, number2));


// Ejercicio

// function cheq(edad) {
//     if (edad >= 18) {
//         return "Usted es apto para pasar";
//     } else {
//         return "Usted no es apto para pasar";
//     }
// }

// let name = prompt("Ingrese su nombre");
// let edad = parseInt(prompt("Ingrese su edad"));

// document.write(`Su nombre es ${name} y ${cheq(edad)}`);


// let edad = prompt("Por favor, ingrese su edad:");

      
//         edad = Number(edad);

//         if (edad >= 18) {
//             document.write("La persona tiene al menos 18 años y puede pasar.");
//         } else {
//             document.write("La persona es menor de 18 años y no puede pasar.");
//         }