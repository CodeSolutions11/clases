
// Pedir al user una contraseña. Si la contraseña coincide con la clave definida por el sistema retornaremos el msj "Acceso concedido" y si no coincide devolverá "Acceso denegado". Si el user falla 3 veces retornaremos el msg "Alertaaaaaa Intruso".
// recomendaciones: usar while y usar if/else

// let userPasswd;
// let systemPasswd = '123abc';
// let msgPass = "Dashboard", msgError = "Acceso denegado";
// let int = 0;

// while( userPasswd !== systemPasswd && int < 3){
//     userPasswd = prompt("Ingresar Clave de Admin");

//     if(userPasswd ===  systemPasswd){
//         document.write(msgPass);
//     }else{
//         alert(msgError);
//         int++;
//     }
// }

// if(int == 3){
//     alert("Alerta se ha detectado un Intruso");
// }



// let nro = parseInt(prompt('Ingresar nro'));


// if(nro % 2 == 0){

//     document.write(`El nro ${nro} es un nro par`);

// }else{
//     document.write(`El nro ${nro} es un nro impar`);
// }

// const resp = nro % 2 == 0 ? `El nro ${nro} es un nro par` : `El nro ${nro} es un nro impar`;



// document.write(nro % 2 == 0 ? `El nro ${nro} es un nro par` : `El nro ${nro} es un nro impar`);


// let clave = "Takataka"; // clave definida por el sistema
// let intentos = 0;
// let maxIntentos = 3;

// while (intentos < maxIntentos) {
//   let contraseña = prompt("Ingrese la contraseña:");
//   if (contraseña === clave) {
//     alert("Acceso concedido");
//     break;
//   } else {
//     intentos++;
//     alert("Acceso denegado. Intentos restantes: " + (maxIntentos - intentos));
//   }
// }

// if (intentos === maxIntentos) {
//   alert("Alerta: un intruso");
// }


// let syspass = 'wikiwiki';
// let cont = 0;

// while (cont < 3) {
//   let userpassword = prompt("Ingresar Clave");

//   cont += (userpassword === syspass) ? 0 : 1;

//   alert((userpassword === syspass) ? "Bienvenido" : "Acceso Denegado");
// }

// if (cont === 3) {
//   alert("INTRUSO");
// }

// const frutas = ["Manzana", "Pera", "Patilla", "Melón"];

// const frutas = [];

// frutas[0] = "Pera";
// frutas[1] = "Manzana";

// document.write(frutas);

// document.write(`<h1>Lista de compras de frutas</h1>`)
// document.write(frutas[0] + "<br>");
// document.write(frutas[1] + "<br>");
// document.write(frutas[2] + "<br>");
// document.write(frutas[3]);


const frutas = [];
let resp;
let i = 0;


while(resp  !== "no" && resp  !== "No" && resp  !== "NO"){

    frutas[i] = prompt("Ingresar fruta comprada");
    resp = prompt("Compraste mas frutas? Si o No?")
    i++;
    
}

document.write(`<h1>Lista de compras de frutas</h1>`)

for(let j = 0; j < frutas.length; j++){
    document.write(`<li>${frutas[j]}</li>`)
}