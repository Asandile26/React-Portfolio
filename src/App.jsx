import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      {/* <Skills /> */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
