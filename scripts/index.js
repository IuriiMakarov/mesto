const buttonEdit = document.querySelector('.profile__editButton');
const overlayProfile = document.querySelector('.popup_profileEdit');
const overlayActiveClass = 'popup_active';
const profileTitle = document.querySelector('.profile__title');
const profileSubTitle = document.querySelector('.profile__sub-title');
const formEdit = document.querySelector('.popup__editForm');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const imageAddWrape = document.querySelector('.elements');
const imageAddTemplate = document.querySelector('#addImageTemplate').content;
const buttonClose = document.querySelector('.popup__close-btn');
const buttonCloseAdd = document.querySelector('.popup__addClose-btn');
const imageElement = document.querySelector('.elements__image');
const overlayImage = document.querySelector('.popup_showImage');
const imageOpenActive = 'showImage_active';
const imageDeleteBtn = document.querySelector('.showImage__close-btn');
const imageAddButton = document.querySelector('.profile__addButton');
const imageAddForm = document.querySelector('.popup__addImageForm');
const overlayAddImage = document.querySelector('.popup_addImage');
const imageFull = document.querySelector('.popup__image');
const imageTitle = document.querySelector('.popup__imageTitle');
const linkInput = document.querySelector('.popup__input_type_link');
const descriptionInput = document.querySelector('.popup__input_type_description');
const buttonCloseImage = document.querySelector('.popup__close-btnShowImage');
const buttonAddImage = document.querySelector('.popup__save-btn_addImage')


/* Тут реализация начальных карточек из массива */


const createCard = (item => {
  
  const card = imageAddTemplate.cloneNode(true);
  const elementImage = card.querySelector('.elements__image');
  card.querySelector('.elements__text').textContent = item.name;
  elementImage.alt = item.name;
  elementImage.src = item.link;

  /* Тут реализация открытия картинки в полный размер */

  elementImage.onclick = (event) => {
  
    imageFull.src = item.link;
   
    imageFull.alt = item.name;

    imageTitle.textContent = item.name;
  
    openPopup(overlayImage);
  };

  const imageLikeButton = card.querySelector('.elements__like');
  const imageDelete = card.querySelector('.elements__trash');


  imageLikeButton.addEventListener('click', handleLikeButton);

  imageDelete.addEventListener('click', handleDeleteButton);

  return card;

});

const handleLikeButton = (e) => {

  e.target.classList.toggle('elements__like_active')

};

const handleDeleteButton = (e) => {

  e.target.closest('.elements__element').remove();

};

initialElements.forEach(item => {
  const newElement = createCard(item);
  imageAddWrape.prepend(newElement);
});

/* Тут реализация функций закрытия и открытия */

function closePopup(popup) {
  popup.classList.remove(overlayActiveClass);
  document.removeEventListener('keydown', handleEscUp);
  popup.removeEventListener('click', closePopupClickOverlay);
};

function openPopup (popup) {
  popup.classList.add(overlayActiveClass);
  document.addEventListener('keydown', handleEscUp);
  popup.addEventListener('click', closePopupClickOverlay);
};


buttonCloseImage.addEventListener('click', function(){
  closePopup(overlayImage);
})


function closePopupClickOverlay (evt) {
  if (evt.target.classList.contains('popup')) {
      const popup = evt.target;
      closePopup(popup);
  }
}


const handleEscUp = (evt) =>  {
  if (evt.key === 'Escape') {
    const activePopup = document.querySelector(`.${overlayActiveClass}`);
    closePopup(activePopup);
  }
};



/* Тут реализация редактирования профиля */

buttonEdit.addEventListener('click', function(){

  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubTitle.textContent;

  openPopup(overlayProfile);
});

buttonClose.addEventListener('click', function(){
  closePopup(overlayProfile);
});



function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubTitle.textContent = jobInput.value;
  closePopup(overlayProfile)  
};

formEdit.addEventListener('submit', handleProfileFormSubmit);

/* Тут реализация добавления фотографий */

imageAddButton.addEventListener('click', function(){

  descriptionInput.value = '';
  linkInput.value = '';
  buttonAddImage.setAttribute('disabled', 'disabled');
  buttonAddImage.classList.add('popup__save-btn_invalid');

  openPopup(overlayAddImage);
  
});

buttonCloseAdd.addEventListener('click', function(){
  closePopup(overlayAddImage);
})


function handleAddImageSubmit (e) {
  e.preventDefault();
  const newImage = {
    name: descriptionInput.value,
    link: linkInput.value
  }

  const newElement = createCard(newImage);
  imageAddWrape.prepend(newElement);
  closePopup(overlayAddImage)
};

imageAddForm.addEventListener('submit', handleAddImageSubmit);
