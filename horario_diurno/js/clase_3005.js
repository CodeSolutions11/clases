

// const car = {
//     type: "fiat",
//     color: "black",
//     year: 2009
// }

// const  animal = {};

// animal.especie = "ave";
// animal.color = "verde";
// animal.age = 1;

// animal.info = `Especie ${animal.especie}, de color ${animal.color} y tiene una edad de ${animal.age} año`;


// const animal = {
//     especie: "ave",
//     color: "verde",
//     age: 1,
//     toString: function() {
//         return `Especie ${this.especie}, de color ${this.color} y tiene una edad de ${this.age} año`;
//     }

// }
// animal.especie = "gato";

// animal.info = `Especie ${animal.especie}, de color ${animal.color} y tiene una edad de ${animal.age} año`;

// document.write(animal.toString)
// console.log(animal)


// formato JSON

const json  = `{"marcas": [
    {
      "id": 1,
      "nombre": "Audi",
      "modelos": [
        "A5",
        "A3",
        "A4",
        "A6",
        "S3",
        "S4",
        "TT",
        "A1",
        "TTS",
        "A1 1.4 T",
        "Q7",
        "Q5",
        "Q3",
        "Q2"
      ]
    },
    {
      "id": 2,
      "nombre": "BMW",
      "modelos": [
        "Serie 6",
        "Serie 7",
        "Z4",
        "M6",
        "Serie 1",
        "Serie 3",
        "Serie 5",
        "Serie 8",
        "1800",
        "M",
        "Serie 4",
        "Serie 2",
        "M235",
        "428i",
        "i",
        "1M",
        "M4",
        "M3",
        "M2",
        "X6",
        "X1",
        "X3",
        "X5",
        "X4",
        "X2"
      ]
    }]}`

const user = JSON.parse(json)

// const nombre = ["Ewil", "Mercedes"]


document.write(user.marcas[1].nombre + "<br>");


// user.marcas[1].modelos.forEach(element => {
//     document.write(element + "<br>")
// });

 document.write(user.marcas[1].modelos.forEach(element => {
    document.write(element + "<br>")
 }));


 console.log(user)