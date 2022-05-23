import {Popup} from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector);
        this._imageCaption = this._popup.querySelector('.popup__imageTitle');
        this._image = this._popup.querySelector('.popup__image');
    }

    open(item) {
        this._imageCaption.textContent = item.name;
        this._image.src = item.link;
        this._image.setAttribute('alt', item.name);
        super.open();
    }
}