import { getPicture } from './js/pixabay-api.js';
import { pictureTemplate } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  formEl: document.querySelector('.form'),
  pictureContainer: document.querySelector('.picture-container'),
};

// ===========================================СТВОРЕННЯ РОЗМІТКИ ==================================================
refs.formEl.addEventListener('submit', e => {
  e.preventDefault();

  const query = e.target.elements.query.value; // Отримання значення поля вводу
  console.log(query);
  getPicture(query)
    .then(pictures => {
      const markup = pictureTemplate(pictures);
      refs.pictureContainer.insertAdjacentHTML('beforeend', markup);
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
