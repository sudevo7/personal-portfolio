import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
    const projectsList = [
        {title: 'Portfolio Website', description: 'A Personal Portfolio Website.'},
        {title: 'To-Do List', description: 'A Simple Todo-list.'},
        {title: 'E-commerce Website', description: 'A Simple E-commerce Website'}
    ]

    return(
        <motion.div
        className="min-h-screen flex flex-col items-center bg-gray-100 text-gray-800 text-center px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}>
            <h2 className="text-4xl font-bold mb-6">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsList.map((project, index) => (
                    <div key={index} className="bg-white shadow-md rounded-full p-6">
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default Projects;