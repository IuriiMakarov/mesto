export class Popup {
    constructor (selector) {
        this._popup = document.querySelector(selector);
        this._handleEscClosePopup = this._handleEscClosePopup.bind(this);
    }


    _handleEscClosePopup(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    };

    open() {

        this._popup.classList.add('popup_active');
        document.addEventListener('keydown', this._handleEscClosePopup);

    }

    close() {
        this._popup.classList.remove('popup_active');
        document.removeEventListener('keydown', this._handleEscClosePopup);
    }

    setEventListeners() {
        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close-btn')) {
                this.close();
            }
        });
    }

}
