import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

function createGalleryItem({ preview, original, description }) {
  return `
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
      <div class="gallery__caption">${description}</div>
    </a>
  `;
}

function renderGallery() {
  const galleryMarkup = galleryItems.map(createGalleryItem).join('');
  gallery.insertAdjacentHTML('beforeend', galleryMarkup);
}

renderGallery();

var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, });

