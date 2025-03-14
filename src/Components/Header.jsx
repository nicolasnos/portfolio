import React, { useContext} from "react";
import { IdiomaContext } from "../LanguageContext";
import {headerEng, headerEsp} from '../assets/text'
import { flags } from "../assets/flags";

function Header() {
  const { language, setLanguage } = useContext(IdiomaContext);
  const selectedLanguage = (language === "eng") ? headerEng : headerEsp;
  return (
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
          <a href="#about">{selectedLanguage.About}</a>
        </li>
        <li>
          <a href="#projects">{selectedLanguage.Projects}</a>
        </li>
        <li>
          <a href="#contact">{selectedLanguage.Contact}</a>
        </li>
        <li>
          <a href={selectedLanguage.CV } download="CV Nicolas Olmos">
          {selectedLanguage.CVScript}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
