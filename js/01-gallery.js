import { galleryItems } from './gallery-items.js';
 
const galleryList = document.querySelector('.gallery');

const galleryMarkup = galleryItems
.map(({preview, original, description}) =>
  `<li class="gallery__item">
  
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
)
.join('');
galleryList.innerHTML = galleryMarkup;
 galleryList.addEventListener('click', (event) => {
 event.preventDefault();

 if(event.target.classList.contains('gallery__image')){
  const lightbox = basicLightbox.create(`
  <img src="${event.target.dataset.source}" alt="${event.target.alt}">
`);
lightbox.show();
 }
 });
 