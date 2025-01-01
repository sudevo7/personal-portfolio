import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Left Column: Image */}
      <motion.div
        className="flex-1 flex justify-center items-center mb-6 md:mb-0"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <img
          src="https://i.pinimg.com/736x/20/44/8f/20448fb4c6c278be29c79695fbd02ff7.jpg"
          alt="Sudev Profile"
          className="rounded-full shadow-lg w-3/4 md:w-1/2"
        />
      </motion.div>

      {/* Right Column: Text */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
          Hi! I'm Sudev, an aspiring web developer passionate about creating
          visually appealing and user-friendly web applications. I love learning
          new technologies and bringing ideas to life through code.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
