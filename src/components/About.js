import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div className="min-h-screen flex flex-col justify-center items-center bg-white text-gray-800"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 1}}
    >
      <h2 className="text-4xl font-bold mb-6 ">About Me</h2>
      <p className="text-lg leading-relaxed max-w-3xl">
        Hi! I'm Sudev, an aspiring web developer passionate about creating
        visually appealing and user-friendly web applications. I love learning
        new technologies and bringing ideas to life through code.
      </p>
    </motion.div>
  );
};

export default About;
