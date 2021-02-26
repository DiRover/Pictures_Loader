/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */

// удаляем картинки с сервера
export default async function delImg(e) {
  const { target } = e;
  if (!target.hasAttribute('data-del')) return; // если не попали на крестик выходим
  const parent = target.closest('[data-box="img"]'); // находим контейнер с картинкой и Х
  console.log(parent);
  const img = target.previousSibling; // находим картинку
  const src = img.getAttribute('src'); // получаем значение атрибута src
  const response = await fetch(src, {
    method: 'DELETE',
  });
  const result = await response.text();
  console.log(result);
  parent.remove(); // удаляем контейнер с картинкой и Х
}
