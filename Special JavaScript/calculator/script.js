let display = "0";
let previousValue = null;
let operation = null;
let waitingForOperand = false;
const MAX_DISPLAY = 999999999999;

const displayElement = document.getElementById("display");

function updateDisplay() {
  displayElement.textContent = display;
}

function handleNumber(num) {
  if (display === "Error") {
    display = num;
    updateDisplay();
    return;
  }

  if (waitingForOperand) {
    display = num;
    waitingForOperand = false;
  } else {
    display = display === "0" ? num : display + num;
  }
  updateDisplay();
}

function handleDecimal() {
  if (display === "Error") {
    display = "0.";
    updateDisplay();
    return;
  }

  if (waitingForOperand) {
    display = "0.";
    waitingForOperand = false;
  } else if (display.indexOf(".") === -1) {
    display = display + ".";
  }
  updateDisplay();
}

function handleOperation(nextOperation) {
  const inputValue = parseFloat(display);

  if (display === "Error") {
    previousValue = null;
    operation = nextOperation;
    waitingForOperand = true;
    display = "0";
    updateDisplay();
    return;
  }

  if (previousValue === null) {
    previousValue = inputValue;
  } else if (operation) {
    const currentValue = previousValue || 0;
    let newValue;

    switch (operation) {
      case "+":
        newValue = currentValue + inputValue;
        break;
      case "-":
        newValue = currentValue - inputValue;
        break;
      case "×":
        newValue = currentValue * inputValue;
        break;
      case "÷":
        if (inputValue === 0) {
          display = "Error";
          previousValue = null;
          operation = null;
          waitingForOperand = true;
          updateDisplay();
          return;
        }
        newValue = currentValue / inputValue;
        break;
      default:
        return;
    }

    if (Math.abs(newValue) > MAX_DISPLAY) {
      display = "Error";
      previousValue = null;
      operation = null;
      waitingForOperand = true;
      updateDisplay();
      return;
    }

    previousValue = newValue;
    display = String(newValue);
    updateDisplay();
  }

  waitingForOperand = true;
  operation = nextOperation;
}

function handleEquals() {
  const inputValue = parseFloat(display);

  if (display === "Error") {
    return;
  }

  if (previousValue !== null && operation) {
    let result;

    switch (operation) {
      case "+":
        result = previousValue + inputValue;
        break;
      case "-":
        result = previousValue - inputValue;
        break;
      case "×":
        result = previousValue * inputValue;
        break;
      case "÷":
        if (inputValue === 0) {
          display = "Error";
          previousValue = null;
          operation = null;
          waitingForOperand = true;
          updateDisplay();
          return;
        }
        result = previousValue / inputValue;
        break;
      default:
        return;
    }

    if (Math.abs(result) > MAX_DISPLAY) {
      display = "Error";
      previousValue = null;
      operation = null;
      waitingForOperand = true;
      updateDisplay();
      return;
    }

    display = String(result);
    previousValue = null;
    operation = null;
    waitingForOperand = true;
    updateDisplay();
  }
}

function handleClear() {
  display = "0";
  previousValue = null;
  operation = null;
  waitingForOperand = false;
  updateDisplay();
}
