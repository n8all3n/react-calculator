function inputDigit(digit, calculator) {
    if (calculator.waitingForSecondOperand === true) {
      calculator.displayValue = digit;
      calculator.waitingForSecondOperand = false;
    } else {
        if (calculator.displayValue === '-0') {
            calculator.displayValue = '-' + digit;
        } else if (calculator.displayValue === '0') {
            calculator.displayValue = digit;
        } else {
            calculator.displayValue = calculator.displayValue + digit;
        }
    }

    return calculator;
}

function resetCalculator(calculator) {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;

    return calculator
}

function inputDecimal(calculator) {
	if (calculator.waitingForSecondOperand === true) return;
  
  // If the `displayValue` does not contain a decimal point
  if (!calculator.displayValue.includes('.')) {
    // Append the decimal point
    calculator.displayValue += '.';
  }

  return calculator;
}

function handleOperator(nextOperator, calculator) {
    const performCalculation = {
        '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
      
        '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
      
        '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
      
        '-': (firstOperand, secondOperand) => firstOperand - secondOperand,

        '%': (firstOperand, secondOperand) => firstOperand / 100,

        '=': (firstOperand, secondOperand) => secondOperand
      };


    const inputValue = parseFloat(calculator.displayValue);
  
    if (nextOperator === '%') {
        const result = performCalculation['%'](inputValue);
        calculator.displayValue = String(result);
        return calculator;
    }

    if (calculator.operator && calculator.waitingForSecondOperand)  {
      calculator.operator = nextOperator;
      return;
    }
  
    if (calculator.firstOperand == null) {
      calculator.firstOperand = inputValue;
    } else if (calculator.operator) {
      const currentValue = calculator.firstOperand || 0;
      const result = performCalculation[calculator.operator](currentValue, inputValue);
  
      calculator.displayValue = String(result);
      calculator.firstOperand = result;
    }
  
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;

    return calculator;
  }
  
  
  function handlePositiveNegative(calculator) {
    if (calculator.waitingForSecondOperand === true) return;

    if (calculator.displayValue === '0') {
        calculator.displayValue = '-0';
    } else {
        calculator.displayValue = (-1 * parseFloat(calculator.displayValue)).toString();
    }
    return calculator;
  }


export default {
    inputDigit: inputDigit,
    resetCalculator: resetCalculator,
    inputDecimal: inputDecimal,
    handleOperator: handleOperator,
    handlePositiveNegative: handlePositiveNegative
}