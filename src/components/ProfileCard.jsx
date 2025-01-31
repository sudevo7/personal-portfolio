import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import profileImage from "../assets/profile-image.jpg";

const ProfileCard = () => {
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      className="lg:sticky lg:top-0 h-auto lg:h-screen flex items-center p-4 lg:p-8 w-full lg:w-96"
    >
      <motion.div
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="bg-gray-700 rounded-2xl p-6 lg:p-8 w-full"
      >
        {/* Profile Image */}
        <div className="w-32 h-32 lg:w-48 lg:h-48 mx-auto mb-6 border-4 border-gray-600 rounded-lg overflow-hidden">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="text-2xl lg:text-2xl font-bold text-center text-gray-100 mb-4">
          Sudev Thapa Magar
        </h1>

        {/* Typewriter Effect */}
        <div className="min-h-[80px] lg:min-h-[100px]">
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              2000,
              "Bringing designs to life",
              2000,
              "Crafting intuitive interfaces.",
              2000,
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            className="text-center text-gray-300 text-base lg:text-lg font-medium mb-6"
          />
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://github.com/sudevo7"
            target="_blank"
            className="p-3 bg-gray-600 rounded-full hover:bg-gray-500 transition"
          >
            <FaGithub className="text-xl lg:text-2xl text-gray-100" />
          </a>
          <a
            href="https://linkedin.com/in/sudevo7"
            target="_blank"
            className="p-3 bg-gray-600 rounded-full hover:bg-gray-500 transition"
          >
            <FaLinkedin className="text-xl lg:text-2xl text-gray-100" />
          </a>
        </div>

        {/* Email Section (Fixed Alignment) */}
        <div className="flex justify-center items-center space-x-2 mb-4">
          <FaEnvelope className="text-gray-100 text-xl" />
          <span className="text-gray-100 text-lg">sudebm789@gmail.com</span>
        </div>

        {/* Resume Download Button */}
        <div className="mt-6">
          <a
            href="/personal-portfolio/Resume-Sudev.pdf"
            download
            className="w-full bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition flex items-center justify-center"
          >
            <FaDownload className="mr-2" />
            Download Resume
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProfileCard;
