const value = document.getElementById('value');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const resetButton = document.getElementById('reset');
const alertBox = document.getElementById('alertBox');
const closeAlertButton = document.getElementById('closeAlertButton');

let count = 0;
let intervalId = 0;
let isAlertVisible = false;

const updateValue = () => {
    value.innerHTML = count;
    checkThreshold();
};

const checkThreshold = () => {
    if (count > 10 && !isAlertVisible) {
        isAlertVisible = true;
        alertBox.classList.remove('hidden'); // Muestra la ventana
    }
};

closeAlertButton.addEventListener('click', () => {
    alertBox.classList.add('hidden'); // Oculta la ventana
});

plusButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count += 1;
        updateValue();
    }, 100);
});

minusButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        if (count > 0) {
            count -= 1;
            updateValue();
        }
    }, 100);
});

resetButton.addEventListener('click', () => {
    count = 0;
    isAlertVisible = false; // Restablece la bandera al reiniciar
    updateValue();
});

document.addEventListener('mouseup', () => clearInterval(intervalId));
