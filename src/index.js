import { home } from './home';
import { contact } from './contact';
import { menu } from './menu';

const container = document.querySelector('#content');

const homeB = document.createElement('button');
homeB.textContent = 'click me for home';
homeB.addEventListener('click', home);

const contactB = document.createElement('button');
contactB.textContent = 'click me for contact';
contactB.addEventListener('click', contact);

const menuB = document.createElement('button');
menuB.textContent = 'click me for menu';
menuB.addEventListener('click', menu);

container.appendChild(homeB);
container.appendChild(contactB);
container.appendChild(menuB);
