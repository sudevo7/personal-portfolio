import React from 'react';
import { motion } from 'framer-motion';
import weatherPreview from "../assets/WeatherApp-preview.png";
import todoListPreview from "../assets/Todo-list-preview.png";
import ecommercePreview from "../assets/laptopia-preview.png";
import kanbanPreview from "../assets/kanban-board-preview.png";

const projects = [
  {
    title: 'Weather App',
    description: 'Track real-time weather conditions for any location using a clean and responsive interface.',
    image: weatherPreview,
    link: 'https://sudevo7.github.io/weather-app/',
  },
  {
    title: 'To-Do List',
    description: 'Organize your daily tasks with this simple and intuitive to-do list application.',
    image: todoListPreview,
    link: 'https://sudevo7.github.io/my-todo-list/',
  },
  {
    title: "E-commerce Website",
    description: "An e-commerce website focused on showcasing and selling laptops with a user-friendly interface.",
    link: "https://sudevo7.github.io/ecommerce-site/",
    image: ecommercePreview,
  },
  {
    title: "Kanban Board",
    description: "A simple and interactive Kanban board for task management and workflow organization.",
    link: "https://sudevo7.github.io/kanban-board/",
    image: kanbanPreview, 
  },
];

const certifications = [
  {
    title: "Responsive Web Design",
    description: "Mastered responsive design principles and web development fundamentals.",
    link: "https://www.freecodecamp.org/certification/sudevmagar/responsive-web-design",
    image: "https://i.imgur.com/fPqc5ze.png",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    description: "Gained skills in JavaScript algorithms, ES6, and functional programming techniques.",
    link: "https://www.freecodecamp.org/certification/SudevMagar/javascript-algorithms-and-data-structures-v8",
    image: "https://i.imgur.com/zM5Q2Xy.png",
  },
];

const PortfolioShowcase = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="p-8"
      id="portfolio"
    >
      <h2 className="text-3xl font-bold mb-8 text-gray-100">Portfolio Showcase</h2>
      <p className="text-gray-300 mb-8">
        Here are some of the projects I've worked on and certifications I've earned. Each reflects my passion for solving real-world problems through technology.
      </p>
      
      <h3 className="text-2xl font-bold mb-4 text-gray-100">Projects</h3>
      <div className="grid gap-6 md:grid-cols-2 mb-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-lg bg-gray-700 hover:bg-gray-600 transition group"
          >
            <img
              src={project.image}
              className="w-full h-48 object-cover group-hover:brightness-50 transition"
              alt={project.title}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
              >
                Live Preview
              </a>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-100">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-bold mb-4 text-gray-100">Certifications</h3>
      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((cert, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-lg bg-gray-700 hover:bg-gray-600 transition group"
          >
            <img
              src={cert.image}
              className="w-full h-48 object-cover group-hover:brightness-50 transition"
              alt={cert.title}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
              >
                View Certification
              </a>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-100">{cert.title}</h3>
              <p className="text-gray-300">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default PortfolioShowcase;