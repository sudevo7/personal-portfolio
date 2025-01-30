import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaJs } from "react-icons/fa";

const Technologies = () => {
  const techStack = [
    { icon: FaReact, name: "React", description: "Frontend framework", defaultColor: "text-gray-400", hoverColor: "text-blue-500" },
    { icon: FaNodeJs, name: "Node.js", description: "Backend runtime", defaultColor: "text-gray-400", hoverColor: "text-green-500" },
    { icon: FaPython, name: "Python", description: "General-purpose language", defaultColor: "text-gray-400", hoverColor: "text-yellow-500" },
    { icon: FaDatabase, name: "SQL", description: "Database management", defaultColor: "text-gray-400", hoverColor: "text-purple-500" },
    { icon: FaJs, name: "JavaScript", description: "Frontend language", defaultColor: "text-gray-400", hoverColor: "text-yellow-300" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="p-8"
      id="technologies"
    >
      <h2 className="text-3xl font-bold mb-8 text-gray-100">Technologies I Use</h2>
      <p className="text-gray-300 mb-8">
        I work with a wide range of technologies to build modern, scalable, and efficient applications. Here are some of my favorites:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {techStack.map((tech, i) => {
          const [isHovered, setIsHovered] = useState(false);
          const Icon = tech.icon;

          return (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="p-6 rounded-lg bg-gray-700 hover:bg-gray-600 transition flex items-center space-x-6"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className={`text-4xl transition duration-300 ${isHovered ? tech.hoverColor : tech.defaultColor}`}>
                <Icon />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-100">{tech.name}</h3>
                <p className="text-gray-300">{tech.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Technologies;
