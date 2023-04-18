import React from "react";
import whatsapp from "../assets/SVGimg/wha.svg";
import linkedinLogo from "../assets/SVGimg/linkedin.svg";
import email from "../assets/SVGimg/email.svg";

function Contact() {
  return (
    <section id="contact">
      Contact me here
      <div id="links">
        <a href="http://wa.link/mj3ahm" target="_blank">
          <img src={whatsapp} alt="whatsapp" />
        </a>
        <a
          href="https://www.linkedin.com/in/nicolas-olmos-a7a1ba261/"
          target="_blank"
        >
          <img src={linkedinLogo} alt="hola" />
        </a>{" "}
        <a href="https://github.com/nicolasnos/" target="_blank">
          github
        </a>
        <a href="mailto: nicolas.nos27@gmail.com">
          <img src={email} alt="email logo" />
        </a>{" "}
      </div>
    </section>
  );
}

export default Contact;
