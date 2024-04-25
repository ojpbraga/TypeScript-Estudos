import React from 'react'

function Exercise() {
    // Conserte a função: 
    function normalizarTexto(texto: string) {
        return texto.trim().toLowerCase();
    }

    // Consertar as funções:
    const input = document.querySelector('input');
    const total = localStorage.getItem('total');

    if(input && total) {
      input.value = total;
      calcularGanho(+input.value);
    }

    function calcularGanho(value: number) {
      const p = document.getElementById('resposta');
      if(p) {
        p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
      }
    }

    function totalMudou() {
      if(input) {
        localStorage.setItem('total', input.value);
        calcularGanho(+input.value);
      }
    }

  return (
    <div>
        <div>
          {normalizarTexto("OOOiiiOOO")}
        </div>
        <div>
          <input type="number" onKeyUp={totalMudou} />
          <p id='resposta'></p>
          <label>Total</label>
        </div>
    </div>
    
  )
}

export default Exercise