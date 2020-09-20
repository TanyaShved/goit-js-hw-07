const navEl = document.querySelectorAll('.item');
console.log(`В списке ${navEl.length} категории.`);

const categoriesEl = navEl.forEach(nav =>
  console.log(`Категория: ${nav.firstElementChild.textContent}
Количество элементов: ${nav.lastElementChild.children.length}`),
);
