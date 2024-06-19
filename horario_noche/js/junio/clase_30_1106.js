
// const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "viernes", "Sábado", "Domingo"];

// for(let i = 0; i < dias.length; i++){
//     document.write(`
//         <li>${dias[i]}</li>    
//     `);
// }

//const alumnos = [["Patty", 19], ["Carlos", 18], ["Rosa", 17], ["Johalys", 18], ["Samuel", 15]];

// document.write(`
//     Nombre: ${alumnos[0][0]} <br>
//     Nota: ${alumnos[0][1]}<br>
// `);

// console.log(alumnos[1]);
/*
for(let i = 0; i < alumnos.length; i++){

    document.write(`
         Nombre: <strong> ${alumnos[i][0]}</strong> <br>
         Nota: <b>${alumnos[i][1]}</b><br>
    `);
}
*/
// Recorrer un array con for in y for of
// const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "viernes", "Sábado", "Domingo"];

// document.write(dias.length + "<br>")

// for(let dia in dias){
//      document.write(dia + "<br>");
// }

// for(let dia of dias){
//     document.write(dia + "<br>");
// }

// const alumnos = [["Patty", 17], ["Carlos", 18], ["Rosa", 16], ["Johalys", 18], ["Samuel", 18]];

/*
for(let posAlumnos in alumnos){
    document.write(`
        Nombre: <strong> ${alumnos[posAlumnos][0]}</strong> <br>
        Nota: <b>${alumnos[posAlumnos][1]}</b><br>
    `);
}
*/
/*
for( let valAlumnos of alumnos){
    document.write(`
        Nombre: <strong> ${valAlumnos[0]}</strong> <br>
        Nota: <b>${valAlumnos[1]}</b><br>
    `);
}
    */


// for (let subArr of alumnos) {
//     for (let element in subArr) {
//         document.write(`
//             Nombre: <strong> ${subArr[element]}</strong> <br>

//         `);
//     }
//   }
/*
Sugerencia de Samuel
for (var i in alumnos) {
    for (var j in alumnos[i]) {
        document.write(`
            Nombre: <strong> ${alumnos[i][j]}</strong> <br>
        `);
    } 
}
*/
/*

const meses = ["Enero", "febrero", "Marzo", "Abril"];

for(let i = 0; i < meses.length; i++){
    document.write(
        `
            <b>${meses[i]}</b> <br>
        `
    );
}

for(let posMeses in meses){
    document.write(
        `
            <strong>${meses[posMeses]}</strong> <br>
        `
    );
}

for( let valueMeses of meses){
    document.write(
        `
            <span>${valueMeses}</span> <br>
        `
    );
}
*/
/*
const mesNacimiento = [
    ["Pedro", "Diciembre"],
    ["Juan", "Septiembre"],
    ["Martha", "Junio"]
];
*/
/*
document.write(`
    Nombre: <strong>${mesNacimiento[0][0]}</strong><br>
    Mes de Nacimiento: <b>${mesNacimiento[0][1]}</b>
`)
*/
/*
for( let i = 0; i < mesNacimiento.length; i++){
    document.write(`
        Nombre: <strong>${mesNacimiento[i][0]}</strong><br>
        Mes de Nacimiento: <b>${mesNacimiento[i][1]}</b><br>
    `);
}*/

// document.write("<hr>");
/*
for(let posMesNacimiento in mesNacimiento){
    document.write(`
        Nombre: <strong>${mesNacimiento[posMesNacimiento][0]}</strong><br>
        Mes de Nacimiento: <b>${mesNacimiento[posMesNacimiento][1]}</b><br>
    `);
}
*/

// document.write("<hr>");

/*
for( let valueMesNacimiento of mesNacimiento){
    document.write(`
        Nombre: <strong>${valueMesNacimiento[0]}</strong><br>
        Mes de Nacimiento: <b>${valueMesNacimiento[1]}</b><br>
    `);
}
*/

// Ordenación de un Array

const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "viernes", "Sábado", "Domingo"];

// Metodo Reverse: reordena en orden inverso el array y a su vez también modifica el el array original
/*
for(let dia of dias){
    document.write(`<b>${dia}</b> `);
}
document.write("<hr>");

const reversedDias = dias.reverse();

for(let reverseDia of reversedDias){
    document.write(`<strong>${reverseDia}</strong> `);
}
*/

// De esta forma con estructuredClone cree un clon del array y con el metodo reverse reordene ese clon del array en orden inverso sin afectar el array original

for(let dia of dias){
    document.write(`<b>${dia}</b> `);
}
document.write("<hr>");

// const reversedDias = structuredClone(dias).reverse();

const reversedDias = dias.toReversed();

for(let reverseDia of reversedDias){
    document.write(`<strong>${reverseDia}</strong> `);
}

document.write("<hr>");

for(let dia of dias){
    document.write(`<b>${dia}</b> `);
}