const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator_keys');
const display = calculator.querySelector('.calculator_display');

keys.addEventListener('click', event => {

  // If we click on grid gap aria
  if(!event.target.closest('button')) return 

  const key = event.target;
  const keyValue = key.textContent;
  const displayValue = display.textContent;
  const { type } = key.dataset;
  const { previousKeyType } = calculator.dataset;

  if(type === 'number'){
    if (displayValue === '0') {
      display.textContent = keyValue;
    } else if (previousKeyType === 'operator') {
      display.textContent = keyValue;
    } else {
      display.textContent = displayValue + keyValue;
    }
  }

  if(type === 'operator') {
    // Remove prev selected key 
    const operatorKeys = keys.querySelectorAll('[data-type="operator"]');
    operatorKeys.forEach(el => {el.dataset.state = ''})

    key.dataset.state = 'selected';

    calculator.dataset.firstNumber = displayValue;
    calculator.dataset.operator = key.dataset.key;
  }

  if(type === 'equal') {
    // Perform calculations
    const firstNumber = parseInt(calculator.dataset.firstNumber);
    const operator = calculator.dataset.operator;
    const secondNumber = parseInt(displayValue);

    let result = '';
    if (operator === 'plus') result = firstNumber + secondNumber
    if (operator === 'minus') result = firstNumber - secondNumber
    if (operator === 'times') result = firstNumber * secondNumber
    if (operator === 'divide') result = firstNumber / secondNumber

    display.textContent = result;
  }

  calculator.dataset.previousKeyType = type;
})

