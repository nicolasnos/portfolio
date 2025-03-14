import React, { useState, useContext, createContext, useEffect } from "react";

export const IdiomaContext = createContext();

export const IdiomaProvider = ({ children }) => {
  const [language, setLanguage] = useState();

  useEffect(() => {
    let sessionLanguage = sessionStorage.getItem("language");
    setLanguage(sessionLanguage || "es");
  }, []);

  const handleChangeLanguage = (lang) => {
    setLanguage(lang);
    sessionStorage.setItem("language", lang);
  };

  return (
    <IdiomaContext.Provider
      value={{
        language,
        setLanguage,
        handleChangeLanguage,
      }}
    >
      {children}
    </IdiomaContext.Provider>
  );
};

export const useIdioma = () => {
  return useContext(IdiomaContext);
};
