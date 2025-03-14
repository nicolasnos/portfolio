import React, {useState, useContext,createContext, useEffect} from 'react'

export const IdiomaContext = createContext();

export const IdiomaProvider = ({ children }) => {
    const [language, setLanguage] = useState("eng");

    useEffect(() => {
      sessionStorage.setItem("language", language);
    }, [language]);

  return (
    <IdiomaContext.Provider value={{
      language,
      setLanguage
    }}>
      {children}
    </IdiomaContext.Provider>
  );
};

export const useIdioma = () => {
  return useContext(IdiomaContext);
};