
let a = true;
let b = false;
let c;

// Operadores Comparación => true o false

// c = a == b; Operador de Igualdad ==
// c = a != b ; Operador de desigualdad  !=
// c = a > b; operador de mayor que >
// c = a < b; Operador de menor que <
// c = a >= b; Operador de mayor o igual que >=
// c = a <= b; Operador de menor o igua que <=
// c = a === b; Operador de identidad ===
// c = a !== b; Operador no idéntico !==



// Operadores Lógicos

// c = a && b; Operador Lógico AND
// c = a || b; Operador Lógico OR
// c = a ?? b; Operador Lógico Nullish coalescing

// if(a == 5){
//     c = a
// }else{
//     c = b
// }

// Con Operador Ternario

// c = a == 5 ? a : b;

// const name = prompt("Ingresar Nombre");

// const job = name == "jesus" ? "Profesor" : "Alumno/a";


// c = !b Operador unario Lógico NOT 



// document.write(`<h1 style="color:red; margin:150px 300px">${c}</h1>`)


// Una función flecha que tome 3 números como entrada y retorne el número mayor, si son iguales me retorne un string "Son iguales"

// const numeroMayor = (n1, n2, n3) => {


//     if(n1 > n2 && n1 > n3 ){
//         return n1;
//     }else if(n2 > n3 && n2 > n1 ){
//         return n2
//     }else if(n3 > n1 && n3 > n2){
//         return n3
//     }else{
//         return "Son iguales";
//     }


// }

// const response = numeroMayor(15, 15, 15);

// document.write(`<h1 style="color:red; margin:150px 300px">${response}</h1>`)

let n1 = prompt("Ingresar numero 1");


n1 = Number.parseInt(n1)
let n2 = 20;
c = n1 === n2

console.log(typeof n1)
console.log(n1)

document.write(`<h1 style="color:red; margin:150px 150px">${n1} <br> ${c}</h1>`)