import { openPopup, closePopup, overlayImage, overlayActiveClass, imageFull, imageTitle } from "./utils.js";

// Класс карточки

export class Card {
  constructor (name, link, selector) {
    this._name = name;
    this._link = link;

    this._selector = selector;
  }

  _getTemplate() {
    const cardElement = this._selector.content.querySelector('.elements__element').cloneNode(true);

    return cardElement;
  }

  createCard() {
    this._element = this._getTemplate();

    this._element.querySelector(".elements__image").src = this._link;
    this._element.querySelector(".elements__text").textContent = this._name;
    this._element.querySelector(".elements__image").alt = this._name;

    // Листенер на лайк
    this._likeButton = this._element.querySelector('.elements__like'); 
    this._likeButton.addEventListener('click', this._handleLikeButton);

    // Листенер на удаление

    this._deleteButton = this._element.querySelector('.elements__trash');
    this._deleteButton.addEventListener('click', this._handleDeleteButton)

    // реализация открытие открытия карточки

    this._image = this._element.querySelector('.elements__image');
    console.log(this._image)
    this._image.addEventListener('click', function (event) {

      const imageLink = event.target.src;
      const imageName = event.target.alt;

      openPopup(overlayImage);
      imageFull.src = imageLink;
      imageFull.alt = imageName;
      imageTitle.textContent = imageName;

    })
  }

  //вставляем новую карточку
  renderCard(imageAddWrape){
    imageAddWrape.prepend(this._element);
  }

// реализация лайков и удаления

  _handleLikeButton = (e) => {

    this._likeButton.classList.toggle('elements__like_active')
  
  };

  _handleDeleteButton = (e) => {

    this._element.remove();
  
  };

}
