import { useContext } from "react";
import { IdiomaContext } from "../LanguageContext";
import { projectsEng, projectsEsp } from "../assets/text";

const Projects = () => {
  const { language } = useContext(IdiomaContext);
  const projects = language === "eng" ? projectsEng : projectsEsp;

  return (
    <section id="projects">
      <h2>
        {language === "eng"
          ? "Here are some of the projects that I've done and been part of"
          : "Algunos proyectos que he hecho y de los que he sido parte"}
      </h2>
      <article className="images">
        {projects.map((project) => (
          <figure key={project.id}>
            <a href={project.href} target="_blank">
              <img src={project.src} alt={project.alt} />
              <figcaption>{project.caption}</figcaption>
            </a>
          </figure>
        ))}
      </article>
    </section>
  );
};

export default Projects;
