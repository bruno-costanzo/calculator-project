// buttons selectors
const calcBtn = document.querySelectorAll('.calc-btn');
const miniScreen = document.querySelector('.miniScreen');
const screen = document.querySelector('#screen');

// actions buttons
const actionButtons = document.querySelectorAll('.actionbut');
const cleanButton = document.querySelector('.clean');
const onButton = document.querySelector('.on-button');
const mirror = document.querySelector('#mirror');

// numb buttons
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
const decimalPoint = document.querySelector('.decimal');

// operators selector

const operators = document.querySelectorAll('.operator');

const numbersButtons = [
  n0,
  n1,
  n2,
  n3,
  n4,
  n5,
  n6,
  n7,
  n8,
  n9,
  actionButtons[2],
  decimalPoint,
];

// define ans
let ans = 0;
const ansButton = document.querySelector('#ans');

// values-array
let values = [];

//send button numbers to screen

for (let button in numbersButtons) {
  numbersButtons[button].addEventListener('click', () => {
    if (button == 10) {
      screen.textContent = screen.textContent.substring(
        0,
        screen.textContent.length - 1
      );
    } else {
      if (screen.textContent == 'Bienvenido' || screen.textContent == ans) {
        screen.textContent = '';
      }
      if (button == 11) {
        screen.textContent = screen.textContent + '.';
      } else {
        screen.textContent = screen.textContent + button.toString();
      }
    }
  });
}

// send the key numbers to screen

document.addEventListener('keydown', (e) => {
  if (0 <= e.key && e.key <= 9) {
    if (screen.textContent == 'Bienvenido' || screen.textContent == ans) {
      screen.textContent = '';
    }
    screen.textContent = screen.textContent + e.key.toString();
    for (let btn of calcBtn) {
      if (e.key == btn.innerHTML) {
        btn.classList.add('keydown');
        setTimeout(() => {
          btn.classList.toggle('keydown');
        }, 100);
      }
    }
  }
});

function uploadToMiniScreen(digits, operator) {
  if (operator == '=') {
    miniScreen.innerText += digits + operator;
    let number = eval(
      miniScreen.innerText
        .substring(0, miniScreen.innerText.length - 1)
        .toString()
    );
    if (number % 1 !== 0) {
      number = number.toFixed(2);
    }
    screen.textContent = number;
    miniScreen.innerText = '';
    ans = screen.textContent;
  } else {
    if (operator == 'x') {
      operator = '*';
    } else if (operator == '%') {
      operator = '/';
    }
    miniScreen.innerText += digits + operator;
    screen.innerText = '';
  }
  // screen.textContent = eval(
  //   miniScreen.innerText
  //     .substring(0, miniScreen.innerText.length - 1)
  //     .toString()
  // );
}

for (let operator of operators) {
  operator.addEventListener('click', (e) => {
    if (screen.textContent == 'Bienvenido' || screen.textContent == '') {
      screen.textContent = '';
    } else if (
      e.target.innerText == '%' ||
      e.target.innerText == '+' ||
      e.target.innerText == '-' ||
      e.target.innerText == 'x' ||
      e.target.innerText == '='
    ) {
      uploadToMiniScreen(screen.textContent, e.target.innerText);
    }
    // uploadCount(e)
    else {
      values.push(screen.textContent);
      screen.textContent = '';
    }
  });
}

// Answer button

ansButton.addEventListener('click', () => {
  if (screen.textContent == ans) {
    screen.textContent = '';
  }
  if (ans !== 0) {
    screen.textContent = screen.textContent + ans;
  }
});

// clean button

cleanButton.addEventListener('click', () => {
  screen.textContent = '';
  miniScreen.textContent = '';
  ans = 0;
});

// on Button
onButton.addEventListener('click', () => {
  mirror.classList.toggle('onoff');
  if (mirror.classList[0] !== 'onoff') {
    screen.textContent = 'Bienvenido';
    miniScreen.textContent = '';
    ans = 0;
  } else {
    screen.textContent = 'Goodbye!';
  }
});
