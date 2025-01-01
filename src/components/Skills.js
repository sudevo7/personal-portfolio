import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Tailwind CSS',
    'Node.js',
    'Git',
    'Responsive Design',
  ];

  return (
    <motion.div
      className="min-h-screen bg-gray-50 flex flex-col items-center text-center px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold mb-8">My Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            className="bg-white shadow-md p-6 rounded-xl text-lg font-medium"
            whileHover={{ scale: 1.05 }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Skills;
