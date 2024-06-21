
var dato1 = `Jesus`;//es un dato de tipo String o cadena de texto

var dato2 = 2; //Un dato de tipo Number

var dato3 = false; // Un dato de tipo Boolean; true o false

var dato4; // Dato de tipo Undefined

/*todos los datos que pasemos por prompt seran string
var dato5 = prompt("Ingresar dato"); 
*/

var dato6 = document.getElementsByClassName("title");

function name(){
    var dato = prompt("ingresa un Nombre");

    return document.write(`<h2 style="color:red; background: black; font-size: 30px"> ${dato} </h2>`);
}


name();