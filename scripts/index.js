const buttonEdit = document.querySelector('.profile__editButton');
const overlayProfile = document.querySelector('.popup_profileEdit');
const overlayActiveClass = 'popup_active';
const buttonSave = document.querySelector('.popup__save-btn');
const profileTitle = document.querySelector('.profile__title');
const profileSubTitle = document.querySelector('.profile__sub-title');
const formEdit = document.querySelector('.popup__editForm');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const imageAddWrape = document.querySelector('.elements');
const imageAddTemplate = document.querySelector('#addImageTemplate').content;
const buttonClose = document.querySelector('.popup__close-btn');
const buttonCloseAdd = document.querySelector('.popup__addClose-btn');
const initialElements = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

const imageElement = document.querySelector('.elements__image');
const overlayImage = document.querySelector('.popup_showImage');
const imageOpenActive = 'showImage_active';
const imageDeleteBtn = document.querySelector('.showImage__close-btn');
const imageAddButton = document.querySelector('.profile__addButton');
const imageAddForm = document.querySelector('.popup__addImageForm');
const overlayAddImage = document.querySelector('.popup_addImage');
const overlay = document.querySelector('.popup');
const imageFull = document.querySelector('.popup__image');
const imageTitle = document.querySelector('.popup__imageTitle');
const linkInput = document.querySelector('.popup__input_type_link');
const descriptionInput = document.querySelector('.popup__input_type_description');
const buttonCloseImage = document.querySelector('.popup__close-btnShowImage');
const allPopup =  document.querySelectorAll('popup');


/* Тут реализация начальных карточек из массива */


// Place это глагол. 

const placeImage = (item => {
  
  const addImage = imageAddTemplate.cloneNode(true);
  let elementImage = addImage.querySelector('.elements__image');
  addImage.querySelector('.elements__text').textContent = item.name;
  elementImage.alt = item.name;
  elementImage.src = item.link;

  /* Тут реализация открытия картинки в полный размер */

  elementImage.onclick = handleOpenImagePopup = (event) => {
  
    const image = event.target.closest('.elements__element');
    const imageUrl = image.querySelector('.elements__image').src;
    imageFull.src = imageUrl;
   
    const imageNewTitle = image.querySelector('.elements__text').textContent;
    imageTitle.textContent = imageNewTitle;
    imageFull.alt = imageNewTitle;
  
    openPopup(overlayImage);
  };

  const imageLikeButton = addImage.querySelector('.elements__like');
  const imageDelete = addImage.querySelector('.elements__trash');


  imageLikeButton.addEventListener('click', handleLikeButton);

  imageDelete.addEventListener('click', handleDeleteButton);

  return addImage;

});

const handleLikeButton = (e) => {

  e.target.classList.toggle('elements__like_active')

};

const handleDeleteButton = (e) => {

  e.target.closest('.elements__element').remove();

};

initialElements.forEach(item => {
  const newElement = placeImage(item);
  imageAddWrape.prepend(newElement);
});

/* Тут реализация функций закрытия и открытия */

function closePopup(window) {
  window.classList.remove(overlayActiveClass);
  document.removeEventListener('keydown', closePopupEsc);

    
};

function openPopup (window) {
  window.classList.add(overlayActiveClass);
  document.addEventListener('keydown', handleEscUp);

  window.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
      closePopup(window);
    }
  })
};

buttonCloseImage.addEventListener('click', function(){
  closePopup(overlayImage);
})


const closePopupEsc = (window) =>{
  window.classList.remove('popup_active');
}

const handleEscUp = (evt) =>  {
  const activePopup = document.querySelector('.popup_active');
  if (evt.key === 'Escape') {
    closePopupEsc(activePopup);
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

  const newElement = placeImage(newImage);
  imageAddWrape.prepend(newElement);
  closePopup(overlayAddImage)
};

imageAddForm.addEventListener('submit', handleAddImageSubmit);