import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="p-8"
      id="about"
    >
      <div className="text-left">
        <h1 className="text-7xl font-bold mb-4">
          <span className="text-gray-200">Frontend</span>
          <br />
          <span className="text-gray-400">Developer</span>
        </h1>
        <div className="text-gray-300 max-w-2xl text-lg">
          <TypeAnimation
            sequence={[
              "Hi! I'm Sudev, an aspiring web developer passionate about creating visually appealing and user-friendly web applications. I love learning new technologies and bringing ideas to life through code.",
              1000, // Wait 1 second after displaying the text
            ]}
            wrapper="p"
            cursor={false} 
            speed={60} 
          />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
