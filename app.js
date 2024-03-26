const input = document.getElementById('input');
const button = document.getElementById('btn');
const hint = document.getElementById('hint');

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}


let randomNumber = generateRandomNumber();

button.addEventListener('click', () => {
    const userNumber = parseInt(input.value);


    if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
        hint.textContent = 'Введите число от 1 до 10.';
        return;
    }


    if (userNumber === randomNumber) {
        hint.textContent = 'Вы угодали число!';
        hint.className = '';
    } else if (userNumber < randomNumber) {
        hint.textContent = 'Загаданное число больше.';
        hint.className = 'hint';
    } else {
        hint.textContent = 'Загаданное число меньше.';
        hint.className = 'hint--less';
    }
});
