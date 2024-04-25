const input = document.querySelector('input');
const total = localStorage.getItem('total');

if(input && total) {
    input.value = total;
    calcularGanho(+input.value);
}

function calcularGanho(value) {
  const p = document.querySelector('p');
  if(p) {
    p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
  }
}

function totalMudou() {
    if(input) {
        localStorage.setItem('total', input.value);
        calcularGanho(input.value);
    }
}

if(input) {
    input.addEventListener('keyup', totalMudou);
}
