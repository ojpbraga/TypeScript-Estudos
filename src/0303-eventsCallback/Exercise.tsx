import React, { useState } from 'react'
import "./style.css";

function Exercise() {
    // Estado dos elementos

    // menu inativo:
    // class="" em nav
    // aria-expanded="false" em button
    // aria-label="Abrir Menu" em button

    // menu ativo:
    // class="active" em nav
    // aria-expanded="true" em button
    // aria-label="Fechar Menu" em button

    const nav = document.querySelector('#nav');
    const buttonNav = document.querySelector('#btn-mobile');
    console.log(buttonNav);

    function handleClick(this: HTMLElement) {
        console.log(this)
        this.classList.toggle("active");
        if(this.classList.contains("active")) {
            buttonNav?.setAttribute("aria-expanded", "true");
            buttonNav?.setAttribute("aria-label", "Fechar Menu");
        } else {
            buttonNav?.setAttribute("aria-expanded", "false");
            buttonNav?.setAttribute("aria-label", "Abrir Menu");
        }
    }

    nav?.addEventListener('click', handleClick);


  return (
    <>
        <header id="header">
        <a id="logo" href="">Logo</a>
  <nav id="nav" className=''>
    <button
      aria-label="Abrir Menu"
      aria-expanded="false"
      aria-haspopup="true"
      aria-controls="menu"
      id="btn-mobile"
    >
      Menu
      <span id="hamburger"></span>
    </button>
    <ul id="menu" role="menu">
      <li><a href="/">Sobre</a></li>
      <li><a href="/">Produtos</a></li>
      <li><a href="/">Portfólio</a></li>
      <li><a href="/">Contato</a></li>
    </ul>
  </nav>
</header>

    </>
  )
}

export default Exercise