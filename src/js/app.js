import * as flsFunctions from './modules/functions.js';
import { Splide } from '@splidejs/splide';
import fslightbox from 'fslightbox';

flsFunctions.isWebp();

const burgerBtn = document.querySelector('.burger__btn');
burgerBtn.addEventListener('click', flsFunctions.toggleMobileMenu);

if (document.querySelector('.testimonials') != null) {
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
}

if (document.querySelector('.article__images') != null) {
  new Splide('.article__images', {
    pagination: false,
    type: 'loop',
  }).mount();
}

document.querySelector('.current-year').innerHTML = new Date().getFullYear();

// scroll to top
const scrollBtn = document.querySelector('.scroll-to-top');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) {
    scrollBtn.style.visibility = 'visible';
    scrollBtn.style.opacity = '1';
  } else {
    scrollBtn.style.visibility = 'hidden';
    scrollBtn.style.opacity = '0';
  }
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

flsFunctions.bindModal('.open-modal', '.modal', '.modal__close');
