const overlayActiveClass = 'popup_active';
const overlayImage = document.querySelector('.popup_showImage');
const imageFull = document.querySelector('.popup__image');
const imageTitle = document.querySelector('.popup__imageTitle');

export {overlayImage, overlayActiveClass, imageFull, imageTitle}
  

export function openPopup (popup) {
    popup.classList.add(overlayActiveClass);
    document.addEventListener('keydown', handleEscUp);
    popup.addEventListener('mousedown', closePopupClickOverlay);
  }

const handleEscUp = (evt) =>  {
    if (evt.key === 'Escape') {
      const activePopup = document.querySelector(`.${overlayActiveClass}`);
      closePopup(activePopup);
    }
  };

function closePopupClickOverlay (evt) {
    if (evt.target.classList.contains('popup')) {
        const popup = evt.target;
        closePopup(popup);
    }
}

export function closePopup(popup) {
    popup.classList.remove(overlayActiveClass);
    document.removeEventListener('keydown', handleEscUp);
    popup.removeEventListener('mousedown', closePopupClickOverlay);
}
