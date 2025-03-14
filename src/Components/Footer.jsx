import React, { useContext } from "react";
import { IdiomaContext } from "../LanguageContext";

function Footer() {
  const { language } = useContext(IdiomaContext);
  return (
    <footer className="footer">
      <p>
        {language === "eng" ? "Powered by " : "Desarrollado por "}
        <a
          href="https://www.linkedin.com/in/nicolas-olmos-a7a1ba261/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nicolas Olmos
        </a>{" "}
        2025
      </p>
    </footer>
  );
}

export default Footer;
