import './index.css'; 

import {FormValidator} from '../components/FormValidator.js';
import {Card} from '../components/Card.js';
import {nameInput, jobInput, buttonEdit, imageAddButton, cardTemplate, config} from '../utils/utils.js';
import {Section} from '../components/Section.js';
import {initialElements} from '../utils/initialElements.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js'
import {PopupWithImage} from '../components/PopupWithImage.js';


const popupProfileForm = new PopupWithForm('#popup_profileEdit', handleProfileFormSubmit);
popupProfileForm.setEventListeners();

const popupAddForm = new PopupWithForm('#popup_addImage', addImage);
popupAddForm.setEventListeners();

const editFormValidation = new FormValidator(config, editForm);
editFormValidation.enableValidation();

const addImageFormValidation = new FormValidator(config, addPhotoForm);
addImageFormValidation.enableValidation();

const popupWithImage = new PopupWithImage('.popup_showImage');
popupWithImage.setEventListeners();

const userInfoProfile = new UserInfo({nameSelector: '.profile__title', jobSelector: '.profile__sub-title'});

const section = new Section ({items: initialElements,
  renderer: addCard},
 '.elements');
section.rendererItem();


// Создание класса карточки

function handleCreateCard (item) {
  const newElement = new Card(item, cardTemplate, openPopupWithImage)
  return newElement.createCard()
}

// Открытие карточки

function openPopupWithImage(item) {
  popupWithImage.open(item);
}

// Добавление карточки 

function addCard(item) {
  const element = handleCreateCard(item);
  section.addItem(element);
};

function addImage(item) {
  addCard(item);
  popupAddForm.close();
}

// Слушатели на открытие

buttonEdit.addEventListener('click', function() {
  const userInfo = userInfoProfile.getUserInfo();
  nameInput.value = userInfo.name;
  jobInput.value = userInfo.info;
  editFormValidation.resetValidation();
  popupProfileForm.open();
});

imageAddButton.addEventListener('click', function() {
  addImageFormValidation.resetValidation();
  popupAddForm.open();
});

// Редактирование профиля 

function handleProfileFormSubmit (item) {
  userInfoProfile.setUserInfo(item);
  popupProfileForm.close();
};