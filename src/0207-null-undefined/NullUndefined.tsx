import React from 'react'

function NullUndefined() {

  // Null
  // É um tipo primitivo que representa a ausência de valor. É comum em funções do DOM que fazem uma busca, retornarem null quando não são bem sucedidas.

  const button = document.querySelector('button');
  const config = localStorage.getItem('config');
  // console.log(button);
  // console.log(config);

  // No TypeScript, sempre que falarmos/tentar acessar um método com um elemento que pode retornar null, precisamos verificar se o elemento existe ou não.

  if(button !== null) button.click();
  if(button) button.click();
  button?.click();

  // Bug:
  // console.log(typeof null);


  // Undefined
  // Underfined representa variáveis/propriedades que foram instanciadas, porém os seus valores ainda não foram definidos.

  let total;
  // console.log(total); // undefined

  let data = {};
  // console.log(data.nome) // undefined

  function test() {}
  console.log(test()); // undefined
  if(total){
    // console.log("Total definido") 
  } else {
    // console.log("Total Indefido")
  }


  // Propriedades Opcionais
  // Podemos definir propriedades opcionais utilizando opcional?: string. Quando opcional, elas poderão sempre retornar como um valor definido ou undefined.

  interface Product {
    nome?: string;
  }

  const livro: Product = {};
  const jogo: Product = {
    nome: "Ragnarok"
  }

  livro.nome?.toLowerCase();
  jogo.nome?.toLowerCase();


  // strictNullChecks
  // sem o strictNullChecks como true, o TypeScript assume que qualquer valor pode incluir null | underfined e consequentement para de checar casos onde realmente o null | underfined podem ser retornados.

  // tsconfig.json

  // {
  //   "compilerOptions": {
  //     "target": "ESNext",
  //     "strict": true, // já incluso no strict
  //     "strictNullChecks": true
  //   }
  // }
  

  return (
    <h1>Null and Undefined</h1>
  )
}

export default NullUndefined