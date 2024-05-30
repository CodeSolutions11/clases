// Arrays 

// let newarray = ["texto", true, false, 4, 10];
// document.write(newarray[2]);

// let credentials = [["jesusDev", 123456], ["ewilDev", 456123], ["mercedesDev", 789123]];


// let user = prompt("Ingresar usuario");
// let passwd =  parseInt(prompt("Ingresar Contraseña"));


// if(user === credentials[0][0] && passwd === credentials[0][1]){
//     document.write("Dashboard");
// }else if(user === credentials[1][0] && passwd === credentials[1][1]){
//     document.write("Dashboard");
// }else if(user === credentials[2][0] && passwd === credentials[2][1]){
//     document.write("Dashboard");
// }else{
//     document.write("acceso denegado")
// }

// metodos => añadir uno o varios elementos a un array

const elements = ["a", "b", "c"];

// los metodos push y pop actuan al final de array
// document.write(elements.push("d","e","f") + "<br>");
// document.write(elements + "<br>");

// document.write(elements.pop() + "<br>");
// document.write(elements);


// document.write(elements.unshift(1,2,3) + "<br>");
// document.write(elements + "<br>");

// document.write(elements.shift() + "<br>");
// document.write(elements);

// Convertir string a array
// const text = "abcdef";
// let letters = Array.from(text);
// document.write(letters)


// Buscar elementos en un array con el metodo includes()

let user=prompt("Ingresar user");
// let passwd = 123456;

// convertir texto a minusculas y mayusculas
document.write(user + "<br>")
document.write(user.toLowerCase() + "<br>")
document.write(user.toUpperCase());


// const numbers = [["Jesus",123456], 2, 5, ["mercedesDev", 456123]];

// document.write(numbers[0].includes(user));

// if(numbers[3].includes(user)){
//     document.write("dashboard");
// }else{
//     alert("Credenciales incorrectas");
// }