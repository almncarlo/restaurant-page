import { menu } from "./menu";
import Icon from "./assets/hero.jpeg";

const displayHome = (() => {
    const content = document.querySelector('#content');
    const header = document.createElement('header');
    const navbar = document.createElement('nav');
    const buttonList = document.createElement('ul');
    const homeBox = document.createElement('li');
    const menuBox = document.createElement('li');
    const contactBox = document.createElement('li');
    const homeB = document.createElement('a');
    const menuB = document.createElement('a');
    const contactB = document.createElement('a');
    const hero = document.createElement('div');
    const myIcon = new Image();
    const landingText = document.createElement('h1');

    myIcon.src = Icon;
    hero.classList.add('hero');

    // myIcon.classList.add('hero-img');

    homeB.textContent = 'HOME';
    menuB.textContent = 'MENU';
    contactB.textContent = 'CONTACT';

    homeBox.appendChild(homeB);
    menuBox.appendChild(menuB);
    contactBox.appendChild(contactB);

    homeBox.classList.add('home');
    menuBox.classList.add('menu');
    contactBox.classList.add('contact');

    buttonList.appendChild(homeBox);
    buttonList.appendChild(menuBox);
    buttonList.appendChild(contactBox);
    
    navbar.appendChild(buttonList);
    navbar.classList.add('navbar');

    header.appendChild(navbar);

    // hero page stuff
    landingText.textContent = "Chicken like never before";
    landingText.classList.add('hero-text');
    hero.appendChild(landingText);

    // reset html when loading home page
    content.innerHTML = '';

    // add divs to content div
    content.appendChild(header);
    content.appendChild(hero);
})();

export { displayHome };