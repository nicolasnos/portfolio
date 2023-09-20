import React, {useState, useContext} from "react";
import { idioma } from "../LanguageContext";
import CV from "../assets/CV.pdf";
import { flags } from "../assets/flags";

function Header() {
  const language = useContext(idioma)
  const [userLanguage, setUserLanguage] = useState(language);

  return (
    <idioma.Provider value={userLanguage}>
    <nav id="home">
      <div className="flagBox">
      {flags.map((flag)=>
        <button key={flag.id} onClick={() => setUserLanguage(flag.select)}>
          <img src={flag.src} alt={flag.alternate} />
        </button>
      )}
      </div>
      <ul>
        {/*al hacer click sobre cada uno de los elementos de la lista, va a redirigir a la parte indicada de la pagina */}
        <li>
          <a href="#about">{(userLanguage === "eng") ? "About" : "Sobre mi"}</a>
        </li>
        <li>
          <a href="#projects">{(userLanguage === "eng") ? "Projects" : "Proyectos"}</a>
        </li>
        <li>
          <a href="#contact">{(userLanguage === "eng") ? "Contact" : "Contacto"}</a>
        </li>
        <li>
          <a href={CV} download="CV Nicolas Olmos">
          {(userLanguage === "eng") ? "My CV" : "Mi Hoja de vida"}
          </a>
        </li>
      </ul>
    </nav>
    </idioma.Provider>
  );
}

export default Header;
