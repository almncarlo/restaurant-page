import './style.css';
import { displayHome } from './home';
import { displayContact } from './contact';
import { displayNav } from './nav';
import { displayMenu } from './menu';

const home = displayHome;
const menu = displayMenu;
const contact = displayContact;
const nav = displayNav;

const content = document.querySelector('#content');
const content_body = document.createElement('div');
content_body.id = 'content-body';
content.append(content_body);

nav.runNav();

const nav_home = document.querySelector('.home');
const nav_menu = document.querySelector('.menu');
const nav_contact = document.querySelector('.contact');

nav_home.addEventListener('click', home.runHome);
nav_menu.addEventListener('click', menu.runMenu);
nav_contact.addEventListener('click', contact.runContact);

home.runHome();
