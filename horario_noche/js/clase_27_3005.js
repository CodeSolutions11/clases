


// let name = "Carlos";

// document.write(name.length)

// bucles

// for

// for(let i = 0; i < 1000; i = i + 2){
//     document.write(i + " - ")
// }


// let text = prompt("ingresar nombre");

// console.log(`${text}`);

// console.log(text.length)

// for(let i = 0; i < text.length ; i++){
//     document.write(`letra: ${text[i]} posicion ${i} <br>`)
// }

// console.log(`<h1> ${text} </h1>`);

// for(let i = 0; i <= 20; i++){
//     // document.write(i + " - ")
    
//     if(i%2 == 0){
//         document.write(`<b style="color:#0f0"> ${i}</b>`)
//     }else{
//         document.write(`<b style="color:#f00"> ${i}</b>`)
//     }
// }

// Quiero un programa que calcule la suma de todos los nros enteros y positivos entre 0 y un nro tecleado por un usuario

//el resultado sera de la siguiente forma=> "Los nros enteros de 0 a xNumero suman xResultado"

let userNumber, suma, i;

userNumber = parseInt(prompt("Ingresar Nro"));

suma = 0;

for(i=0; i <= userNumber; i++){

    // suma+=i;
    suma = suma + i;
    document.write(i + "+")
}

document.write(`<br>Los nros enteros de 0 a ${userNumber} suman: ${suma}`);