// Класс карточки

export class Card {
  constructor (item, selector, callback) {
    this._name = item.name;
    this._link = item.link;

    this._selector = selector;
    this._callback = callback;
  }

  _getTemplate() {
    const cardElement = this._selector.content.querySelector('.elements__element').cloneNode(true);
    return cardElement;
  }

  createCard() {

    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.elements__image');
    this._setEventListeners();
    this._cardImage.src = this._link;
    this._element.querySelector('.elements__text').textContent = this._name;
    this._cardImage.setAttribute('alt', this._name);
    return this._element;
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', () => {
      this._callback({name: this._name, link: this._link});
    });
    const deleteItem = this._element.querySelector('.elements__trash');
    deleteItem.addEventListener('click', (event) => {
      this._handleDeleteButton(event);
    });
  
    this._likeButton = this._element.querySelector('.elements__like');
    this._likeButton.addEventListener('click', (event) => {
        this._handleLikeButton(event);
    });
    return this._element;
}

// реализация лайков и удаления

  _handleLikeButton = (e) => {

    this._likeButton.classList.toggle('elements__like_active')
  
  };

  _handleDeleteButton = (e) => {

    this._element.remove();
    this._element = null;
  
  };

}
