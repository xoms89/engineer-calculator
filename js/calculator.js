// Поле ввода
let input = document.querySelector('.input');

// Сохраненная часть до возведения в степень.
let power = '';

// Вставить символ.
function insert(num) {
  if (input.textContent == 0) {
    input.textContent = '';
    input.textContent += num;
  } else {
    input.textContent += num;
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
// В случае вічисления произвольной степени
  if (input.textContent.includes('^')) {
    let tmp = input.textContent.split('^');
    let num = eval(power);
    let pow = +tmp[1]; // "+" перед значением перобразовывает его в число
    input.textContent = Math.pow(num, pow)
    power = '';
    return;
  }

  if (exp) {
    input.textContent = eval(exp);
  }

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
      input.textContent += Math.PI.toFixed(8);
      break;

    case 'e':
      input.textContent += Math.E.toFixed(8);
      break;

  }
}

// Квадратный коренб, квадрат, -1 степень, произвольная степень
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

    case '^':
      power = input.textContent;
      input.textContent += '^';
      break;
    }
}

// Факториал числа.
function factorial(n) {
  return (n !== 1) ? n * factorial(n - 1) : 1;
}
function fact() {
  input.textContent = factorial(eval(input.textContent));
}

// Логарифмы
function log(name) {

  switch (name) {
    case 'lg':
      input.textContent = Math.log10(eval(input.textContent)).toFixed(8);
      break;

    case 'ln':
      input.textContent = Math.log(eval(input.textContent)).toFixed(8);
      break;
  }
}

// Переключение с градусов на радианы
document.querySelector('.type').addEventListener('click', function() {
    if (document.querySelector('.type').textContent == "deg") {
        this.textContent = "rad";
        console.log('Градусы')
    } else if (document.querySelector('.type').textContent == "rad") {
        this.textContent = "deg";
        console.log('Радианы')
    }
})

// Тригонометрические функуции
function trigonometry(name) {

  switch (name) {
    case 'sin':
    if (document.querySelector('.type').textContent == "deg") {
      // В градусах
      input.textContent = parseFloat(Math.sin(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
    } else {
      // В радианах
      input.textContent = Math.sin(eval(input.textContent)).toFixed(8);
    }
      break;

    case 'cos':
      if (document.querySelector('.type').textContent == "deg") {
      // В градусах
      input.textContent = parseFloat(Math.cos(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
    } else {
      // В радианах
      input.textContent = Math.cos(eval(input.textContent)).toFixed(8);
    }
      break;

     case 'tan':
      if (document.querySelector('.type').textContent == "deg") {
      // В градусах
      input.textContent = parseFloat(Math.tan(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
    } else {
      // В радианах
      input.textContent = Math.tan(eval(input.textContent)).toFixed(8);
    }

     case 'ctg':
      if (document.querySelector('.type').textContent == "deg") {
      // В градусах
      input.textContent = parseFloat(1/Math.tan(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
    } else {
      // В радианах
      input.textContent = 1/Math.tan(eval(input.textContent)).toFixed(8);
    }
  }
}
