// Define basic operations

const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a;
const substract = (a, b) => a - b;
const minus = (a) => -a;

// buttons selectors
const screen = document.querySelector('#screen');
const n0 = document.querySelector('#n0');
const n1 = document.querySelector('#n1');
const n2 = document.querySelector('#n2');
const n3 = document.querySelector('#n3');
const n4 = document.querySelector('#n4');
const n5 = document.querySelector('#n5');
const n6 = document.querySelector('#n6');
const n7 = document.querySelector('#n7');
const n8 = document.querySelector('#n8');
const n9 = document.querySelector('#n9');

// operators selector

const operators = document.querySelectorAll('.operator');

const numbersButtons = [n0, n1, n2, n3, n4, n5, n6, n7, n8, n9];

// values-array
let values = [];

//send button numbers to screen

for (let button in numbersButtons) {
  numbersButtons[button].addEventListener('click', () => {
    if (screen.textContent == 'Bienvenido') {
      screen.textContent = '';
    }
    screen.textContent = screen.textContent + button.toString();
  });
}

// send the key numbers to screen

document.addEventListener('keydown', (e) => {
  if (0 <= e.key && e.key <= 9) {
    if (screen.textContent == 'Bienvenido') {
      screen.textContent = '';
    }
    screen.textContent = screen.textContent + e.key.toString();
  }
});

for (let operator of operators) {
  operator.addEventListener('click', () => {
    if (screen.textContent == 'Bienvenido' || screen.textContent == '') {
      screen.textContent = '';
    } else if (
      screen.textContent[screen.textContent.length - 1] == '%' ||
      screen.textContent[screen.textContent.length - 1] == '+' ||
      screen.textContent[screen.textContent.length - 1] == '-' ||
      screen.textContent[screen.textContent.length - 1] == 'x'
    ) {
    } else {
      values.push(screen.textContent);
      screen.textContent = '';
    }
  });
}
