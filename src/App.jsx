import React, { useState, useContext } from "react";
import { IdiomaContext } from "./LanguageContext";
import Home from "./Components/Home";
import { flags } from "./assets/flags";
import "./App.scss";
import { Link } from "react-router-dom";

function App() {
  const { language, setLanguage } = useContext(IdiomaContext);
  const [entrace, setEntrace] = useState(false);

  const handleChangeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    sessionStorage.setItem("language", newLanguage);
  };
  const selectedLanguage = (language === "eng") ? "Welcome to my Portfolio" : "Bienvenidos a mi portafolio";

  return (
    <>
      
        <main>
          <h1>
            {language === "eng"
              ? "Welcome to my Portfolio"
              : "Bienvenidos a mi portafolio"}
          </h1>
          <div className="languageSelector">
            <h2>
              {language === "eng"
                ? "Select your language"
                : "Selecciona el lenguaje"}
            </h2>
            <div className="flags">
              {flags.map((flag)=>
                <button key={flag.id} onClick={()=>handleChangeLanguage(flag.select)}>
                  <img src={flag.src} alt={flag.alternate} />
                </button>
              )}
            </div>
          </div>
          <Link className="logger" to={"/Home"} >{selectedLanguage}</Link>
        </main>
      
      </>
  );
}

export default App;
