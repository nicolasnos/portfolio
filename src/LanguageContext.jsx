import React, {useState, useContext,createContext} from 'react'

const IdiomaContext = createContext();

export const IdiomaProvider = ({ children }) => {
  const [userLanguage, setUserLanguage] = useState("esp");
  console.log("ola")

  function handleLanguageChange  (newLanguage) {
    setUserLanguage(newLanguage);
  };
  const contextValue = {
    idioma: userLanguage,
    cambiarIdioma: handleLanguageChange,
  };
  return (
    <IdiomaContext.Provider value={contextValue.idioma}>
      {children}
    </IdiomaContext.Provider>
  );
};

export const useIdioma = () => {
  return useContext(IdiomaContext);
};