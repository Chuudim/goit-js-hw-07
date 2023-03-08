import { galleryItems } from './gallery-items.js';
import * as basicLightbox from 'basiclightbox';
// Change code below this line
const galleryImg = document.querySelector('.gallery');
galleryImg.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

function createMarkup(galleryItems) {
    const markUp = galleryItems.map(({ preview, original }) => {
        return `<div><a href="${original}" class="gallery__item"><img src="${preview}" alt="${description}" class="gallery__image"/></a></div>`;}).join('');
    return markUp;
}

galleryImg.addEventListener('cick', onGaleryClick);
function onGaleryClick(event) {
    event.preventDefault();

    const isImageEl = event.target.classList.contains('gallery__image');
    if (e.target.nodeName !== 'IMG') {
        return;
    }
    
    const imageUrl = event.target.getAttribute('src');
    const instance = basicLightbox.create('<img src= "${imageUrl}" width = "800" height = "600" >');
       instance.show(); 
}


console.log(galleryItems);
