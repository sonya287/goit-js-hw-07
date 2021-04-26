const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

const onInputChange = event => {
  event.currentTarget.value !== ''
    ? (refs.output.textContent = event.currentTarget.value)
    : (refs.output.textContent = 'незнайомець');
};

refs.input.addEventListener('input', onInputChange);