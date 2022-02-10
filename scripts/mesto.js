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
