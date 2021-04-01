const calculator = document.forms.calculator;

let numberOfInputs = 2;
let y = function() {return 0};


// updateOutput() functionality

function updateOutput() {
    calculator.output.value = y(...getInputValues());
}

function getInputValues() {
    return [...selectInputs()].map(input => input.valueAsNumber);
}

function selectInputs() {
    return calculator.querySelectorAll('#inputs input');
}


// addInput() functionality

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


// toggleEditor() functionality

function toggleEditor() {
    calculator.querySelectorAll('.label-text-editor').forEach(e => e.hidden = !e.hidden);
    calculator.querySelectorAll('.editable').forEach(e => e.hidden = !e.hidden);
    calculator.querySelector('#save-labels-btn').toggleAttribute('hidden');
}

function saveLabels() {
    let labelTexts = getLabelTexts();
    calculator.querySelectorAll('.label-text').forEach( (e, i) => e.innerText = labelTexts[i]);
    toggleEditor();
}

function getLabelTexts() {
    return [...selectLabelTexts()].map(input => input.value);
}

function selectLabelTexts() {
    return calculator.querySelectorAll('.label-text-editor');
}

calculator.addEventListener('input', updateOutput);
calculator.querySelector('#add-input-btn').addEventListener('click', addInput);
calculator.querySelector('#edit-labels-btn').addEventListener('click', toggleEditor); // #toggle-label-editor
calculator.querySelector('#save-labels-btn').addEventListener('click', saveLabels);
