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

  //* Is this a number key??
  if(type === 'number'){
    if (displayValue === '0') {
      display.textContent = keyValue;
    } else if (previousKeyType === 'operator') {
      display.textContent = keyValue;
    } else {
      display.textContent = displayValue + keyValue;
    }

    calculator.dataset.previousKeyType = 'number';
  }

  //* Is this a number operator??
  if(type === 'operator') {
    console.log(key);

    calculator.dataset.previousKeyType = 'operator';
  }
})

