import {Popup} from './Popup.js' 

export class PopupWithForm extends Popup {

    constructor(selector, submitCallback) {
        super(selector);
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__input');
        this._submitCallback = submitCallback;
    }

    _getInputValues() {
        const inputValues = {};
        this._inputList.forEach((input) => {
            inputValues[input.name] = input.value;
        });
        console.log(inputValues)
        return inputValues;
    }

    _submitHandler = () => {
        this._submitCallback(this._getInputValues());
    }


    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', this._submitHandler);
    }

    close() {
        super.close();
        this._form.reset();
    }

}