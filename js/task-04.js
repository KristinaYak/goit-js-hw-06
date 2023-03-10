
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника 
// та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>


const AddDecBtn = document.querySelector('[data-action="decrement"]');
console.log(AddDecBtn);
const AddInBtn = document.querySelector('[data-action="increment"]');
console.log(AddInBtn);



const TotalNumber = document.querySelector('#value');
let counterValue = 0;

function onClickAddDecBtn (event) {
    counterValue -=1;
    TotalNumber.textContent = counterValue;
};

function onClickAddInBtn (event) {
    counterValue +=1;
    TotalNumber.textContent = counterValue;
}

AddDecBtn.addEventListener('click', onClickAddDecBtn);
AddInBtn.addEventListener('click', onClickAddInBtn);






    