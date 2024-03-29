import { gallery } from '../main';
import SimpleLightbox from 'simplelightbox';
export function pictureTemplate(pictures, formEl) {
  if (pictures.length === 0) {
    console.log(error);
  } else {
    const markup = pictures
      .map(
        data =>
          `<li class="modal">
          <a class="gallery-link" href="${data.webformatURL}">
            <img class="gallery-image" src="${data.largeImageURL}" data-source="${data.webformatURL}" alt="${data.tags}">
          </a>
          <div class="div-info">
            <p class="p-info"><span class="p-span">Likes</span> ${data.likes}</p>
            <p class="p-info"><span class="p-span">Views</span> ${data.views}</p>
            <p class="p-info"><span class="p-span">Coments</span> ${data.comments}</p>
            <p class="p-info"><span class="p-span">Downloads</span> ${data.downloads}</p>
          </div>
        </li>`
      )
      .join('');

    // Виправлення виклику SimpleLightbox
    const lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });

    lightbox.refresh(); // Оновлюємо lightbox

    return markup;
  }
}
