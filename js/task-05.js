/*const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

const onInputChange = event => {
  event.currentTarget.value !== ''
    ? (refs.output.textContent = event.currentTarget.value)
    : (refs.output.textContent = 'незнайомець');
};

refs.input.addEventListener('input', onInputChange);*/


const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', () => {
  outputRef.innerText = inputRef.value ? inputRef.value : 'незнайомець';
});