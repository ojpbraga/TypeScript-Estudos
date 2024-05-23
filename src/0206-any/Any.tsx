function Any() {

    // Any
    // O any indica que o dado pode conter qualquer tipo de dado do Typescript. Devemos evitar ao máximo o uso do any, pois o mesmo remove todas as seguranças e conveniências que o TS fornece.
    // É possível configurar o TS para não permitir a criação de any

    function normalize(text: any) {
        // return text.(...) // Não autocompleta
        return text.trim().toLowerCase();
    }
    console.log(normalize("Text Exemple"));
    // console.log(normalize(200)); // Erro, pois não temos métodos de string no tipo number


    // Uso do any
    // Em alguns casos o any faz sentido, como no caso da função json() onde qualquer tipo de dado pode ser retornado, dependendo d API que acessamos.

    async function fetchJson(url: string) {
        const response = await fetch(url);
        const data = await response.json(); // data vem sempre como any, pois não sabe o que vai vir no retorno
        manipulingData(data); // Não reclama, pois any (qualquer coisa) pode ser do tipo object também
    }
    fetchJson('https://api.origamid.dev/json/cursos.json');

    function manipulingData(data: {nome: string}) {
        console.log(data.nome);
    };


    // Any e Erros
    // Usar o any pode quebrar toda a aplicação
    interface Curso {
        nome: string;
        horas: number;
    }

    function mostrarCursos(cursos: Curso[]) {
        // cursos.forEach((curso) => {
        //     document.body.innerHTML += `
        //         <h2>${curso.nome}</h2>
        //         <h2>${curso.horas}</h2>
        //     `;
        // })
    }
    mostrarCursos([{nome: "JS", horas: 37}]);

    const dados: any = "O any gera problemas";
    // mostrarCursos(dados); // Erro, deixa passar porque o any pode ser de qualquer tipo


  return (
    <h1>Any</h1>
  )
}

export default Any