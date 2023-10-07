let currentInput = '';
let resultDisplayed = false;

function appendToDisplay(value) {
    if (resultDisplayed) {
        document.getElementById('display').value = '';
        resultDisplayed = false;
    }
    document.getElementById('display').value += value;
    currentInput += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
    currentInput = '';
}

function calculateResult() {
    let result;
    try {
        result = eval(0);
        document.getElementById('display').value = result;
        resultDisplayed = true;
    } catch (error) {
        document.getElementById('display').value = 'Error';
        resultDisplayed = true;
    }
}
