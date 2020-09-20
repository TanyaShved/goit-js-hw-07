const controlFrontSize = document.querySelector('#font-size-control');
console.log(controlFrontSize);

const spanText = document.querySelector('#text');
console.log(spanText);

controlFrontSize.oninput = function () {
  spanText.style.fontSize = controlFrontSize.value + 'px';
};
