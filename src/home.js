import { displayNav } from "./nav";
import Icon from "./assets/hero.jpeg";

const displayHome = (() => {
    const content = document.querySelector('#content');
    const hero = document.createElement('div');
    const myIcon = new Image();
    const landingText = document.createElement('h1');

    myIcon.src = Icon;
    hero.classList.add('hero');

    // hero stuff
    landingText.textContent = "Chicken like never before";
    landingText.classList.add('hero-text');
    hero.appendChild(landingText);
    content.appendChild(hero);

    // home info stuff
    const location = document.createElement('div');
    location.classList.add('location-div');

    const locHeading = document.createElement('div');
    const locTitle = document.createElement('h2');
    locTitle.textContent = 'OUR LOCATIONS';
    locTitle.classList.add('locHeading');
    locHeading.appendChild(locTitle);

    const loc1 = document.createElement('div');
    const loc1_1 = document.createElement('p');
    const loc1_2 = document.createElement('p');

    loc1_1.textContent = '308 Negra Arroyo Lane';
    loc1_2.textContent = 'Albuquerque, NM';
    loc1.classList.add('location-card');
    loc1.appendChild(loc1_1);
    loc1.appendChild(loc1_2);

    const loc2 = document.createElement('div');
    const loc2_1 = document.createElement('p');
    const loc2_2 = document.createElement('p');

    loc2_1.textContent = '15 Yemen Road';
    loc2_2.textContent = 'Yemen';
    loc2.classList.add('location-card');
    loc2.appendChild(loc2_1);
    loc2.appendChild(loc2_2);

    const loc3 = document.createElement('div');
    const loc3_1 = document.createElement('p');
    const loc3_2 = document.createElement('p');

    loc3_1.textContent = '2311 North Los Robles Avenue';
    loc3_2.textContent = 'Pasadena, CA';
    loc3.classList.add('location-card');
    loc3.appendChild(loc3_1);
    loc3.appendChild(loc3_2);

    const loc_cards = document.createElement('div');
    loc_cards.classList.add('locations');

    location.appendChild(locHeading);
    loc_cards.appendChild(loc1);
    loc_cards.appendChild(loc2);
    loc_cards.appendChild(loc3);
    location.appendChild(loc_cards);

    content.appendChild(location);
})();

export { displayHome };