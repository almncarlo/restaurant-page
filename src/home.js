import Icon from "./assets/hero.jpeg";

const displayHome = (() => {
    const runHome = () => {
        const content = document.querySelector('#content');
        const content_body = document.querySelector('#content-body');
        content_body.innerHTML = '';

        const hero = document.createElement('div');
        const myIcon = new Image();
        const landingText1 = document.createElement('h1');
        const landingText2 = document.createElement('h3');
        const explore = document.createElement('button');

        myIcon.src = Icon;
        hero.classList.add('hero');

        // hero stuff
        landingText1.textContent = "Chicken like never before";
        landingText1.classList.add('hero-text');
        landingText2.textContent = "From our kitchen to your table";
        landingText2.classList.add('hero-subtext');
        hero.appendChild(landingText1);
        hero.appendChild(landingText2);

        explore.textContent = 'EXPLORE THE MENU';
        explore.classList.add('explore-button');
        hero.appendChild(explore);
        content_body.appendChild(hero);

        // home info stuff
        const location = document.createElement('div');
        location.classList.add('location-div');

        const locHeading = document.createElement('div');
        const locTitle = document.createElement('h2');
        locTitle.textContent = 'OUR LOCATIONS';
        locTitle.classList.add('locHeading');
        locHeading.appendChild(locTitle);

        const loc1 = document.createElement('div');
        const loc1_head = document.createElement('h3');
        const loc1_1 = document.createElement('p');
        const loc1_2 = document.createElement('p');

        loc1_head.textContent = 'NEW MEXICO';
        loc1_1.textContent = '308 Negra Arroyo Lane';
        loc1_2.textContent = 'Albuquerque, NM';
        loc1.classList.add('location-card');
        loc1.appendChild(loc1_head);
        loc1.appendChild(loc1_1);
        loc1.appendChild(loc1_2);

        const loc2 = document.createElement('div');
        const loc2_head = document.createElement('h3');
        const loc2_1 = document.createElement('p');
        const loc2_2 = document.createElement('p');

        loc2_head.textContent = 'YEMEN';
        loc2_1.textContent = '15 Yemen Road';
        loc2_2.textContent = 'Yemen';
        loc2.classList.add('location-card');
        loc2.appendChild(loc2_head);
        loc2.appendChild(loc2_1);
        loc2.appendChild(loc2_2);

        const loc3 = document.createElement('div');
        const loc3_head = document.createElement('h3');
        const loc3_1 = document.createElement('p');
        const loc3_2 = document.createElement('p');

        loc3_head.textContent = 'CALIFORNIA';
        loc3_1.textContent = '2311 North Los Robles Avenue';
        loc3_2.textContent = 'Pasadena, CA';
        loc3.classList.add('location-card');
        loc3.appendChild(loc3_head);
        loc3.appendChild(loc3_1);
        loc3.appendChild(loc3_2);

        const loc_cards = document.createElement('div');
        loc_cards.classList.add('locations');

        location.appendChild(locHeading);
        loc_cards.appendChild(loc1);
        loc_cards.appendChild(loc2);
        loc_cards.appendChild(loc3);
        location.appendChild(loc_cards);

        content_body.appendChild(location);
        content.appendChild(content_body);
    };

    return { runHome };
})();

export { displayHome };