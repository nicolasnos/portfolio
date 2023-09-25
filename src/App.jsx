import React, { useState } from "react";
import { IdiomaProvider, useIdioma } from "./LanguageContext";
import Home from "./Components/Home";
import { flags } from "./assets/flags";
import "./App.scss";

function App() {
  const [language, setLanguage] = useState("eng");
  const [entrace, setEntrace] = useState(false);
  
  return (
    <IdiomaProvider>
      {entrace ? (
        <Home language={language} setLanguage={setLanguage} />
      ) : (
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
                <button key={flag.id} onClick={()=>setLanguage(flag.select)}>
                  <img src={flag.src} alt={flag.alternate} />
                </button>
              )}
            </div>
          </div>
          <button className="logger" onClick={() => setEntrace(true)}>{language === "eng"
                ? "Go To Portfolio"
                : "Ir al portafolio"}</button>
        </main>
      )}
    </IdiomaProvider>
  );
}

export default App;
