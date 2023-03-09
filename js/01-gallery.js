import { galleryItems } from './gallery-items.js';

const galleryImg = document.querySelector('.gallery');
galleryImg.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

function createMarkup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `<div><a href="${original}" class="gallery__item"><img src="${preview}" data-source="${original}" alt="${description}" class="gallery__image"/></a></div>`;
  }).join('');
}

galleryImg.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();

  const isImageEl = event.target.classList.contains('gallery__image');
  if (!isImageEl) {
    return;
  }

  const imageUrl = event.target.getAttribute('data-source');
  const instance = basicLightbox.create(`<img src="${imageUrl}">`, {
    onShow: (instance) => {
      const img = instance.element().querySelector('img');
      img.style.maxWidth = '100%';
      img.style.maxHeight = '100%';
    }
  });
  instance.show();
}

console.log(galleryItems);





// import { galleryItems } from './gallery-items.js';


// const galleryImg = document.querySelector('.gallery');
// galleryImg.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

// function createMarkup(galleryItems) {
//     return galleryItems.map(({ preview, original, description }) => {
//         return `<div><a href="${original}" class="gallery__item"><img src="${preview}" data-source="${original}" alt="${description}" class="gallery__image"/></a></div>`;
//     }).join('');
// }

// galleryImg.addEventListener('click', onGalleryClick);

// function onGalleryClick(event) {
//     event.preventDefault();

//     const isImageEl = event.target.classList.contains('gallery__image');
//     if (!isImageEl) {
//         return;
//     }

//     const imageUrl = event.target.getAttribute('src');
//     const instance = basicLightbox.create(`<img src="${imageUrl}" width="100%" height="100%">`);
//     instance.show();
// }

// console.log(galleryItems);

