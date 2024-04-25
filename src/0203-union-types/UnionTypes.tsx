import React from 'react'

function UnionTypes() {

    // É comum termos funções que podem retornar ou receber tipos direfentes. Para isso usamos a barra vertical string | number | boolean
    let total: string | number = 200;
    total = '300h';

    function isNumber(value: string | number) { // Sempre tentar retornar um tipo de dado
        if(typeof value === 'number') {
            return true;
        } else {
            return false;
        }
    }
    console.log(isNumber(200));
    console.log(isNumber('200'));

    // DOM
    // Funções que selecionam elementos do DOM geralmente retornam null como uma possibilidade de tipo, pois o TypeScript não tem acesso prévio ao DOM para saber se o elemento existe ou não.

    // Retorna HTMLButtonElement | null
    const button = document.querySelector('button');
    // Option chaining
    // Executa click() se button for diferente de null/underfined
    button?.click();

    // Exercício
    // 1 - Crie uma função chamada toNumber
    // 2 - A função pode receber number | string
    // 3 - Se a função receber um número, retorne um número
    // 4 - Se a função receber uma string, retorne um número
    // 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")

    function toNumber(value: number | string) {
        if (typeof value === "number" || typeof value === "string") {
            return value;
        } else {
            throw("Value deve ser um número ou uma string")
        }

    }
    console.log(toNumber(3));
    // console.log(toNumber(true));

  return (
    <div>
        <h1>Union Types</h1>

    </div>
  )
}

export default UnionTypes