const body = document.querySelector('body');

// Crear elementos de la card
const containerCard = document.createElement('div');
containerCard.className = 'containerCard';

const title = document.createElement('h1');
title.className = 'title';
title.textContent = 'Titulo de la card';

const img = document.createElement('img');
img.className = 'img';
img.src = '../../images/1.png';

const p = document.createElement('p');
p.className = 'paragraph';
p.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit distinctio accusamus, similique dignissimos quidem a iusto voluptate sunt cum pariatur numquam aliquam harum rerum consectetur eum rem quasi ex atque!';

const button = document.createElement('button');
button.className = 'button';
button.textContent = 'Ver Mas';

// Insertar elementos de la card
body.appendChild(containerCard);


containerCard.appendChild(img);

containerCard.appendChild(title);

containerCard.appendChild(p);

containerCard.appendChild(button);