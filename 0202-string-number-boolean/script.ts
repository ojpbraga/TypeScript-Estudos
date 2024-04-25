const frase: string = 'Front-End';
const preco = 2000;
const condicao = true;

// typeof
// typeof é um operador de JavaScript que retorna uma string indicando o tipo do dado. Os possíveis valores retornador por typeof são: string, number, boolean, function, objeto, underfined, bigint e symbol. O typeof funciona como um type guard.
// Funciona melhor em tipos primitivos, em obj já não é tão efetivo.

console.log(typeof frase);
console.log(typeof preco);
console.log(typeof {}); // object
console.log(typeof document); // object
console.log(typeof []); // Object
console.log(typeof null); // Object

if(typeof frase === 'string') { // typeguard, pois só ocorre se for verdadeiro
    console.log('Frase é uma string');
} else {
    console.log('Frase não é uma string')
}

// Não confundir string, number e boolean com String, Number e Boolean. Os últimos são as funções construtoras desses tipos de dados, responsáveis pela herança das propriedades e métodos dos mesmos.

const frase1 = new String('Front End'); // Cria um objeto
const frase2 = String('Front End'); // Executa uma função, retorna String
const frase3 = 'Front End'; // string
// todos herdão os métodos da contrutora de string

console.log(typeof frase1);
console.log(typeof frase2);
console.log(typeof frase3);

console.log(typeof String);