import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaUser, FaCode, FaFolder, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'technologies', 'portfolio', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= 100) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50">
      <div className="bg-gray-700 rounded-full p-2 shadow-lg flex flex-col space-y-4">
        <Link 
          to="about" 
          smooth={true} 
          duration={500} 
          className={`p-3 bg-gray-600 rounded-full hover:bg-gray-500 transition relative group ${activeSection === 'about' ? 'scale-125' : 'scale-100'}`}
        >
          <FaUser className={`text-xl ${activeSection === 'about' ? 'text-gray-100' : 'text-gray-400'}`} />
          <span className="absolute right-full top-1/2 transform -translate-y-1/2 mr-2 bg-gray-800 text-gray-100 text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            About
          </span>
        </Link>
        <Link 
          to="technologies" 
          smooth={true} 
          duration={500} 
          className={`p-3 bg-gray-600 rounded-full hover:bg-gray-500 transition relative group ${activeSection === 'technologies' ? 'scale-125' : 'scale-100'}`}
        >
          <FaCode className={`text-xl ${activeSection === 'technologies' ? 'text-gray-100' : 'text-gray-400'}`} />
          <span className="absolute right-full top-1/2 transform -translate-y-1/2 mr-2 bg-gray-800 text-gray-100 text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Technologies
          </span>
        </Link>
        <Link 
          to="portfolio" 
          smooth={true} 
          duration={500} 
          className={`p-3 bg-gray-600 rounded-full hover:bg-gray-500 transition relative group ${activeSection === 'portfolio' ? 'scale-125' : 'scale-100'}`}
        >
          <FaFolder className={`text-xl ${activeSection === 'portfolio' ? 'text-gray-100' : 'text-gray-400'}`} />
          <span className="absolute right-full top-1/2 transform -translate-y-1/2 mr-2 bg-gray-800 text-gray-100 text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Portfolio
          </span>
        </Link>
        <Link 
          to="contact" 
          smooth={true} 
          duration={500} 
          className={`p-3 bg-gray-600 rounded-full hover:bg-gray-500 transition relative group ${activeSection === 'contact' ? 'scale-125' : 'scale-100'}`}
        >
          <FaEnvelope className={`text-xl ${activeSection === 'contact' ? 'text-gray-100' : 'text-gray-400'}`} />
          <span className="absolute right-full top-1/2 transform -translate-y-1/2 mr-2 bg-gray-800 text-gray-100 text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Contact
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;