import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";
import resume from "../assets/GourangaBag_CV.pdf";

const Home = () => {
  return (
    <section 
    id="home"
    className="flex flex-col-reverse md:flex-row items-center md:items-center justify-center px-6 md:px-20 py-12 md:py-20 bg-gray-50 dark:bg-gray-800 transition-colors gap-12">
      
      {/* Left Content */}
      <div className="flex-1 flex flex-col justify-center text-center md:text-left">
        {/* Animated Heading */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[1.8rem] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight"
        >
          Hi, I'm{" "}
          <motion.span
            className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            GOURANGA BAG
          </motion.span>
        </motion.h3>

        {/* Animated Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-3 text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-700 dark:text-gray-300"
        >
          Assistant Professor at{" "}
          <span className="font-semibold text-blue-500">Brainware University</span> | AI & ML Specialist
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start"
        >
          <a
            href={resume}
            download
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-full hover:scale-105 transition-transform"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Right Image */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="flex-1 flex justify-center md:justify-end"
      >
        <img
          src={profileImg}
          alt="Gouranga Bag"
          className="rounded-full aspect-square w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 object-cover shadow-xl border-4 border-white dark:border-gray-700"
        />
      </motion.div>
    </section>
  );
};

export default Home;
