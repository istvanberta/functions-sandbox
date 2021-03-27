const calculator = document.forms.calculator;

let y = function() {return 0};

function updateOutput() {
    calculator.output.value = y(...getInputValues());
}

function selectInputs() {
    return calculator.querySelectorAll('#inputs input');
}

function getInputValues() {
    return [...selectInputs()].map(input => input.valueAsNumber);
}

calculator.addEventListener('input', updateOutput);
