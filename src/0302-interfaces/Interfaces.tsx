import React from 'react'

function Interfaces() {

    // querySelector
    // Quando selecionamos um elemento do DOM com o querySelector, o objeto retornado dependerá da string que passarmos no método.

    document.querySelector('video'); // HTMLVideoElement
    document.querySelector('img') // HTMLImageElement

    const link1 = document.querySelector('a');
    const link2 = document.querySelector('#origamid');

    console.log(link1?.href);
    console.log(link2?.href);
    // O elemento não está sendo específicado, id pode pertencer a qualquer tipo de Element.


    // querySelectorAll
    // O querySelectorAll retorna uma NodeList de elementos. Não confundir o nome da interface NodeListOf com o nome da classe NodeList.

    let links = document.querySelectorAll('.link');

    console.log(links instanceof NodeList); // Classe NodeList
    const arrayLinks = Array.from(links);
    const anchorLinks = arrayLinks.filter(link => {
      link instanceof HTMLAnchorElement
    });
    console.log(anchorLinks);

    links.forEach((link) => {
        if(link instanceof HTMLAnchorElement) {
            console.log(link.href);
        } else {
            console.log(typeof link);
        }
    })


    // Exercício
    // 1 - Selecione os elementos com a classe link.

    // 2 - Crie uma função que deve ser executada para cada elemento.

    // 3 - Modificar através da função o estilo da color e border.

    const linksElement = document.querySelectorAll(".link");

    function handleClick(link: HTMLElement) {
      link.style.color = "red";
      link.style.border = "1px solid red";
    }

    linksElement.forEach(link => {
      if(link instanceof HTMLElement) {
        link.addEventListener("click", (event) => {
          event.preventDefault();
          handleClick(link);
        })
      }
    })

    


  return (
    <h1>Interfaces</h1>
  )
}

export default Interfaces