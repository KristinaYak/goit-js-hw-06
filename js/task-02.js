const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const elemUl = document.getElementById('ingredients');
console.log(elemUl);

for ( const ingredient of ingredients ) {
const elemLi = document.createElement('li');
elemLi.classList.add('item');
elemLi.textContent = ingredient;
elemUl.appendChild(elemLi);
};
