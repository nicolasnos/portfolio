import React from "react";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <div className="Landing">
      <Header />
      <About />
      <Contact />
      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
