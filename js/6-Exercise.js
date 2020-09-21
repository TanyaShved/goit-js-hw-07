const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

const totalLenght = inputEl.getAttribute('data-length');

function onInputBlur() {
  if (inputEl.value.length == totalLenght) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
}
