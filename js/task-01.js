"use strict";

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст 
// заголовку 
// елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).


const listItem = document.querySelectorAll('li.item');

console.log(`Number of categories: ${listItem.length}`);


const ul = document.querySelectorAll('#categories>li');

ul.forEach(el => {

  console.log(
    `Category: ${el.firstElementChild.textContent}, 
    Elements:  ${el.lastElementChild.children.length}`,
  );
});