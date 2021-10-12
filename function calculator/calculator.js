 const numberButtons = document.querySelectorAll('[data-number]')
  const operationButtons = document.querySelectorAll('[data-operation]')
  const equalsButton = document.querySelector('[data-equals]')
  const deleteButton = document.querySelector('[data-delete]')
  const allClearButton = document.querySelector('[data-all-clear]')
  const previousOperandTextElement = document.querySelector('[data-previous-operand]')
  const currentOperandTextElement = document.querySelector('[data-current-operand]')
  

  
  
  
  
  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      appendNumber(button.innerText)
      updateDisplay();
    })
  })
  
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      // console.log(button.innerText);
      chooseOperation(button.innerText);
      updateDisplay();
    })
  })
  
  equalsButton.addEventListener('click', button => {
    compute();
    updateDisplay();
  })
  
  allClearButton.addEventListener('click', button => {
    clear();
    updateDisplay();
  })
  
  deleteButton.addEventListener('click', button => {
    deletetodo();
    updateDisplay();
  })

  function clear() {
    currentOperand = ''
    previousOperand = ''
    operation = undefined
  }

  function deletetodo() {
    currentOperand = currentOperand.toString().slice(0, -1)
  }

  function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return
    currentOperand = currentOperand.toString() + number.toString()
  }

  function chooseOperation(operation) {
    if (currentOperand === '') return
    if (previousOperand !== '') {
      compute();
    }
    operation = operation;
    previousOperand = currentOperand;
    currentOperand = '';
  }

  function compute() {
    let computation;
    const prev = parseFloat(previousOperand)
    const current = parseFloat(currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (operation) {
      case '+':
        computation = prev + current;
        console.log(computation);
        break
      case '-':
        computation = prev - current;
        break
      case '*':
        computation = prev * current;
        break
      case '÷':
        computation = prev / current;
        break
      default:
        return
    }
    currentOperand = computation
    operation = undefined
    previousOperand = ''
  }

  function getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }

  function updateDisplay() {
    currentOperandTextElement.innerText =
      getDisplayNumber(currentOperand)
    if (operation != null) {
      previousOperandTextElement.innerText =
        `${getDisplayNumber(previousOperand)} ${operation}`
    } else {
      previousOperandTextElement.innerText = ''
    }
  }