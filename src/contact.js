import { displayNav } from "./nav";
import Icon from "./assets/contact.jpeg";

const displayContact = (() => {
    const content = document.querySelector('#content');
    const body = document.createElement('div');
    const myIcon = new Image();
    body.classList.add('contact-body');
    myIcon.src = Icon;

    const side = document.createElement('div');
    side.classList.add('side');

    const form = document.createElement('div');
    form.classList.add('form-div');

    const heading = document.createElement('h2');
    heading.classList.add('form-header');
    heading.textContent = 'Get in touch with us';

    form.appendChild(heading);

    body.appendChild(side);
    body.appendChild(form);

    content.appendChild(body);
})();

export { displayContact };