// 1. Imprimir los nros del 1 al 100 con un bucle for


// for(let i = 1; i <= 100; i++){
//     document.write(`${i} : `);
// }

// Bucle while

// let i = 1;
// while(i <= 100){
//     document.write(`${i} : `);
//     i++;
// }

// bucle Do While

// let j = 0;
// do{
//     document.write(`${j} : `)
//     j++;
// }
// while(j > 100)

// 2. Pedir al usuario que teclee un nro entre 1 y 5, si escribe alguno que esté fuera de ese rango deberá volver a pedir el nro


// let min = 1, max = 5, numero = parseInt(prompt("Por favor teclee un nro entre 1 y 5"));

// while(numero < min || numero  > max){

//     numero = parseInt(prompt("Error, teclee un nro entre 1 y 5"));

// }

// document.write(numero);


// 3.Preguntar al usuario si desea continuar con el programa. Si el usuario teclea n, el programa finaliza. cualquier otro valor repetirá la pregunta

// let respuesta;

// while (respuesta != 'n' && respuesta != '1'){  
//    respuesta = prompt("¿Desea seguir con el programa?");

// }

// alert("programa finalizado");


// 4. Pedir al user una contraseña. Si la contraseña coincide con la clave definida por el sistema retornaremos el msj "Acceso concedido" y si no coincide devolverá "Acceso denegado". Si el user falla 3 veces retornaremos el msg "Alertaaaaaa Intruso".
//recomendaciones: usar while y usar if/else