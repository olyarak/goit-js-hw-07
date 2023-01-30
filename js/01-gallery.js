import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

function createGalleryBox(items) {
  return items.map(item => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery__item');

    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__link');
    galleryLink.href = item.original;

    const galleryImage = document.createElement('img');
    galleryImage.classList.add('gallery__image');
    galleryImage.src = item.preview;
    galleryImage.dataset.source = item.original;
    galleryImage.alt = item.description;

    galleryLink.append(galleryImage);
    galleryItem.append(galleryLink);

    return galleryItem;
  });
}

const galleryContainerElements = createGalleryBox(galleryItems);
galleryContainer.append(...galleryContainerElements);

galleryContainer.addEventListener('click', onModalOpen);

function onModalOpen(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
    <div class="modal">
    <img src='${event.target.dataset.source}'>
    </div>
`);

  window.addEventListener('keydown', onEscKeyPress);
  function onEscKeyPress(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }

  instance.show();
}
