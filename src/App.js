import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';

function App() {
  return (
    <div className="font-sans bg-gray-100">
      <Header />

      <section id="home">
        <Home />
      </section>
      <section id="about" className="">
        <About />
      </section>
      <section id="skills" className="">
        <Skills />
      </section>
      <section id="projects" className="bg-gray-200">
        <Projects />
      </section>
      <section id="contact" className="">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
