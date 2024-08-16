import React, {useState} from "react";
import ExperienceModal from "./ExperienceModal";
import yo from "../assets/SVGimg/profile.jpg";
import vite from "../assets/vite.svg";
import sas from "../assets/sass.svg";
import react from "../assets/React.svg";
import js from "../assets/js.svg";
import html from "../assets/html.svg"
import css from "../assets/css.svg";
import ts from "../assets/ts.svg"
import github from "../assets/github.svg";
import bootstrap from "../assets/bootstrap.svg"

function About({language}) {
  const [viewJob, setViewJob] = useState(false);
  const [selectJob, setSelectJob] = useState();

  const handleSelectJob = (job) => {
    setViewJob(true);
    setSelectJob(job);
  }

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

  const experience = [
    {
      id: 0,
      title: (language === "eng") ? "FrontEnd Developer" : "Desarrollador FrontEnd",
      place: "Metanoiia",
      duration: 3,
      duties: (language === "eng") ? ["Maintenance of applications", "Development of new applications", "Search for solutions to meet client needs in terms of application usage and capacity"] : ["Mantenimiento de aplicaciones", "Desarrollo de nuevas aplicaciones y mock ups", "Buscar soluciones para las necesidades de cliente en cuanto al uso y capacidad de aplicaciones"],
      from: "08/2022",
      to: "11/2022"
    },
    {
      id: 1,
      title:  (language === "eng") ? "FrontEnd Developer" : "Desarrollador FrontEnd",
      place: "Id for Ideas",
      duration: 3,
      duties: (language === "eng") ? ["Verify changes in projects developed through Github", "Develop web applications using HTML, CSS and Javascript with the React framework", "Find technical solutions to ensure that the application meets the needs and expectations of the client"] : ["Verificar los cambios en los proyectos desarrollados a traves de Github", "Desarrollo de aplicaciones web utilizando HTML, CSS y Javascript con el framework de React.", "Buscar soluciones a problemas tecnicos para que la aplicacion cumpla con las necesidades y expectativas del cliente"],
      from: "03/2023",
      to: "05/2023"
    },
    {
      id: 2,
      title:  (language === "eng") ? "Web Developer" : "Desarrollador Web",
      place: "Soundlutions",
      duration: (language === "eng") ? `+12`  : "+12",
      duties: (language === "eng") ? ["Coding reviews to resolve bugs.", "Develop web applications using TypeScript, React and Tailwind frameworks", "Help to develop the user experience for the projects developed making a responsive design all the projects where worked"] : ["Revisiones de codigo para resolver bugs", "Desarrollar aplicaciones web ussando los frameworks de TypeScript", "Ayudar a desarrolar teniendo en cuenta la experiencia del usuario para los proyectos, haciendo un desarrollo responsivo en los proyectos que participó"],
      from: "05/2023",
      to: (language === "eng") ? "current" : "actual"
    }
  ]

  const hardSkills = [
    {
      id: 4,
      image: html,
      alt: "HTML"
    },
    {
      id: 5,
      image: css,
      alt: "CSS"
    },
    {
      id: 1,
      image: js,
      alt: "Javascript"
    },
    {
      id: 2,
      image: react,
      alt: "React"
    },
    {
      id: 3,
      image: sas,
      alt: "SCSS"
    },
    {
      id: 6,
      image: ts,
      alt: "Typescript"
    },    
    {
      id: 7,
      image: github,
      alt: "github"
    },
    {
      id: 8,
      image: bootstrap,
      alt: "bootstrap"
    },
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
      <article className="experience">
        {experience.map((job)=>
        <ul key={job.id}>
          <h3>{job.title}</h3>
          <h5>{job.duration}{(language === "eng") ? " months" : " meses"}</h5>
          <button 
            onClick={() => handleSelectJob(job)}>
              {(language === "eng") ? "more info" : "ver más"}
          </button>
        </ul>
        )}
      </article>
        <h3>{(language === "eng") ? "Some skills I have" : "Algunas de las habilidades que manejo"}</h3>
      <article className="skills">
          {hardSkills.map((skill) =>
            <img src={skill.image} key={skill.id} alt={skill.alt} />
          )}
      </article>
      {viewJob ? <ExperienceModal selectJob={selectJob} setViewJob={setViewJob}/> : false}
    </section>
  );
}

export default About;
