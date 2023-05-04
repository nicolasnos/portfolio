import React from "react";
import CV from "../assets/CV.pdf";
import logo from "../assets/Nlogo.png";

function Header() {
  return (
    <nav id="home">
      <div className="logoBox">
        <img src={logo} alt="logo de nicolas" />
      </div>
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
        <li>
          <a href={CV} download="CV Nicolas Olmos">
            My CV
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
