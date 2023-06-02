import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

// Create gallery markup
const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
         <a class="gallery__link" href="${original}">
           <img class="gallery__image" src="${preview}" alt="${description}" />
         </a>
       </li>`
  )
  .join('');

galleryList.innerHTML = galleryMarkup;

// Initialize SimpleLightbox
const lightbox = new SimpleLightbox('.gallery__item a', {
  captionsData: 'alt',
  captionDelay: 250,
});

