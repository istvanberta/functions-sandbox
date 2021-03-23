const input = document.querySelector('#input');
const output = document.querySelector('#output');

let x = 0;
let y = function(x) {return x};

function updateOutput() {
    output.value = Number(y(Number(input.value)).toFixed(2));
}

input.addEventListener('input', updateOutput);
