import React from "react";
import vite from "../assets/vite.svg";
import sas from "../assets/sass.svg";
import react from "../assets/React.svg";
import js from "../assets/js.svg";

function About() {
  return (
    <section id="about">
      <h2>
        En este portafolio podran encontrar una muestra de mi trabajo como
        desarrollador Front End
      </h2>
      <article>
        <p>Esta pagina ha sido desarrollada gracias a tecnologias como</p>
        <figure>
          <img src={vite} alt="imagen de vite" />
          <figcaption>Vite</figcaption>
        </figure>
        <figure>
          <img src={sas} alt="imagen de SCSS" />
          <figcaption>SCSS</figcaption>
        </figure>
        <figure>
          <img src={react} alt="imagen de React" />
          <figcaption>React</figcaption>
        </figure>
        <figure>
          <img src={js} alt="imagen de Javascript" />
          <figcaption>Javascript</figcaption>
        </figure>
      </article>
    </section>
  );
}

export default About;
