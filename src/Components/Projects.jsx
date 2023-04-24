import React from "react";
import bookL from "../assets/SVGimg/book.png";
import boneL from "../assets/SVGimg/bone-list.png";
import portal from "../assets/SVGimg/jsExercises.png";

const Projects = () => {
  return (
    <section id="projects">
      <h2>Here are some of the projects that I've done</h2>
      <article className="images">
        <figure>
          <a href="https://book-colection.netlify.app/" target="_blank">
            <img src={bookL} alt="book colection image" />
            <figcaption>
              This project use an API that I call to get the data of many books
              that you can read online
            </figcaption>
          </a>
        </figure>
        <figure>
          <a href="https://nicolasnos.github.io/bit08-react/" target="_blank">
            <img src={boneL} alt="bone list image" />
            <figcaption>
              You can save some bones on this app, the main idea of this project
              is do CURD operations
            </figcaption>
          </a>
        </figure>
        <figure>
          <a
            href="https://nicolasnos.github.io/ejercicios-vacaciones-BIT/"
            target="_blank"
          >
            <img src={portal} alt="js exercises image" />
            <figcaption>
              This is the login portal of a project where I did some exercises
              with Vanilla JavaScript
            </figcaption>
          </a>
        </figure>
      </article>
    </section>
  );
};

export default Projects;
