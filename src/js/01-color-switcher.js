const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let timerId = null;

startBtn.addEventListener('click', onColorSwitcher);
stopBtn.addEventListener('click', offColorSwitcher);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createColor() {
    document.body.style.backgroundColor = getRandomHexColor();
}

function onColorSwitcher() {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    timerId = setInterval(createColor, 1000);
}

function offColorSwitcher() {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(timerId);
}

