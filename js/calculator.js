let input = document.querySelector('.input');

function insert(num) {
  if (input.textContent == 0) {
    input.textContent = '';
    input.textContent = input.textContent + num;
  } else {
    input.textContent = input.textContent + num;
  }
}

function clean() {
  input.textContent = '0';
}

function back() {
  let exp = input.textContent;

  input.textContent = exp.substring(0, exp.length - 1);

  if (input.textContent == 0) {
    input.textContent = '0';
  }
}

function equal() {
  const exp = input.textContent;
  input.textContent = eval(exp);
}
