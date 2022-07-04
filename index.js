const plus_button = document.querySelector('.plus');
const minus_button = document.querySelector('.minus');
const reset_button = document.querySelector('.reset');
const display = document.querySelector('h2');

let counter = 0;

console.log(plus_button)

plus_button.addEventListener('click', () => {
    counter++;
    display.innerText = counter;
});

minus_button.addEventListener('click', () => {
    counter--;
    display.innerText = counter;
});

reset_button.addEventListener('click', () => {
    counter = 0;
    display.innerText = counter;
});