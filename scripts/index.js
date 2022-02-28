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
const buttonSaveImage = document.querySelector('.popup__imageSave-btn');
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
const overlayImage = document.querySelector('.showImage');
const imageOpenActive = 'showImage_active';
const imageDeleteBtn = document.querySelector('.showImage__close-btn');
const imageAddButton = document.querySelector('.profile__addButton');
const imageAddForm = document.querySelector('.popup__addImageForm');
const overlayAddImage = document.querySelector('.popup_addImage');
const overlay = document.querySelector('.popup');
const imageFull = document.querySelector('.showImage__image');
const imageTitle = document.querySelector('.showImage__title');
const linkInput = document.querySelector('.popup__input_type_link');
const descriptionInput = document.querySelector('.popup__input_type_description');

/* Тут реализация добавления фотографий */

imageAddButton.addEventListener('click', function(){

  overlayAddImage.classList.add(overlayActiveClass);
  descriptionInput.value = '';
  linkInput.value = '';
  
});


function handleAddImageSubmit (e) {
  e.preventDefault();
  const newImage = {
    name: descriptionInput.value,
    link: linkInput.value
  }

  placeImage(newImage);
};

imageAddForm.addEventListener('submit', handleAddImageSubmit);


/* Тут реализация редактирования профиля */

buttonEdit.addEventListener('click', function(){
  overlayProfile.classList.add(overlayActiveClass);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubTitle.textContent;
});

function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubTitle.textContent = jobInput.value;
  
};

formEdit.addEventListener('submit', handleProfileFormSubmit);

/* Тут реализация открытия картинки в полный размер */

const handleOpenImagePopup = (event) => {
  
  overlayImage.classList.add(imageOpenActive);

  const image = event.target.closest('.elements__element');
  const imageUrl = image.querySelector('.elements__image').src;
  imageFull.src = imageUrl;
 
  const imageNewTitle = image.querySelector('.elements__text').textContent;
  imageTitle.textContent = imageNewTitle;
};



function closeFullImage() {
  overlayImage.classList.remove(imageOpenActive)    
};

imageDeleteBtn.addEventListener('click', function(){

  closeFullImage()

});

/* Тут реализация начальных карточек из массива */


const placeImage = (item => {
  
  const addImage = imageAddTemplate.cloneNode(true);
  addImage.querySelector('.elements__text').textContent = item.name;
  addImage.querySelector('.elements__image').src = item.link;
  const imageLikeButton = addImage.querySelector('.elements__like');
  const imageDelete = addImage.querySelector('.elements__trash');


  imageLikeButton.addEventListener('click', handleLikeButton)

  imageDelete.addEventListener('click', handleDeleteButton)
  
  imageAddWrape.prepend(addImage)

});

const handleLikeButton = (e) => {

  e.target.classList.toggle('elements__like_active')

};

const handleDeleteButton = (e) => {

  e.target.closest('.elements__element').remove();

};

initialElements.forEach(item => {
  placeImage(item)
});

/* Тут реализация функций закрытия */

function closeProfilePopup() {
  overlay.classList.remove(overlayActiveClass);
};

buttonClose.addEventListener('click', function(){
  closeProfilePopup()
}); 

buttonSave.addEventListener('click', function(){
  closeProfilePopup()
})   

function closeAddImagePopup() {
  overlayAddImage.classList.remove(overlayActiveClass);
};

buttonCloseAdd.addEventListener('click', function(){
  closeAddImagePopup()
}); 

buttonSaveImage.addEventListener('click', function(){
  closeAddImagePopup()
})   

