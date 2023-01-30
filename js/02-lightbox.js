import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

function createGalleryBox(items) {
  return items.map(({ preview, original, description }) => {
    const galleryItem = document.createElement('a');
    galleryItem.classList.add('gallery__item');
    galleryItem.href = original;

    const galleryImage = document.createElement('img');
    galleryImage.classList.add('gallery__image');
    galleryImage.src = preview;
    galleryImage.alt = description;

    galleryItem.append(galleryImage);

    return galleryItem;
  });
}

const galleryContainerElements = createGalleryBox(galleryItems);
galleryContainer.append(...galleryContainerElements);

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
