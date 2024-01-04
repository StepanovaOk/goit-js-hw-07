const btnChange = document.querySelector('.change-color');
const backgroundSpan = document.querySelector('.color');
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnChange.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  backgroundSpan.textContent = newColor;
});
