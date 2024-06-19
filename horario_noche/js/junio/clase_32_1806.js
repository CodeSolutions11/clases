// const names = ['Carlos', 'Patty', 'Johalys', 'Rosa']

// console.log(typeof names)

// Objeto en js

//const objeto2 = new Object(); // Evitar esta sintaxis

// Declarar un objeto
//const objeto  = {}

/*
const player = {
    name: 'Phoenix',
    life: 99,
    power: 10
};
*/
/*
document.write(`
    ${player.name} <br>
    ${player.life} <br>
    ${player.power}

`);

*/
/*
const car  = {};

car.model = 'ford';
car.year = 2020;
car.color = 'negro';
car.km = 100000;

console.log(car)
console.log(player)
*/
/*
const users = [
    {
        name: 'Carlos',
        email: 'carlos@gmail.com',
        date: '18/06/2024',
    },
    {
        name: 'Patty',
        email: 'patty@gmail.com',
        date: '18/06/2024',
    },
    {
        name: 'Rosa',
        email: 'rosa@gmail.com',
        date: '18/06/2024',
    },
    {
        name: 'Samuel',
        email: 'samuel@gmail.com',
        date: '18/06/2024',
    },
    {
        name: 'Samuel',
        email: 'samuel@gmail.com',
        date: '18/06/2024',
    },
    {
        name: 'Samuel',
        email: 'samuel@gmail.com',
        date: '18/06/2024',
    },
    {
        name: 'Samuel',
        email: 'samuel@gmail.com',
        date: '18/06/2024',
    },
    {
        name: 'Samuel',
        email: 'samuel@gmail.com',
        date: '18/06/2024',
    },
    {
        name: 'Samuel',
        email: 'samuel@gmail.com',
        date: '18/06/2024',
    },
];


users.forEach(user => {
    document.write(`
        <div>
            UserName:  <b>${user.name}</b>
            Email: <b>${user.email}</b>
            Date: <b>${user.date}</b>
        </div>
    `)
});
*/

// const user = {
//     name: 'Samuel',//propiedad

//     talk: name => { document.write(`Hola a ${name}!!`); }//método
// }

// document.write(user.talk())

//user.talk('Johalys');


// Formato JSON


// const user = `{
//     "name": "Patty",
//     "email": "patty@gmail.com" 
// }`;
// // Convertir de json a objeto
// const user1 = JSON.parse(user);
// console.log(user1.name)
// console.log(user1.email)
/*
const player = `
    {
        "name": "Jesus",
        "life": 80,
        "power": 50
    }
`;

const player1 = JSON.parse(player);

document.write(`
    PlayerName: <b>${player1.name}</b><br>
    Life: <b>${player1.life}</b><br>
    Power: <b>${player1.power}</b>
`);

*/

// Convertir de objeto a json
/*
const car = {
    model: 'toyota',
    year: 2024,
    color: 'gris'
};

const car1 = JSON.stringify(car);

document.write(car1)
*/
/*
const cats = [
    {
    "id": "31n",
    "url": "https://cdn2.thecatapi.com/images/31n.jpg",
    "width": 500,
    "height": 333
    },
    {
    "id": "3ok",
    "url": "https://cdn2.thecatapi.com/images/3ok.gif",
    "width": 500,
    "height": 281
    },
    {
    "id": "3ut",
    "url": "https://cdn2.thecatapi.com/images/3ut.jpg",
    "width": 1600,
    "height": 1200
    },
    {
    "id": "a1h",
    "url": "https://cdn2.thecatapi.com/images/a1h.jpg",
    "width": 455,
    "height": 500
    },
    {
    "id": "MTY0MDUzMg",
    "url": "https://cdn2.thecatapi.com/images/MTY0MDUzMg.jpg",
    "width": 3648,
    "height": 2736
    },
    {
    "id": "MTY1ODc5MA",
    "url": "https://cdn2.thecatapi.com/images/MTY1ODc5MA.png",
    "width": 638,
    "height": 431
    },
    {
    "id": "MTcyNDU0NA",
    "url": "https://cdn2.thecatapi.com/images/MTcyNDU0NA.jpg",
    "width": 2221,
    "height": 1568
    },
    {
    "id": "MTkzNjMxNQ",
    "url": "https://cdn2.thecatapi.com/images/MTkzNjMxNQ.png",
    "width": 2888,
    "height": 1920
    },
    {
    "id": "re7uO34hz",
    "url": "https://cdn2.thecatapi.com/images/re7uO34hz.jpg",
    "width": 1600,
    "height": 2397
    },
    {
    "id": "8LxU2Gwmo",
    "url": "https://cdn2.thecatapi.com/images/8LxU2Gwmo.jpg",
    "width": 1600,
    "height": 1200
    }
]

cats.forEach(cats=> {
    document.write(`<img width="100" height="100"  src="${cats.url}">`);
});

*/

function mostrarGatos(){
    fetch('../../json/gatos.json')
    .then(elements => console.log(elements.json()))
    .then(e => console.log(e))
}

mostrarGatos()