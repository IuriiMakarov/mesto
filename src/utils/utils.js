const overlayActiveClass = 'popup_active';
const overlayImage = document.querySelector('.popup_showImage');
const imageFull = document.querySelector('.popup__image');
const imageTitle = document.querySelector('.popup__imageTitle');
const buttonEdit = document.querySelector('.profile__editButton');
const formEdit = document.querySelector('.popup__editForm');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('.popup__input_type_job');
const imageAddButton = document.querySelector('.profile__addButton');
const imageAddForm = document.querySelector('.popup__addImageForm');
const cardTemplate = document.querySelector('#addImageTemplate');

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
  inactiveButtonClass: 'popup__save-btn_invalid',
  submitButtonSelector: '.popup__save-btn'
};

export {nameInput, jobInput, overlayImage, overlayActiveClass, imageFull, imageTitle, buttonEdit, imageAddButton, formEdit, imageAddForm, cardTemplate, config}