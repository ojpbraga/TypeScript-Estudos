import React from 'react'

function TypesInterfaces() {

    // Object
    // É possível definir a forma (shape) de um objeto usando uma sintaxe parecida com a de criação de objetos : {}
    function preencherDados(dados: {
        nome: string;
        preco: number;
        teclado: boolean;
    }) {
        return ( document.body.innerHTML += `
            <div>
                <h2>${dados.nome}</h2>
                <p>${dados.preco}</p>
                <p>Inclui teclado: ${dados.teclado ? "Sim" : "Não"}</p>
            </div> `
        ) 
    }

    // console.log(preencherDados({
    //     nome: 'João',
    //     preco: 2000,
    //     teclado: true
    // }))

    // Type
    // A palavra chave type cria um atalho para um tipo customizado.
    // Não é comum utilizar nesse tipo de exemplo.
    type NumberOrString = number | string;
    let total: NumberOrString = 10;
    total = "200";

    type Produto = {
        nome: string;
        preco: number;
        teclado: boolean;
    }

    const computador: Produto = {
        nome: "RX2",
        preco: 4000,
        teclado: false
    }
    function showData(dados: Produto) {
        console.log(dados.nome);
        console.log(dados.preco);
        console.log(dados.teclado);
    }
    showData({nome: "João", preco: 1200, teclado: true});

    type Categorias = 'design' | 'codigo' | 'descod';
    function pintarCategora(categoria: Categorias) {
        console.log(categoria);
        // if(categoria === 'desings') // categoria não pode ser designs, então o TS avisa sobre esse erro.
    }
    // pintarCategora('teste'); // Erro
    pintarCategora('design');

    // Interface
    // interface funciona na maioria dos casos da mesma forma que type. Porém possui uma sintaxe diferente. As intefaces são geralmente utilizadas para definirmos objetos.
    // A diferença será explorada em aulas mais avançadas.
    // Usaremos interface para definir objetos e type para tipos primitivos
    interface InterfaceCoberta {
        tipoFios: string,
        altura: number,
        largura: number
    }
    type TypeCoberta = {
        tipoFios: string,
        altura: number,
        largura: number
    }
    function showCoberta(coberta: InterfaceCoberta) { // Mostra a estrutura com ctrl
        console.log(coberta.tipoFios);
        console.log(coberta.altura);
        console.log(coberta.largura);
    }
    showCoberta({tipoFios: "lã", altura: 80, largura: 180});


    // Exercício
    interface Empresa {
        nome: string,
        fundacao: number,
        pais: string
    }

    interface InterfaceData {
        nome: string,
        preco: number,
        descricao: string,
        garantia: string,
        seguroAcidentes: boolean,
        empresaFabricante: Empresa,
        empresaMontadora: Empresa
    }

    async function fetchProduct() {
        const response = await fetch('https://api.origamid.dev/json/notebook.json'); // verificar o que está sendo retornado
        const data = await response.json();
        showProduct(data);
    }
      
      fetchProduct();
      
    function showProduct(data: InterfaceData) {
        // document.body.innerHTML = `
        //   <div>
        //     <h2>${data.nome}</h2>
        //     <p>${data.preco}</p>
        //     <div>
        //         <h3>Fabricante: ${data.empresaFabricante.nome}</h3>
        //     </div>
        //   </div>
        // `;
    }


  return (
    <>
        <h1>Types e Interfaces</h1>
        <p>{}</p>
    </>
    
  )
}

export default TypesInterfaces