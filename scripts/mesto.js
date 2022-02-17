const buttonEdit = document.querySelector('.profile__editButton');
const buttonClose = document.querySelector('.popup__close-btn');
const overlay = document.querySelector('.popup');
const overlayActiveClass = 'popup_active';
const buttonSave = document.querySelector('.popup__save-btn');
const profileTitle = document.querySelector('.profile__title');
const profileSubTitle = document.querySelector('.profile__sub-title');
const formElement = document.querySelector('.popup');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');

const addButton = document.querySelector('.profile__addButton');
const addButtonClose = document.querySelector('.addImage__close-btn');
const addOverlay = document.querySelector('.addImage');
const addOverlayActiveClass = 'addImage_active';
const addButtonSave = document.querySelector('.addImage__save-btn');
const addFormElement = document.querySelector('.addImage');
const imageNameInput = document.querySelector('.addImage__input_type_name');
const linkInput = document.querySelector('.addImage__input_type_link');
const addImageForm = document.querySelector('.addImage__container');

const addImageWrape = document.querySelector('.elements');
const addImageTemplate = document.querySelector('#addImageTemplate').content.querySelector('.elements__element');
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
const openImageActive = 'showImage_active';
const imageDeleteBtn = document.querySelector('.showImage__close-btn');


const handleOpenImagePopup = (event) => {
  
  const imageFull = document.querySelector('.showImage__image');
  const imageTitle = document.querySelector('.showImage__title');
  overlayImage.classList.add(openImageActive);

  const image = event.target.closest('.elements__element');
  const imageUrl = image.querySelector('.elements__image').src;
  imageFull.src = imageUrl;
 
  const imageNewTitle = image.querySelector('.elements__text').textContent;
  imageTitle.textContent = imageNewTitle;
};



function closeFullImage() {
  overlayImage.classList.remove(openImageActive)    
};

imageDeleteBtn.addEventListener('click', function(){

  closeFullImage()

});



const renderImage = (item => {
  
  const addImage = addImageTemplate.cloneNode(true);
  addImage.querySelector('.elements__text').textContent = item.name;
  addImage.querySelector('.elements__image').src = item.link;
  const imageLikeButton = addImage.querySelector('.elements__like');
  const imageDelete = addImage.querySelector('.elements__trash');


  imageLikeButton.addEventListener('click', handleLikeButton)

  imageDelete.addEventListener('click', handleDeleteButton)
  
  addImageWrape.prepend(addImage)

});

const handleLikeButton = (e) => {

  e.target.classList.toggle('elements__like_active')

};

const handleDeleteButton = (e) => {

  e.target.closest('.elements__element').remove();

};

function closeImageAdd() {
  addOverlay.classList.remove(addOverlayActiveClass)    
};

addButton.addEventListener('click', function(){
  addOverlay.classList.add(addOverlayActiveClass);
});

addButtonClose.addEventListener('click', function(){
  closeImageAdd()
});


initialElements.forEach(item => {
  renderImage(item)
});

const handleAddImageSubmit = (e) => {
  e.preventDefault();
  const addImage = {
    name: imageNameInput.value,
    link: linkInput.value
  }

  renderImage(addImage);
  closeImageAdd();
};

addImageForm.addEventListener('submit', handleAddImageSubmit);



function closeProfilePopup() {
  overlay.classList.remove(overlayActiveClass)    
};

buttonEdit.addEventListener('click', function(){
  overlay.classList.add(overlayActiveClass);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubTitle.textContent;
});

buttonClose.addEventListener('click', function(){
  closeProfilePopup()
}); 

document.addEventListener('keydown', function(event){
  if (event.code === 'Escape') {
    closeProfilePopup()
  }
});

buttonSave.addEventListener('click', function(){
  closeProfilePopup()
})   

function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubTitle.textContent = jobInput.value;
  
};

formElement.addEventListener('submit', handleProfileFormSubmit);

