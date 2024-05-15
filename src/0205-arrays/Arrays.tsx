import React from 'react'

function Arrays() {
    // Arrays
    // Uma array é definida com o tipo de dado(s) que ela possui, seguida por []

    const numeros = [10, 30, 40, 5, 3, 30];
    const valores = [10, 'Taxas', 40, 'Produto', 3, 30];

    function maiorQue10(data: number[]) {
        return data.filter(number => number > 10);
    }
    console.log(maiorQue10(numeros));


    function filtrarValores(data: (number | string)[]) {
        return data.filter((valor) => typeof valor === "number")
    }
    console.log(filtrarValores(valores));


    const filmes = [
        ["A Chegada", 80],
        ["Interrestelar", 120]
    ]
    function filterMovies(movies: Array<string | number>) {
        return movies.filter(movie => console.log(movie));
    }
    // console.log(filterMovies(filmes));


    // Sintaxe Alternativa
    // Existe uma sintaxe alternativa, onde usamos Array<type>. Sendo type o tipo de dado dentro da array.

    // Exercicio
    //Defina a interface da API: https://api.origamid.dev/json/cursos.json e mostre os dados na tela.
    // Existem apenas dois níveis de cursos, Iniciante (iniciante) e Avançado (avancado). Se for para iniciante pinte o título de azul, para avançado pinte de vermelho.

    async function fetchCursos() {
        const response = await fetch('https://api.origamid.dev/json/cursos.json');
        const data = await response.json();
        mostrarCursos(data);
      }
      
      fetchCursos();

      interface InterfaceCouses {
        nome: string;
        horas: number
        aulas: number;
        gratuito: boolean;
        tags: string[];
        idAula: number[];
        nivel: "iniciante" | "avancado";
      }
      
      function mostrarCursos(cursos: InterfaceCouses[]) {
        return cursos.map(curso => {
            // return ( 
            //     document.body.innerHTML +=
            //     `<div>
            //         <h1 style="background: ${curso.nivel === "iniciante" ? "blue" : "red"}">Nome: ${curso.nome}</h1>
            //         <p>Horas: ${curso.horas}</p>
            //         <h3>Gratuito: ${true ? "Sim" : "Não"}</h3>
            //         <ul>
            //             ${curso.tags.map(tag => `<li>${tag}</li>`)}
            //         </ul>
            //         <h3>Nível: ${curso.nivel}</h3>
            //     </div>`
            // )
        });
      }
      

  return (
    <h1>Arrays</h1>
    
  )
}

export default Arrays