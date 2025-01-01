import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  // Scroll-to-top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 text-2xl mb-4">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="hover:text-red-500 transition-colors duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
        <p className="mb-4">&copy; 2024 Sudev. All Rights Reserved.</p>
        <button
          onClick={scrollToTop}
          className="text-gray-800 bg-white hover:bg-gray-300 p-3 rounded-full shadow-md transition-all duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
