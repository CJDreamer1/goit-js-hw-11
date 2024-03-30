import 'simplelightbox/dist/simple-lightbox.min.css';
import { getPicture } from './js/pixabay-api.js';
import { pictureTemplate } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const gallery = document.querySelector('.gallery');
export const formEl = document.querySelector('.form');
export const loader = document.querySelector('.loader');

// ===========================================СТВОРЕННЯ РОЗМІТКИ ==================================================

formEl.addEventListener('submit', e => {
  e.preventDefault();
  loader.classList.remove('loader-hidden'); // Показати анімацію перед запитом

  gallery.innerHTML = '';

  const query = e.target.elements.query.value; // Отримання значення поля вводу
  getPicture(query)
    .then(pictures => {
      pictureTemplate(pictures); // Передача об'єкта formEl
    })
    .catch(error => {
      //   console.error('Помилка при отриманні картинок:', error);
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      loader.classList.add('loader-hidden');
    });
});
