import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaUser, FaToolbox, FaFolder, FaComment } from 'react-icons/fa';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'technologies', 'portfolio', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= 100) {
          setActiveSection(section);
        }
      }

      // Hide/show navbar on scroll
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setVisible(false); // Hide on scroll down
      } else {
        setVisible(true); // Show on scroll up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`lg:fixed lg:top-1/2 lg:right-4 lg:transform lg:-translate-y-1/2 z-50 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="bg-gray-700 rounded-full p-2 shadow-lg flex flex-row lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4 justify-center lg:justify-start mx-auto lg:mx-0 max-w-max">
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
          <FaToolbox className={`text-xl ${activeSection === 'technologies' ? 'text-gray-100' : 'text-gray-400'}`} />
          <span className="absolute right-full top-1/2 transform -translate-y-1/2 mr-2 bg-gray-800 text-gray-100 text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Tools and Technologies
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
          <FaComment className={`text-xl ${activeSection === 'contact' ? 'text-gray-100' : 'text-gray-400'}`} />
          <span className="absolute right-full top-1/2 transform -translate-y-1/2 mr-2 bg-gray-800 text-gray-100 text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Contact
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;