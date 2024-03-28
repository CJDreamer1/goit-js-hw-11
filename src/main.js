import 'simplelightbox/dist/simple-lightbox.min.css';
import { getPicture } from './js/pixabay-api.js';
import { pictureTemplate } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const gallery = document.querySelector('.gallery');
export const formEl = document.querySelector('.form');

// ===========================================СТВОРЕННЯ РОЗМІТКИ ==================================================
formEl.addEventListener('submit', e => {
  e.preventDefault();

  const query = e.target.elements.query.value; // Отримання значення поля вводу
  getPicture(query)
    .then(pictures => {
      const markup = pictureTemplate(pictures, formEl); // Передача об'єкта refs
      gallery.insertAdjacentHTML('beforeend', markup);
    })
    .catch(error => {
      console.error('Помилка при отриманні картинок:', error);
      iziToast.error({
        title: 'Помилка',
        message: 'Не вдалося отримати картинки',
      });
    });
});
// ================================================================================================================
