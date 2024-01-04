function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberInput = querySelector('.number');
const btnCreate = document.querySelector('button[data-action="create"]');
const btnDestroy = document.querySelector('button[data-action="destroy"]');
const boxesContainer = querySelector('.boxes');

btnCreate.addEventListener('click', () => {
  boxesContainer.insertAdjacentHTML(afterend, numberInput);
});

numberInput.reset();
