import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-gray-100">
      <Header />

      <section id="home" className="pt-16">
        <Home />
      </section>
      <section id="about" className="py-16">
        <About />
      </section>
      <section id="projects" className="py-16 bg-gray-200">
        <Projects />
      </section>
      <section id="contact" className="py-16">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
