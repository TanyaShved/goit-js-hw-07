const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

const totalLenght = inputEl.getAttribute('data-length');

function onInputBlur() {
  inputEl.value.length == totalLenght
    ? inputEl.classList.add('valid')
    : inputEl.classList.add('invalid');
}
