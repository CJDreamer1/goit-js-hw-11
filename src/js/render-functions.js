// ========================================= ФУНКЦІЯ РЕНДЕРУ КАРТИНОК =======================================================
export function pictureTemplate(pictures) {
  return pictures
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<div class="modal">
          <a class="gallery-link" href="${webformatURL}">
            <img class="gallery-image" src="${largeImageURL}" data-source="${webformatURL}" alt="${tags}">
          </a>
          <div class="div-info">
          <p class="p-info"><span class="p-span">Likes</span> ${likes}</p>
          <p class="p-info"><span class="p-span">Views</span> ${views}</p>
          <p class="p-info"><span class="p-span">Coments</span> ${comments}</p>
          <p class="p-info"><span class="p-span">Downloads</span> ${downloads}</p>
          </div>
        </div>`
    )
    .join('');
}
