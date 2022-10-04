const getElementValueBasedOnIndex = (index) => {
  const elementTarget =
    document.getElementsByClassName('calculator-button')[index]
  const inputResult = document.getElementById('result')
  inputResult.value += elementTarget.innerHTML
}

const addSymbols = (index) => {
  const inputResult = document.getElementById('result')
  const elementTarget = document.getElementsByClassName(
    'calculator-button-symbols'
  )[index]
  const toArray = inputResult.value.split('')
  if (
    toArray[toArray.length - 1] === '+' ||
    toArray[toArray.length - 1] === '-' ||
    toArray[toArray.length - 1] === '*' ||
    toArray[toArray.length - 1] === '/' ||
    toArray[toArray.length - 1] === 'C' ||
    toArray[toArray.length - 1] === '%'
  ) {
    return
  }
  inputResult.value += elementTarget.innerHTML
}

const calculate = () => {
  const inputResult = document.getElementById('result')
  if (inputResult.value === '') return
  inputResult.value = eval(inputResult.value)
}

const clear = () => {
  const inputResult = document.getElementById('result')
  inputResult.value = ''
}

const removeLast = () => {
  const inputResult = document.getElementById('result')
  const toArray = inputResult.value.split('')
  toArray.pop()
  inputResult.value = toArray.join('')
}

document.getElementById('remove').addEventListener('click', removeLast)

document.getElementById('=').addEventListener('click', calculate)

document.getElementById('C').addEventListener('click', clear)

document.getElementById('+').addEventListener('click', () => {
  addSymbols(0)
})
document.getElementById('-').addEventListener('click', () => {
  addSymbols(1)
})
document.getElementById('*').addEventListener('click', () => {
  addSymbols(2)
})
document.getElementById('%').addEventListener('click', () => {
  addSymbols(3)
})
document.getElementById('/').addEventListener('click', () => {
  addSymbols(4)
})
document.getElementById('1').addEventListener('click', () => {
  getElementValueBasedOnIndex(0)
})
document.getElementById('2').addEventListener('click', () => {
  getElementValueBasedOnIndex(1)
})
document.getElementById('3').addEventListener('click', () => {
  getElementValueBasedOnIndex(2)
})
document.getElementById('4').addEventListener('click', () => {
  getElementValueBasedOnIndex(3)
})
document.getElementById('5').addEventListener('click', () => {
  getElementValueBasedOnIndex(4)
})
document.getElementById('6').addEventListener('click', () => {
  getElementValueBasedOnIndex(5)
})
document.getElementById('7').addEventListener('click', () => {
  getElementValueBasedOnIndex(6)
})
document.getElementById('8').addEventListener('click', () => {
  getElementValueBasedOnIndex(7)
})
document.getElementById('9').addEventListener('click', () => {
  getElementValueBasedOnIndex(8)
})
document.getElementById('0').addEventListener('click', () => {
  getElementValueBasedOnIndex(9)
})
