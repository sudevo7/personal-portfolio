import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import profileImage from "../assets/profile-image.jpg";

const ProfileCard = () => {
  return (
    <motion.div 
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      className="sticky top-0 h-screen hidden lg:flex items-center p-8 w-96"
    >
      <motion.div
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        className="bg-gray-700 rounded-2xl p-8 w-full"
      >
        <img 
          src={profileImage} 
          alt="Profile" 
          className="w-48 h-48 mx-auto mb-6 border-4 border-gray-600 rounded-lg"
        />
        <h1 className="text-2xl font-bold text-center text-gray-100 mb-4">Sudev Thapa Magar</h1>
        
        <div className="min-h-[100px]">
          <TypeAnimation
            sequence={[
              'Software Engineer',
              2000,
              'UI/UX Enthusiast',
              2000,
              'Problem Solver',
              2000,
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            className="text-center text-gray-300 text-lg font-medium mb-6"
          />
        </div>

        <div className="flex justify-center space-x-4">
          <a href="https://github.com" className="p-3 bg-gray-600 rounded-full hover:bg-gray-500 transition">
            <FaGithub className="text-2xl text-gray-100" />
          </a>
          <a href="https://linkedin.com" className="p-3 bg-gray-600 rounded-full hover:bg-gray-500 transition">
            <FaLinkedin className="text-2xl text-gray-100" />
          </a>
          <a href="mailto:youremail@gmail.com" className="p-3 bg-gray-600 rounded-full hover:bg-gray-500 transition">
            <FaEnvelope className="text-2xl text-gray-100" />
          </a>
        </div>

        <div className="mt-6">
          <a
            href="/Resume-Sudev.pdf"
            download
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition flex items-center justify-center"
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