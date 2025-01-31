import React from 'react';
import { FaArrowUp, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 p-6 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-4">
        {/* Contact Info */}
        <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6">
          <span className="text-gray-400 flex items-center text-sm lg:text-base">
            <FaEnvelope className="mr-2 text-gray-100" />
            sudebm789@gmail.com
          </span>
          <span className="text-gray-400 flex items-center text-sm lg:text-base">
            <FaPhone className="mr-2 text-gray-100" />
            +977 9841770366
          </span>
        </div>

        <button
          onClick={scrollToTop}
          className="bg-gray-500 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-lg" />
        </button>
      </div>

      <p className="text-gray-400 mt-4 text-sm">
        &copy; 2024 Sudev Thapa Magar. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
