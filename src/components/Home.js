import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="h-screen flex flex-col justify-center items-center bg-gray-50 text-center text-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-5xl font-extrabold mb-4 text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {"Hello, I'm ".split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
          >
            {char}
          </motion.span>
        ))}
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          Sudev
        </motion.span>
      </motion.h1>

      <motion.p
        className="text-xl mb-6"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Aspiring Web Developer
      </motion.p>
      <motion.a
        href="#projects"
        className="mt-6 px-6 py-2 border border-gray-300 text-gray-700 rounded-full shadow-sm hover:bg-gray-200 transition-all duration-300"
        whileHover={{ scale: 1.1, backgroundColor: "#e5e7eb" }}
        whileTap={{ scale: 0.95 }}
      >
        View My Works
      </motion.a>
    </motion.div>
  );
};

export default Home;
