// Un programa que pida un numero y decir si es un numero negativo, positivo o cero

// let num = parseInt(prompt("Escribir un numero: "));

// console.log(num)
// // num = parseInt(num);

// if(num > 0){
//     document.write(`el ${num} Es un numero positivo`);
    
// }else if(num < 0){
//     document.write(`el ${num} Es un numero negativo`);

// }else{

//     document.write(` el ${num} Es cero`);
// }

// Strings

// Propiedad Length


// let text = str.length

//Metodo repeat()
// str = str.repeat(3)


let str = "texto@text2"



const pasarTexto = (text) => {
    return document.write(`
         <h1 style="color:#f00; font-size: 4rem">
            ${text.indexOf("@")}
            ${text.substring(0,5)} 
         </h1>
    `)
}

pasarTexto(str)


// document.write(
// //'<h1 style="color:#f00; font-size: 4rem">' + str + "</h1>"

//     `
//         <h1 style="color:#f00; font-size: 4rem">
//             ${str} 
//         </h1>
//     `
// )


// Perdir un str y que reorne true si el str tiene 5 o mas caracteres en caso contrario me retorne false, hacerlo con el operado ternario

let text = prompt("ingresar texto")



//if(text.length >= 5){
//     document.write("true")
// }else{
//     document.write("false")
// }

let response = text.length >= 5 ? true : false;

document.write(response)