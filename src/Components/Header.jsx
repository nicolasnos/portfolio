import React from "react";

function Header() {
  return (
    <nav id="home">
      <ul>
        {/*al hacer click sobre cada uno de los elementos de la lista, va a redirigir a la parte indicada de la pagina */}
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
