import React from "react"
import Exercise from "./Exercise";

function App() {
  // Com TypeScript podemos indicar qual será o tipo de dado de uma variável através de anotações (:string).

  const produto: string = "Livro";

  let preco: number = 2000;
  // preco = "200"; // Erro

  const carro: {
    marca: string;
    portas: number;
  } = {
    marca: 'Audi',
    portas: 5,
  };

  // carro.marca = 3 // Erro, tem que ser string
  carro.marca = "Fiat";


  // Inference 
  // O TS consegue inferir o tipo de dado de expressões. Sempre que ele conseguir inferir, você não precisa fazer anotação do dado.
  const veiculo = {
    porte: 5, // Já é pré-definido o number
    carteira: "A", // Já é pré-definido uma string
  }

  // veiculo.porte = "Grande"; // Erro, pois é number
  veiculo.porte = 4;

  //               pode ser boolean ou string
  const barato = preco < 400 ? true : "Produto caro";
  // Fará a inferência se é boolean ou string


  // Funções
  // As anotações serão necessárias quando lidamos com funções
  function somar(a: number, b: number) {
    return a + b;
  }
                                        // tipo do retorno, ele infere, não precisa indicar
  function subtrair(a: number, b: number):string {
    return `${a - b}`;
  }

  console.log(somar(3, 5))
  console.log(subtrair(3, 5));

  const nintendo = {
    nome: 'Nintendo',
    preco: '2000',
  }
  const xbox = {
    nome: "Xbox",
    manete: 5,
  }

  function transformarPreco(produto: {nome: string, preco: string}) {
    produto.preco = "R$ " + produto.preco;
    return produto;
  }
  console.log(transformarPreco(nintendo));
  // console.log(transformarPreco(xbox)); // Erro, pois não tem preço

  return (
    <>
      <p>{produto}</p>
      <p>{preco}</p>
      <Exercise/>
    </>
  )
}

export default App
