// Поле ввода
let input = document.querySelector('.input');

// Вставить символ.
function insert(num) {
  if (input.textContent == 0) {
    input.textContent = '';
    input.textContent = input.textContent + num;
  } else {
    input.textContent = input.textContent + num;
  }
}

// Очистить все поле.
function clean() {
  input.textContent = '0';
}

// Удалить символ.
function back() {
  let exp = input.textContent;

  input.textContent = exp.substring(0, exp.length - 1);

  if (input.textContent == 0) {
    input.textContent = '0';
  }
}

// Посчитать выражение.
function equal() {
  let exp = input.textContent;
  input.textContent = eval(exp);
}

// Для вычислеия процетов.
function percent() {
  input.textContent = eval(input.textContent) / 100;
}

// Для добавления констант.
function constant(name) {

   if (input.textContent !== 0 && input.textContent.includes('+') || input.textContent.includes('-') || input.textContent.includes('*') || input.textContent.includes('/')) {
     input.textContent = input.textContent;
   } else if (input.textContent !== 0) {
    input.textContent = '';
   }


  switch (name) {
    case 'pi':
      input.textContent = input.textContent + Math.PI.toFixed(8);
      break;

    case 'e':
      input.textContent = input.textContent + Math.E.toFixed(8);
      break;

  }
}

// Квадратный коренб, квадрат, -1 степень.
function operation(name) {

  switch (name) {
    case 'sqrt':
      input.textContent = Math.sqrt(eval(input.textContent));
      break;

    case 'sqr':
      input.textContent = Math.pow(eval(input.textContent), 2);
      break;

    case '^-1':
      input.textContent = Math.pow(eval(input.textContent), -1);
      break;
    }
}


