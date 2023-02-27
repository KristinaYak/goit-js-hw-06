
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника 
// та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


const AddDecBtn = document.querySelector('[data-action="decrement"]');
console.log(AddDecBtn);
const AddInBtn = document.querySelector('[data-action="increment"]');
console.log(AddInBtn);



const TotalNumber = document.querySelector('value');
let counterValue = 0;

const onClickAddDecBtn = (event) => {
    counterValue -=1;
    TotalNumber.textContent = counterValue;
};

const onClickAddInBtn = (event) => {
    counterValue +=1;
    TotalNumber.textContent = counterValue;
}

AddDecBtn.addEventListener('click', onClickAddDecBtn);
AddInBtn.addEventListener('click', onClickAddInBtn);






    