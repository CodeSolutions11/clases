//Crear una funcion flecha que retorne el nombre de una persona

// const saludar = nombre => `Hola ${nombre}!!`;

// // saludar("Johalys");

// document.write(saludar("Jesus"))

// let n = (25).toString();

// document.write(n === "25")

// indeterminacion matematica, valor imposible, cualquier operacion con NaN

// let result = 0/0;

// if(Number.isNaN(result)){

//     document.write("No es un numero:  " + result);

// }else{

//     document.write("Es un numero: " + result);

// }



// Tema: String => "", '', ``

// propiedad length => me devuelve el nro de caracteres de un string

// let name = "abcd";
// document.write(name.length)

// => 0123456789

// const text = "hola";
// document.write(text[4])

//repeat => repite el valor de un string una cantidad determinada de veces

// let text =  `
//     <button style="background:#f00; border-radius:3rem; cursor:pointer">boton<button>
// `;
// document.write(text.repeat(3));


// let name = "Carlos";
// document.write(name.charAt(3));

// let phrase = "hoy estamos aprendiendo JavaScript";
// document.write(phrase.indexOf("e") + "<br>");

// document.write(phrase.lastIndexOf("e"));


let text = "Rosa";
document.write(text.startsWith("R") + "<br>");
document.write(text.endsWith("o") + "<br>");
document.write(text.includes("os"));
