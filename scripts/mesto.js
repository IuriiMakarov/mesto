var buttonEdit = document.querySelector('.profile__editButton');
var buttonClose = document.querySelector('.popup__closebtm');
var overlay = document.querySelector('.overlay');
var overlayActiveClass = 'overlay_active';
var buttonSave = document.querySelector('.popup__savebtm');

buttonEdit.addEventListener('click', function(){
  overlay.classList.add(overlayActiveClass);
});

buttonClose.addEventListener('click', function(){
  overlay.classList.remove(overlayActiveClass)    
});

document.addEventListener('keydown', function(event){
  if (event.code === 'Escape') {
    overlay.classList.remove(overlayActiveClass)
  }
});

buttonSave.addEventListener('click', function(){
    overlay.classList.remove(overlayActiveClass);
})   

let formElement = document.querySelector('.popup');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__job');

function formSubmitHandler (evt) {
  evt.preventDefault();
  document.querySelector('.profile__title').textContent = nameInput.value;
  document.querySelector('.profile__sub-title').textContent = jobInput.value;
  
};

formElement.addEventListener('submit', formSubmitHandler); 
