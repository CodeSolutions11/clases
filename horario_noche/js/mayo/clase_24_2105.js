// Operadores de comparacion
    //  ==, !=, >, >=, <, <=, ===, !==
    // el valor de retorno es un boolean, true o false
// let a = 9 == 3; operador de igualdad
// let a = 8 != 9; Operador de desigualdad
// let a = 18 > 10; operador mayor que 
// let a = 11 >= 18; mayor/igual que
// let a = 17 < 9; menor que
// let a = 40 <= 40; menor/igual que
// let a = 8 === "8"; operador de identidad
// let a = 9 !== "9"; operador no identico

// let n1 = 10; 
// let n2 = 14;

// let userAdmin = "Jesus";

// let user = prompt("Ingresar nombre de usuario");

// if( userAdmin === user ){
    
//     document.write(`<h1 style="color: #0f0"> Perfil del administrador</h1>`);

// }else{
    
//     document.write(`<h1 style="color: #f00">usuario invalido</h1>`);

// }

// let useredad = prompt("Ingresar sus edad");

// if(useredad >= 18){
//     document.write(`<h1 style="color : #0f0"> Eres un adulto</h1>`)

// }else if( 14 < useredad < 18){
//     document.write(`<h1 style="color : #f00"> eres un adolescente </h1>`)

// }else{
    
//     document.write(`<h1 style="color : #f00"> eres un niño</h1>`)
   
// } 


// Operadores Logicos
    // &&, ||, ??, !a, a ? b : c

// let result = 8>7 && 1<3; AND
// let result = true || false; OR
// let a = null;
// let b = 10;
// let result = a ?? b; Nullish coalescing
// let email = prompt("dime un nombre");
// let emailSecurity = "Jesus@gmail.com";

// let result = email ?? emailSecurity;


// result = !(8>15); NOT


// if( 8 < 150 ){
//     document.write(" Se cumple la condicion");
// }else{
//     document.write(" No se cumple la condicion");
// }

const result = 800 < 150 ? "Se cumple la condicion" : "no se cumple la condicion";

document.write(result)