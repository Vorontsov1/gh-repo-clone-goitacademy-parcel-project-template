const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let timerId = null;
startBtn.addEventListener('click', onColorSwitcher);
stopBtn.addEventListener('click', offColorSwitcher);


