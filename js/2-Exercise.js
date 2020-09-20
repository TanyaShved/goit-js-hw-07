const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.querySelector('ul');
console.log(listEl);

const ingredientsEl = ingredients.forEach(ingredient => {
  let navLinkEl = document.createElement('li');
  navLinkEl.textContent = ingredient;
  listEl.appendChild(navLinkEl);
});

// console.log(ingredientsEl);
