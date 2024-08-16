import React, {useState, useContext} from "react";
import { IdiomaProvider, useIdioma } from "../LanguageContext";
import CV from "../assets/CV.pdf";
import HV from '../assets/HV.pdf'
import { flags } from "../assets/flags";

function Header({language, setLanguage}) {

  return (
    <IdiomaProvider>
    <nav id="home">
      <div className="flagBox">
      {flags.map((flag)=>
        <button key={flag.id} onClick={() => setLanguage(flag.select)}>
          <img src={flag.src} alt={flag.alternate} />
        </button>
      )}
      </div>
      <ul>
        {/*al hacer click sobre cada uno de los elementos de la lista, va a redirigir a la parte indicada de la pagina */}
        <li>
          <a href="#about">{(language === "eng") ? "About" : "Sobre mi"}</a>
        </li>
        <li>
          <a href="#projects">{(language === "eng") ? "Projects" : "Proyectos"}</a>
        </li>
        <li>
          <a href="#contact">{(language === "eng") ? "Contact" : "Contacto"}</a>
        </li>
        <li>
          <a href={(language === "eng") ? CV : HV} download="CV Nicolas Olmos">
          {(language === "eng") ? "My CV" : "Mi Hoja de vida"}
          </a>
        </li>
      </ul>
    </nav>
    </IdiomaProvider>
  );
}

export default Header;
