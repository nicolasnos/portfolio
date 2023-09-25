import React from "react";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function Home({language, setLanguage}) {
  return (
    <div className="Landing">
      <Header language={language} setLanguage={setLanguage} />
      <About language={language}/>
      <Projects language={language}/>
      <Footer language={language}/>
      <Contact language={language}/>
    </div>
  );
}

export default Home;
