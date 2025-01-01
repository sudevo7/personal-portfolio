import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div
      className="flex flex-col justify-center items-center bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 text-center px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Contact Me
      </motion.h2>
      <motion.form
        className="w-full max-w-md bg-white rounded-lg shadow-lg p-6"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-left text-gray-700 font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-left text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-left text-gray-700 font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder="Write your message here"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>
        <motion.button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300"
          whileTap={{ scale: 0.95 }}
        >
          Send
        </motion.button>
      </motion.form>
      <div className="mt-8 flex space-x-6 text-2xl text-gray-700">
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900 transition-colors duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:your.email@example.com"
          className="hover:text-red-600 transition-colors duration-300"
        >
          <FaEnvelope />
        </a>
      </div>
    </motion.div>
  );
};

export default Contact;
