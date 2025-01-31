import React, { useState } from "react";
import { motion } from "framer-motion";
import html from "../icons/html.svg";
import css from "../icons/css.svg";
import javascript from "../icons/javascript.svg";
import react from "../icons/react.svg";
import tailwind from "../icons/tailwind.svg";
import chrome from "../icons/chrome.svg";
import mysql from "../icons/mysql.svg";
import github from "../icons/github.svg";
import vscode from "../icons/vscode.svg";
import mongodb from "../icons/mongodb.svg";
import vite from "../icons/vite.svg";
import nextjs from "../icons/nextjs.svg";

const Technologies = () => {
  const techStack = [
    { img: html, name: "HTML", description: "Frontend markup language" },
    { img: css, name: "CSS", description: "Frontend styling language" },
    { img: javascript, name: "JavaScript", description: "Frontend programming language" },
    { img: react, name: "React", description: "Frontend framework" },
    { img: tailwind, name: "Tailwind CSS", description: "Utility-first CSS framework" },
    { img: chrome, name: "Chrome Browser", description: "Web browser for development" },
    { img: mysql, name: "MySQL", description: "Database management" },
    { img: github, name: "GitHub", description: "Version control and collaboration" },
    { img: vscode, name: "VS Code", description: "Code editor" },
    { img: mongodb, name: "MongoDB", description: "NoSQL database" },
    { img: vite, name: "Vite.js", description: "Frontend build tool" },
    { img: nextjs, name: "Next.js", description: "React framework" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="p-8"
      id="technologies"
    >
      <h2 className="text-3xl font-bold mb-8 text-gray-100">Tools and Technologies I Use</h2>
      <p className="text-gray-300 mb-8">
        I work with a wide range of tools and technologies to build modern, scalable, and efficient applications. Here are some of my favorites:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {techStack.map((tech, i) => {
          const [isHovered, setIsHovered] = useState(false);

          return (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="p-6 rounded-lg bg-gray-700 hover:bg-gray-600 transition flex items-center space-x-6"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src={tech.img}
                alt={tech.name}
                className={`w-12 h-12 transition duration-300 ${isHovered ? "grayscale-0" : "grayscale"}`}
              />
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
