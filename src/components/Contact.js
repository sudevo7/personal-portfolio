import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.div
              className="min-h-screen flex flex-col justify-center items-center bg-white text-gray-800 text-center px-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Contact Me
              </h2>
              <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-left text-gray-700 font-medium mb-2">Name</label>
                    <input type='text' id="name" className="w-full border border-gray-700 rounded-lg p-3" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-left text-gray-700 font-medium mb-2">Email</label>
                    <input type='email' id="email" className="w-full border border-gray-700 rounded-lg p-3" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-left text-gray-700 font-medium mb-2">Message</label>
                    <textarea id="message" rows='4' className="w-full border border-gray-700 rounded-lg p-3" />
                </div>
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-xl text-white">
                    Send
                </button>
              </form>
            </motion.div>
    )
}

export default Contact;