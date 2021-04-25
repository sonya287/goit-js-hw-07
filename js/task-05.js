const refs = {
    input: document.querySelector("#name-input"),
    output: document.querySelector("#name-output"),
};

const onInputChange = event => {
    refs.output.textContent = event.currentTarget.value;
};

refs.input.addEventListener('input', onInputChange);