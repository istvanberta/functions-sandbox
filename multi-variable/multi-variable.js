const calculator = document.forms.calculator;

let numberOfInputs = 2;
let y = function() {return 0};

function updateOutput() {
    calculator.output.value = y(...getInputValues());
}

function getInputValues() {
    return [...selectInputs()].map(input => input.valueAsNumber);
}

function selectInputs() {
    return calculator.querySelectorAll('#inputs input');
}

function addInput() {
    let newInput = calculator.querySelector('#inputs>.input').cloneNode(true);
    newInput = setNextInputNumber(newInput);
    calculator.querySelector('#inputs').append(newInput);
}

function setNextInputNumber(input) {
    numberOfInputs++;
    input.querySelector('input').id = 'input' + numberOfInputs;
    input.querySelector('label').htmlFor = 'input' + numberOfInputs;
    input.querySelector('.variable').textContent = 'x' + numberOfInputs;
    return input;
}

calculator.addEventListener('input', updateOutput);
calculator.querySelector('#add-input-btn').addEventListener('click', addInput);
