import React from "react";
import bookL from "../assets/SVGimg/book.png";
import boneL from "../assets/SVGimg/bone-list.png";
import commerce from "../assets/SVGimg/e-commerce.png";

const Projects = ({language}) => {
  const projects = [
    {
      id: 0,
      href: "https://book-colection.netlify.app/",
      src: bookL,
      alt: "book colection image",
      caption: (language === "eng") ? "This project use an API that I call to get the data of many books that you can read online" : "Este proyecto usa una API que trae la informacion de distintos libros para leer gratis"
    },
    {
      id: 1,
      href: "https://nicolasnos.github.io/bit08-react/",
      alt: "bone list",
      src: boneL,
      caption: (language === "eng" ? "You can save some bones on this app, the main idea of this project is to show CURD operations" : "Es una app en donde puedes guardar huesos, la idea central de este proyecto es mostrar las operaciones CRUD")
    },
    {
      id: 2,
      href: "https://e-commerce-kappa-eosin.vercel.app/",
      alt: "Link e-comerce",
      src: commerce,
      caption: (language === "eng") ? "This is an e-commerce portal made with TypeScript and Bootstrap" : "Esta es una pagina de una tienda virtual hecha con TypeScript y Bootstrap"
    },
  ]
  
  return (
    <section id="projects">
      <h2>{(language === "eng") ? "Here are some of the projects that I've done and been part of": "Algunos proyectos que he hecho y de los que he sido parte"}</h2>
      <article className="images">
        {projects.map((project)=>
        <figure key={project.id}>
          <a href={project.href} target="_blank">
            <img src={project.src} alt={project.alt} />
            <figcaption>{project.caption}</figcaption>
          </a>
        </figure>
        )}
      </article>
    </section>
  );
};

export default Projects;
