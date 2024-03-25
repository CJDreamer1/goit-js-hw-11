// ============================================ ФУНКЦІЯ, ЩО СТВОРЮЄ КУР'ЄРА ================================================
export function getPicture(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: '43041849-c8f652645a26d9036757deffe',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `${BASE_URL}?${params}`;

  return fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      return data.hits; // Повертаємо масив об'єктів картинок
    })
    .catch(error => {
      console.error('Помилка під час виконання запиту:', error);
    });
}
