
export class FormValidator {
      constructor(config, selector){

          this._form = config.formSelector;
          this._submitButtonSelector = config.submitButtonSelector;
          this._inactiveButtonClass = config.inactiveButtonClass;
          this._inputErrorClass = config.inputErrorClass;
          this._errorClass = config.errorClass;
          this._inputSelector = config.inputSelector;

          this._selector = selector;
          this._inputArray = Array.from(this._selector.querySelectorAll(this._inputSelector));
          this._buttonElement = this._selector.querySelector(this._submitButtonSelector);
      }

      _enableInputError(inputElement, message) {
          const errorMessage = this._selector.querySelector(`.${inputElement.id}-error`);
          inputElement.classList.add(this._inputErrorClass);
          errorMessage.textContent = message;
          errorMessage.classList.add(this._errorClass)
      }

      _disableInputError(inputElement) {
        const errorMessage = this._selector.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorMessage.textContent = '';
        errorMessage.classList.remove(this._errorClass)
      }

      _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
          this._enableInputError(inputElement, inputElement.validationMessage);
        } else {
          this._disableInputError(inputElement);
        }
      };

      _setEventListener() {
        this._changeButtonState(this._inputArray, this._buttonElement);
        this._inputArray.forEach((inputElement) => {
          inputElement.addEventListener('input', () => {
            this._checkInputValidity(inputElement);
            this._changeButtonState(this._inputArray, this._buttonElement);
          });
        });
      }

      _changeButtonState() {
        if (this._isInvalidInput(this._inputArray)) {
          this._buttonElement.classList.add(this._inactiveButtonClass);
          this._buttonElement.disabled = true;
        } else {
          this._buttonElement.classList.remove(this._inactiveButtonClass);
          this._buttonElement.disabled = false;
        }
      }

      _isInvalidInput() {
        return this._inputArray.some((inputElement) => {
          return !inputElement.validity.valid;
          });
      }

      enableValidation() {
        this._selector.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListener();
        };
      
      resetValidation() {
          this._changeButtonState();
          this._inputArray.forEach((inputElement) => {
            this._disableInputError(inputElement);
          });
        }
}; 