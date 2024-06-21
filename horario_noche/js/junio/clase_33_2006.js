/*
const telefono = {

    info: (modelo, cpu, costo)=>{
        document.write(`
            Modelo: ${modelo}<br>
            Cpu: ${cpu}<br>
            Costo: ${costo}$<br>
        `)
    }

};

telefono.info('Iphone 14', 'A15 Bionic', 1200);
document.write('<hr>');
telefono.info('Galaxy', 'A15 Bionic', 600);

/*

const cars = [
    {
        modelo: 'Ferrari',
        color: 'Rojo',
        km: '150.000',
        
    },
    {
        modelo: 'ford',
        color: 'negro',
        km: '10.000'
    },{
        modelo: 'Toyota',
        color: 'gris',
        km: '250.000'
    },{
        modelo: 'bmw',
        color: 'azul',
        km: '5.000'
    }
];

cars.forEach(car => console.log(car.modelo));
*/
/*
const player = `{
    "nickName": "Phoenix11",
    "life": 99,
    "power": 15
}`;

let player1 = JSON.parse(player);

player1.nickName = 'JesusDev';

player1 = JSON.stringify(player1);
console.log(player1)
*/
/*
const mostrarGatos = ()=>{
    fetch('https://api.thedogapi.com/v1/images/search?limit=10')
    .then(e => e.json())
    .then(gatos => gatos.forEach(element => {
        document.write(`<img width="100" height="100" src="${element.url}">`)
    }))
}

mostrarGatos()
*/
/*
const person = `{
    "name": "Jesus",
    "altura": "1.83mts",
    "color": "palido"
}`;

let person1 = JSON.parse(person);
person1.name = 'Adrian';

person1 = JSON.stringify(person1);


console.log(person1);
console.log(typeof person1);
*/

// Desestructuración de objetos => Separar en variables las propiedades de un objeto
/*
const user = {
    name: "SamuelDev",
    role: "student",
    note: 19
};

const { role, name, note } = user;

document.write(`${name} <br> ${role} <br> ${note}`);
*/

/*
const car = {
    model: 'ford',
    km: 150000,
    color: 'verde'
};

const { color, km, model } = car;
console.log(color)
console.log(model)
console.log(km)
*/

// Iteradores de Objetos
/*
const car = {
    model: 'ford',
    km: 150000,
    color: 'verde',
    year: 2020
};
console.log(Object.keys(car));

const listCars = Object.keys(car);
listCars.forEach( e => document.write(`${e}<br>`));

document.write('<hr>');

console.log(Object.values(car));
const listCars1 = Object.values(car);
listCars1.forEach( e => document.write(`${e}<br>`));

document.write('<hr>');

console.log(Object.entries(car));
const listCars2 = Object.entries(car);
listCars2.forEach( e  => document.write(`
    <div>
        <b class="b">${e[0]}: </b>
        <b class="b1">${e[1]}</b>
    </div>
`));
*/

const user = {
    name: 'Rosa',
    email: 'rosa@gmail.com',
    password: 123456
};

const listUser = Object.keys(user);
console.log(listUser);
listUser.forEach( element => document.write(element+ '<br>') );

document.write('<hr>');

const listUser1 = Object.values(user);
console.log(listUser1);
listUser1.forEach( e => document.write(e + '<br>') );

document.write('<hr>');
/*
const listCars2 = Object.entries(user);
console.log(listCars2);
listCars3.forEach( e => document.write(e) )*/

console.log(Object.entries(user));
const listuser2 = Object.entries(user);
listuser2.forEach(element => document.write(`
    <div>
        <b  class="b">${element[0]}: <b>
        <b  class="b1">${element[1]}<b>
    </div>
`));
document.write('<hr>');

