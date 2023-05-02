import React from "react";
import yo from "../assets/SVGimg/yo.jpeg";
import vite from "../assets/vite.svg";
import sas from "../assets/sass.svg";
import react from "../assets/React.svg";
import js from "../assets/js.svg";

function About() {
  return (
    <section id="about">
      <article className="intro">
        <h2>
          On this portfolio you will find some of the projects that I have done
          as a FrontEnd Developer
        </h2>
        <img src={yo} alt="imagen de nicolas" />
      </article>
      <article className="powered">
        <p>This webside has been developed thanks to technologies such as</p>
        <div className="imagenes">
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
        </div>
      </article>
      <article className="skills">
        <article id="frontSkills">
          <h3>Here're some of my skills as FrontEnd Developer</h3>
          <div className="responsive">
            Responsive Design
            <div className="contenedor">
              <div className="valor"></div>
            </div>
          </div>
          <div className="api">
            Calling APIs Rest
            <div className="contenedor">
              <div className="valor"></div>
            </div>
          </div>
          <div className="git">
            Git and Github
            <div className="contenedor">
              <div className="valor"></div>
            </div>
          </div>
          <div className="css">
            HTML and CSS
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
          <h3>These are my skills as a person</h3>
          <div className="teamwork">
            TeamWork
            <div className="contenedor">
              <div className="valor"></div>
            </div>
          </div>
          <div className="communication">
            Communication
            <div className="contenedor">
              <div className="valor"></div>
            </div>
          </div>
          <div className="problem">
            Problem Solving
            <div className="contenedor">
              <div className="valor"></div>
            </div>
          </div>
          <div className="learning">
            Learning Attitude
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
