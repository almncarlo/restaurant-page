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

    const form_div = document.createElement('div');
    form_div.classList.add('form-div');

    const heading = document.createElement('h2');
    heading.classList.add('form-header');
    heading.textContent = 'Get in touch with us';
    form_div.appendChild(heading);

    // form section
    const form = document.createElement('form');
    const fname = document.createElement('input');
    const l_fname = document.createElement('label');
    const lname = document.createElement('input');
    const l_lname = document.createElement('label');
    const email = document.createElement('input');
    const l_email = document.createElement('label');
    const msg = document.createElement('input');
    const l_msg = document.createElement('label');
    const submit = document.createElement('button');

    fname.id = 'fname';
    l_fname.htmlFor = 'fname';
    l_fname.textContent = 'First Name';

    lname.id = 'lname';
    l_lname.htmlFor = 'lname';
    l_lname.textContent = 'Last Name';

    email.id = 'email';
    l_email.htmlFor = 'email';
    l_email.textContent = 'Email Address';

    msg.id = 'msg';
    l_msg.htmlFor = 'msg';
    l_msg.textContent = 'What would you like to tell us?';

    submit.type = 'submit';
    submit.textContent = 'Send message';

    form.appendChild(l_fname);
    form.appendChild(fname);
    form.appendChild(l_lname);
    form.appendChild(lname);
    form.appendChild(l_email);
    form.appendChild(email);
    form.appendChild(l_msg);
    form.appendChild(msg);
    form.appendChild(submit);

    form_div.appendChild(form);

    body.appendChild(side);
    body.appendChild(form_div);

    content.appendChild(body);
})();

export { displayContact };