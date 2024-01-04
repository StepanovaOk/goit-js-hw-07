function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberInput = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');
let initialSize = 30;

const createdBoxes = sum => {
  boxesContainer.innerHTML = '';
  for (let i = 0; i < sum; i++) {
    const box = document.createElement('div');
    box.style.width = initialSize + 'px';
    box.style.height = initialSize + 'px';
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    initialSize += 10;
  }
};

const create = () => {
  const sum = Number(numberInput.value);
  if (sum <= 100 && sum > 0) {
    createdBoxes(sum);
    numberInput.value = '';
  }
};

const destroyBoxes = () => {
  boxesContainer.innerHTML = '';
};

btnCreate.addEventListener('click', create);
btnDestroy.addEventListener('click', destroyBoxes);
