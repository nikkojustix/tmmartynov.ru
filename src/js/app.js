import * as flsFunctions from './modules/functions.js';
import { Splide } from '@splidejs/splide';

flsFunctions.isWebp();

const burgerBtn = document.querySelector('.burger__btn');
burgerBtn.addEventListener('click', flsFunctions.toggleMobileMenu);

new Splide('.testimonials', {
  perPage: 3,
  perMove: 1,
  pagination: false,
  gap: 20,
  type: 'loop',
  breakpoints: {
    999: {
      perPage: 2,
    },
    767: {
      perPage: 1,
    },
  },
}).mount();
