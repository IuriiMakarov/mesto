function enableValidation (config) {
    const form =  document.querySelector(config.formSelector);

    form.addEventListener('input', (evt) => handleFormimput(evt, config));
};

function handleFormimput (evt, config) {
    const form = evt.currentTarget;
    const input = evt.target;

    setCustomError(input, config);

    setFieldError(input);

    setSubmitButtonState(form, config);
}

function setCustomError(input, config) {
    const validity = input.validity;

    input.setCustomValidity('');



    if (validity.tooShort ||  validity.tooLong) {
        const currentLength = input.value.length;
        const min = input.getAttribute('minlength');
        const max = input.getAttribute('maxlength');
        input.classList.add(config.inputErrorClass);
        input.setCustomValidity(`Строка имеет неверную длину. Введено ${currentLength} символов, а должно быть от ${min} до ${max}`);
    } else if (validity.valueMissing) {
        input.setCustomValidity('Вы пропустили это поле.');
        
    }else {
        input.classList.remove(config.inputErrorClass);
    }

    if (validity.typeMismatch) {
        input.setCustomValidity(`Введите ссылку`);
        input.classList.add(config.inputErrorClass);
    } 
}


function setFieldError(input) {
    const span = document.querySelector(`#${input.id}-error`);
    span.textContent = input.validationMessage;
}

function setSubmitButtonState(form, config) {
    const button = form.querySelector(config.submitButtonSelector);
    const isValid = form.checkValidity();


    if(isValid) {
        button.classList.add(config.errorClass);
        button.classList.remove(config.inactiveButtonClass);
        button.removeAttribute('disabled')
    }else {
        button.classList.add(config.inactiveButtonClass);
        button.classList.remove(config.errorClass);
        button.setAttribute('disabled', 'disabled')
    }
}

enableValidation({
    formSelector: '.popup__form[name="edit"]',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__save-btn_valid',
    inactiveButtonClass: 'popup__save-btn_invalid',
    submitButtonSelector: '.popup__save-btn',
  });

enableValidation({
    formSelector: '.popup__form[name="addPhoto"]',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__save-btn_valid',
    inactiveButtonClass: 'popup__save-btn_invalid',
    submitButtonSelector: '.popup__save-btn'
  });