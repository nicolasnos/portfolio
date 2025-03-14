import React, { useState, useContext } from "react";
import { IdiomaContext } from "../LanguageContext";
import ExperienceModal from "./ExperienceModal";
import {
  aboutEng,
  aboutEsp,
  experienceEng,
  experienceEsp,
} from "../assets/text.js";
import yo from "../assets/SVGimg/profile.jpg";
import vite from "../assets/vite.svg";
import sas from "../assets/sass.svg";
import react from "../assets/React.svg";
import js from "../assets/js.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import ts from "../assets/ts.svg";
import github from "../assets/github.svg";
import phpLogo from "../assets/phpLogo.jpeg";
import bootstrap from "../assets/bootstrap.svg";

function About() {
  const { language } = useContext(IdiomaContext);
  const [viewJob, setViewJob] = useState(false);
  const [selectJob, setSelectJob] = useState();

  const selectedLanguage = language === "eng" ? aboutEng : aboutEsp;
  const experience = language === "eng" ? experienceEng : experienceEsp;

  const handleSelectJob = (job) => {
    setViewJob(true);
    setSelectJob(job);
  };

  const logos = [
    {
      id: 0,
      src: vite,
      alt: "vite logo",
      caption: "vite",
    },
    {
      id: 1,
      src: sas,
      alt: "SCSS logo",
      caption: "SCSS",
    },
    {
      id: 2,
      src: react,
      alt: "react logo",
      caption: "React",
    },
    {
      id: 3,
      src: js,
      alt: "Javascript logo",
      caption: "Javascript",
    },
  ];

  const hardSkills = [
    {
      id: 4,
      image: html,
      alt: "HTML",
    },
    {
      id: 5,
      image: css,
      alt: "CSS",
    },
    {
      id: 1,
      image: js,
      alt: "Javascript",
    },
    {
      id: 2,
      image: react,
      alt: "React",
    },
    {
      id: 3,
      image: sas,
      alt: "SCSS",
    },
    {
      id: 6,
      image: ts,
      alt: "Typescript",
    },
    {
      id: 7,
      image: github,
      alt: "github",
    },
    {
      id: 8,
      image: bootstrap,
      alt: "bootstrap",
    },
    {
      id: 9,
      image: phpLogo,
      alt: "php",
    },
  ];

  return (
    <section id="about">
      <article className="intro">
        <h2>{selectedLanguage.intro}</h2>
        <img src={yo} alt="imagen de nicolas" />
      </article>
      <article className="powered">
        <p>{selectedLanguage.powered}</p>
        <div className="imagenes">
          {logos.map((logo) => (
            <figure key={logo.id}>
              <img src={logo.src} alt={logo.alt} />
              <figcaption>{logo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </article>
      <article className="experience">
        {experience.map((job) => (
          <ul key={job.id}>
            <h3>{job.title}</h3>
            <h5>{job.duration}</h5>
            <button onClick={() => handleSelectJob(job)}>
              {language === "eng" ? "more info" : "ver más"}
            </button>
          </ul>
        ))}
      </article>
      <h3>{selectedLanguage.skills}</h3>
      <article className="skills">
        {hardSkills.map((skill) => (
          <img src={skill.image} key={skill.id} alt={skill.alt + " logo"} />
        ))}
      </article>
      {viewJob ? (
        <ExperienceModal selectJob={selectJob} setViewJob={setViewJob} />
      ) : (
        false
      )}
    </section>
  );
}

export default About;
