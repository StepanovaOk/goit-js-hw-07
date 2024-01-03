const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
const textGreeting = document.querySelector('h1');

nameInput.addEventListener('input', event => {
  const inputValue = nameInput.value.trim();
  nameOutput.textContent = inputValue;
  textGreeting.textContent = `Hello, ${inputValue ? inputValue : 'Anonymous'}!`;
});
