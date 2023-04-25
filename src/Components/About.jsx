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
          <div>
            <h4>Responsive Design 85%</h4>
            <progress max="100" value="85">
              85%
            </progress>
          </div>
          <div>
            <h4>Calling APIs Rest 70%</h4>
            <progress max="100" value="70">
              70%
            </progress>
          </div>
          <div>
            <h4>Git and Github 70%</h4>
            <progress max="100" value="70">
              70%
            </progress>
          </div>
          <div>
            <h4>HTML and CSS 80%</h4>
            <progress max="100" value="80">
              80%
            </progress>
          </div>
          <div>
            <h4>React Js 75%</h4>
            <progress max="100" value="75">
              75%
            </progress>
          </div>
        </article>
        <article className="softSkills">
          <h3>These are my skills as a person</h3>
          <div>
            <h4>TeamWork 85%</h4>
            <progress max="100" value="85">
              85%
            </progress>
          </div>
          <div>
            <h4>Communication 80%</h4>
            <progress max="100" value="80">
              80%
            </progress>
          </div>
          <div>
            <h4>Problem Solving 75%</h4>
            <progress max="100" value="75">
              75%
            </progress>
          </div>
          <div>
            <h4>Learning Actitude 80%</h4>
            <progress max="100" value="80">
              80%
            </progress>
          </div>
        </article>
      </article>
    </section>
  );
}

export default About;
