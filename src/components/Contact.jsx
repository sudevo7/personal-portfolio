import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="p-8"
      id="contact"
    >
      <h2 className="text-3xl font-bold mb-8 text-gray-100">Let's Connect!</h2>
      <p className="text-gray-300 mb-8">
        Have a project in mind or just want to say hello? Feel free to reach out!
      </p>
      <form className="space-y-6 max-w-2xl mx-auto">
        <div className="space-y-2">
          <label htmlFor="name" className="text-gray-300">Your Name</label>
          <input 
            type="text" 
            id="name" 
            placeholder="John Doe" 
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-gray-300">Your Email</label>
          <input 
            type="email" 
            id="email" 
            placeholder="johndoe@example.com" 
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-gray-300">Your Message</label>
          <textarea 
            id="message" 
            placeholder="Hello! I'd love to collaborate with you." 
            rows="5"
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;