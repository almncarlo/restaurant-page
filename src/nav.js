const displayNav = (() => {
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
    const title = document.createElement('h2');

    homeB.textContent = 'HOME';
    menuB.textContent = 'MENU';
    contactB.textContent = 'CONTACT';
    title.textContent = "Chicko's";

    homeBox.appendChild(homeB);
    menuBox.appendChild(menuB);
    contactBox.appendChild(contactB);

    homeBox.classList.add('home');
    menuBox.classList.add('menu');
    contactBox.classList.add('contact');
    title.classList.add('nav-title');

    buttonList.appendChild(homeBox);
    buttonList.appendChild(menuBox);
    buttonList.appendChild(contactBox);
    
    navbar.appendChild(title);
    navbar.appendChild(buttonList);
    navbar.classList.add('navbar');

    header.appendChild(navbar);

    // add divs to content div
    content.appendChild(header);
})();

export { displayNav };