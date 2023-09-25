import React from "react";
import yo from "../assets/SVGimg/yo.jpeg";
import vite from "../assets/vite.svg";
import sas from "../assets/sass.svg";
import react from "../assets/React.svg";
import js from "../assets/js.svg";

function About({language}) {
  const logos = [
    {
      id: 0,
      src: vite,
      alt: "imagen de vite",
      caption: "vite"
    },
    {
      id: 1,
      src: sas,
      alt: "imagen de SCSS",
      caption: "SCSS"
    },
    {
      id: 2,
      src: react,
      alt: "imagen de react",
      caption: "React"
    },
    {
      id: 3,
      src: js,
      alt: "imagen de Javascript",
      caption: "Javascript"
    }
  ]
  return (
    <section id="about">
      <article className="intro">
        <h2>
          {(language === "eng") ? "On this portfolio you will find some of the projects that I have done as a FrontEnd Developer" : "Acá encontrarás algunos de los proyectos que he hecho como desarrollador FrontEnd"}
        </h2>
        <img src={yo} alt="imagen de nicolas" />
      </article>
      <article className="powered">
        <p>{(language === "eng") ?"This webside has been developed thanks to technologies such as" : "Esta página ha sido desarrollada gracias a las siguientes tecnologías"}</p>
        <div className="imagenes">
          {logos.map((logo)=>
          <figure key={logo.id}>
            <img src={logo.src} alt={logo.alt} />
            <figcaption>{logo.caption}</figcaption>
          </figure>)}
        </div>
      </article>
      <article className="skills">
        <article id="frontSkills">
          <h3>{(language === "eng") ? "Here're some of my skills as FrontEnd Developer" : "Acá algunas de mis habilidades"}</h3>
          <div className="responsive">
            {(language === "eng") ? "Responsive Design": "Diseño Responsivo"}
            <div className="contenedor">
              <div className="valor"></div>
            </div>
          </div>
          <div className="api">
            {(language === "eng") ? "Calling APIs Rest" : "Llamados a APIs"}
            <div className="contenedor">
              <div className="valor"></div>
            </div>
          </div>
          <div className="git">
            Git & Github
            <div className="contenedor">
              <div className="valor"></div>
            </div>
          </div>
          <div className="css">
            HTML & CSS
            <div className="contenedor">
              <div className="valor"></div>
            </div>
          </div>
          <div className="react">
            React JS
            <div className="contenedor">
              <div className="valor"></div>
            </div>
          </div>
        </article>
        <article className="softSkills">
          <h3>{(language === "eng") ? "These are my skills as a person" : "Mis valores como persona"}</h3>
          <div className="teamwork">
            {(language === "eng") ? "TeamWork" : "trabajo en equipo"}
            <div className="contenedor">
              <div className="valor"></div>
            </div>
          </div>
          <div className="communication">
            {(language === "eng") ? "Assertive Communication": "Comunicación Asertiva"}
            <div className="contenedor">
              <div className="valor"></div>
            </div>
          </div>
          <div className="problem">
            {(language === "eng") ? "Problem Solving": "Resolución de problemas"}
            <div className="contenedor">
              <div className="valor"></div>
            </div>
          </div>
          <div className="learning">
            {(language === "eng") ? "Learning Attitude" : "Actitud de aprender"}
            <div className="contenedor">
              <div className="valor"></div>
            </div>
          </div>
        </article>
      </article>
    </section>
  );
}

export default About;
