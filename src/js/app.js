import * as flsFunctions from './modules/functions.js';

flsFunctions.isWebp();

const burgerBtn = document.querySelector('.burger__btn');
burgerBtn.addEventListener('click', flsFunctions.toggleMobileMenu);
