import CV from "./CV.pdf";
import HV from "./HV.pdf";
import bookL from "./SVGimg/book.png";
import boneL from "./SVGimg/bone-list.png";
import commerce from "./SVGimg/e-commerce.png";

export const headerEng = {
  About: "About",
  Projects: "Projects",
  Contact: "Contact",
  CV: CV,
  CVScript: "My CV",
  flag: "English",
  aboutLink: "#about",
  projectsLink: "#projects",
  contactLink: "#contact",
};

export const headerEsp = {
  About: "Sobre mi",
  Projects: "Mis proyectos",
  Contact: "Contacto",
  CV: HV,
  CVScript: "Mi Hoja de vida",
  flag: "Español",
  aboutLink: "#about",
  projectsLink: "#projects",
  contactLink: "#contact",
};

export const projectsEng = [
  {
    id: 0,
    href: "https://book-colection.netlify.app/",
    src: bookL,
    alt: "book colection image",
    caption:
      "This project use an API that I call to get the data of many books that you can read online",
  },
  {
    id: 1,
    href: "https://nicolasnos.github.io/bit08-react/",
    alt: "bone list",
    src: boneL,
    caption:
      "You can save some bones on this app, the main idea of this project is to show CURD operations",
  },
  {
    id: 2,
    href: "https://e-commerce-kappa-eosin.vercel.app/",
    alt: "Link e-comerce",
    src: commerce,
    caption: "This is an e-commerce portal made with TypeScript and Bootstrap",
  },
];

export const projectsEsp = [
  {
    id: 0,
    href: "https://book-colection.netlify.app/",
    src: bookL,
    caption:
      "Este proyecto usa una API que trae la informacion de distintos libros para leer gratis",
  },
  {
    id: 1,
    href: "https://nicolasnos.github.io/bit08-react/",
    src: boneL,
    caption:
      "En esta app puedes guardar huesos, la idea central de este proyecto es mostrar las operaciones CRUD",
  },
  {
    id: 2,
    href: "https://e-commerce-kappa-eosin.vercel.app/",
    src: commerce,
    caption:
      "Esta es una pagina de una tienda virtual hecha con TypeScript y Bootstrap",
  },
];

export const aboutEng = {
  intro:
    "On this portfolio you will find some of the projects that I have done as a FrontEnd Developer",
  powered: "This webside has been developed thanks to technologies such as",
  experience: "I have been working as a FrontEnd developer for",
  skills: "Some skills I have",
};

export const aboutEsp = {
  intro:
    "Acá encontrarás algunos de los proyectos que he hecho como desarrollador FrontEnd",
  powered:
    "Esta página ha sido desarrollada gracias a las siguientes tecnologías",
  experience: "He estado trabajando como desarrollador FrontEnd durante",
  skills: "Algunas de las habilidades que manejo",
};

export const experienceEng = [
  {
    id: 0,
    title: "FrontEnd Developer",
    duration: "3 months",
    place: "Metanoiia",
    duties: [
      "Maintenance of applications",
      "Development of new applications",
      "Search for solutions to meet client needs in terms of application usage and capacity",
    ],
    from: "08/2022",
    to: "11/2022",
  },
  {
    id: 1,
    title: "FrontEnd Developer",
    duration: "3 months",
    place: "Id for Ideas",
    duties: [
      "Verify changes in projects developed through Github",
      "Develop web applications using HTML, CSS and Javascript with the React framework",
      "Find technical solutions to ensure that the application meets the needs and expectations of the client",
    ],
    from: "03/2023",
    to: "05/2023",
  },
  {
    id: 2,
    title: "FrontEnd Developer",
    duration: "2 years",
    place: "Soundlutions",
    duties: [
      "Coding reviews to resolve bugs.",
      "Develop web applications using TypeScript, React and Tailwind frameworks",
      "Help to develop the user experience for the projects developed making a responsive design all the projects where worked",
    ],
    from: "05/2023",
    to: "current",
  },
];

export const experienceEsp = [
  {
    id: 0,
    title: "Desarrollador FrontEnd",
    duration: "3 meses",
    place: "Metanoiia",
    duties: [
      "Mantenimiento de aplicaciones",
      "Desarrollo de nuevas aplicaciones",
      "Búsqueda de soluciones para que los clientes cumplan con las necesidades de uso y capacidad de las aplicaciones",
    ],
    from: "08/2022",
    to: "11/2022",
  },
  {
    id: 1,
    title: "Desarrollador FrontEnd",
    duration: "3 meses",
    place: "Id for Ideas",
    duties: [
      "Verificación de cambios en proyectos desarrollados a través de Github",
      "Desarrollo de aplicaciones web utilizando HTML, CSS y Javascript con el framework React",
      "Encontrar soluciones técnicas para asegurar que la aplicación cumpla con las necesidades y expectativas del cliente",
    ],
    from: "03/2023",
    to: "05/2023",
  },
  {
    id: 2,
    title: "Desarrollador FrontEnd",
    duration: "2 años",
    place: "Soundlutions",
    duties: [
      "Revisión de código para solucionar errores.",
      "Desarrollo de aplicaciones web utilizando TypeScript, React y Tailwind frameworks",
      "Ayuda para desarrollar la experiencia del usuario en los proyectos desarrollados haciendo un diseño responsivo en todos los proyectos donde trabajé",
    ],
    from: "05/2023",
    to: "actualmente",
  },
];
