import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
    <h1 className="text-5xl font-bold mb-4 text-gray-800">Hello, I'm Sudev</h1>
    <p className="text-xl text-gray-600">Aspiring Web Developer</p>
    <a href="/projects" className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600">View My Works</a>
    </motion.div>
  );
};

export default Home;
