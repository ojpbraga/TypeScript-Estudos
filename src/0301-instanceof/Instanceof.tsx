import React from 'react'

function InstanceofClass() {

    // Class 
    // Em JS, Classes class são função construtoras que geram objetos. Quando definimos uma classe, o TypeScript gera a interface do objeto produzido pela mesma.

    class Product {
        name: string;
        price: number;

        constructor(name: string, price: number) {
            this.name = name;
            this.price = price;
        }

        priceCorrect() {
            return `R$ ${this.price+20}`;
        }

    }

    const book = new Product("God of Wards", 400);
    console.log(book.priceCorrect());


    // Existem funções que retornam diferentes tipos de objetos. Com a palavra chave instanceof podemos verificar se um objeto é uma instancia (foi construído ou herda) de uma função construtora (classe).

    console.log(book instanceof Product);
    console.log(book instanceof Array);

    class Game extends Product {
        players: number;

        constructor(name:string, price:number, players: number) {
            super(name, price)
            this.players = players;
        }
    }

    class Book extends Product {
        author: string;

        constructor(name:string, price: number, author: string) {
            super(name, price);
            this.author = author;
        }
    }

    function searchProduct(search: string) {
        if(search === "O Hobbit") {
            return new Book("O Hobbit", 100,"J. R. R. Tolkien");
        }
        if(search === "Dark Souls") {
            return new Game("Dark Souls", 200, 1);
        }
        return null;
    }

    const product = searchProduct("O Hobbit");
    // product?.author // Erro
    if(product instanceof Book) {
        console.log(product.author);
    }

    if(product instanceof Game) {
        console.log(product.players);
    }

    if(product instanceof Product) {
        console.log(product.name);
    }


    // Extends
    // O instanceof verifica se a função construtora herda de outra (extends)


    // instanceof e interface
    // O instanceof é um operador que existe no JavaScript. Se você definir a interface de um objeto apenas com o interface e não possuir uma classe construtora do mesmo, não será possível utilizar o instanceof na interface.

    interface Car {
        brand: string,
        wheels: number
    }

    const Honda: Car = {
        brand: "Honda Fiat",
        wheels: 8,
    }

    // if(Honda typeof Car) {

    // } // Erro, pois não temos uma função construtora, não é uma classe

    // Exercise
    // 1 - Selecione o link utilizando o método getElementById.
    // 2 - Substitua o href do link (HTMLAnchorElement) de http:// para https://.

    const link = document.getElementById("anchor");
    if(link instanceof HTMLAnchorElement) {
        link.href = (link.attributes[0].value.replace("http://", "https://")); // or link.href.replace...
    }
    console.log(link);
    
    // Exercise 2
    // const links = document.querySelectorAll('.link');
    // const arrayLinks: HTMLAnchorElement[] = Array.from(links);
    // arrayLinks.forEach(link => {
    //     link.addEventListener("click", () => {
    //         handleClick(link);
    //     })
    // })

    // function handleClick(element: HTMLAnchorElement) {
    //     event?.preventDefault();
    //     element.style.color = "red";
    //     element.style.border = "2px solid red";
    // }

  return (
    <div>instanceof</div>
  )
}

export default InstanceofClass