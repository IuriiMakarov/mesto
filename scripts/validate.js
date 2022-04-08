function enableValidation (config) {
    const form =  document.querySelector(config.formSelector);

    form.addEventListener('input', (evt) => handleFormimput(evt, config));
};

function handleFormimput (evt, config) {
    const form = evt.currentTarget;
    const input = evt.target;

    setCustomError(input, config);

    setFieldError(input);

    setSubmitButtonState(form);
}

function setCustomError(input, config) {
    const validity = input.validity;

    input.setCustomValidity('');



    if (validity.tooShort ||  validity.tooLong) {
        const currentLength = input.value.length;
        const min = input.getAttribute('minlength');
        const max = input.getAttribute('maxlength');
        input.classList.add('popup__input_type_error');
        input.setCustomValidity(`Строка имеет неверную длину. Введено ${currentLength} символов, а должно быть от ${min} до ${max}`);
    } else if (validity.valueMissing) {
        input.setCustomValidity('Вы пропустили это поле.');
        
    }else {
        input.classList.remove('popup__input_type_error');
    }

    if (validity.typeMismatch) {
        input.setCustomValidity(config.inputErrorClass);
        input.classList.add('popup__input_type_error');
    } 
}


function setFieldError(input) {
    const span = document.querySelector(`#${input.id}-error`);
    span.textContent = input.validationMessage;
}

function setSubmitButtonState(form) {
    const button = form.querySelector('.popup__save-btn');
    const isValid = form.checkValidity();


    if(isValid) {
        button.classList.add('popup__save-btn_valid');
        button.classList.remove('popup__save-btn_invalid');
        button.removeAttribute('disabled')
    }else {
        button.classList.add('popup__save-btn_invalid');
        button.classList.remove('popup__save-btn_valid');
        button.setAttribute('disabled', 'disabled')
    }
}

enableValidation({
    formSelector: '.popup__form[name="edit"]',
    inputErrorClass: 'popup__input_type_error'
  });

enableValidation({
    formSelector: '.popup__form[name="addPhoto"]',
    inputErrorClass: 'Введите ссылку'
  });