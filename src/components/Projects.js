import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projectsList = [
    { title: "Portfolio Website", description: "A Personal Portfolio Website." },
    { title: "To-Do List", description: "A Simple Todo-list." },
    { title: "E-commerce Website", description: "A Simple E-commerce Website." },
  ];

  return (
    <motion.div
      className="flex flex-col items-center bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 text-center px-6 py-12"
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
        My Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsList.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
