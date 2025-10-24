import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import awardIcon from "../assets/award.png";
import certificateIcon from "../assets/certificate.png";
import UGCNET from "../assets/UGC-NET.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 md:px-16 transition-colors"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
        {/* About Text */}
        <motion.div
          className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg border border-white/20 dark:border-gray-700/30 rounded-2xl p-6 sm:p-8 shadow-lg w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            About Me
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto text-center text-sm sm:text-base">
            Student-centered educator with expertise in
            <span className="font-semibold text-blue-500"> AI & ML</span>,
            committed to creating engaging learning experiences and driving
            student success through innovative teaching approaches.
          </p>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {/* Card 1 — UGC NET */}
            <motion.div
              tabIndex={0}
              className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={awardIcon}
                alt="UGC NET"
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-contain p-6 bg-white/10 dark:bg-gray-700/30 backdrop-blur-lg"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 
                  bg-black/50 dark:bg-white/20
                  backdrop-blur-lg 
                  border border-white/30 dark:border-gray-700/40
                  flex flex-col items-center justify-center 
                  text-white dark:text-gray-900
                  opacity-0 group-hover:opacity-100 group-focus:opacity-100
                  transition-all duration-300 text-center px-3"
              >
                <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                  UGC NET 2020
                </h3>
                <p className="text-xs sm:text-sm mt-1 mb-4">
                  Computer Science & Applications
                </p>

                {/* Iconic Button */}
                <a
                  href={UGCNET}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 sm:gap-2 
             bg-blue-600 hover:bg-blue-700 
             text-white text-[10px] sm:text-xs md:text-sm 
             font-medium 
             py-1.5 sm:py-2 px-3 sm:px-4 md:px-5 
             rounded-full 
             transition-all duration-300 
             hover:scale-105 active:scale-95 
             shadow-md"
                >
                  <ExternalLink
                    size={14}
                    className="sm:w-4 sm:h-4 md:w-[16px] md:h-[16px]"
                  />
                  <span>View Certificate</span>
                </a>
              </div>
            </motion.div>

            {/* Card 2 — FDP */}
            <motion.div
              tabIndex={0}
              className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <img
                src={certificateIcon}
                alt="FDP"
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-contain p-6 bg-white/10 dark:bg-gray-700/30 backdrop-blur-lg"
              />

              <div
                className="absolute inset-0 
                  bg-black/50 dark:bg-white/20
                  backdrop-blur-lg 
                  border border-white/30 dark:border-gray-700/40
                  flex flex-col items-center justify-center 
                  text-white dark:text-gray-900
                  opacity-0 group-hover:opacity-100 group-focus:opacity-100
                  transition-all duration-300 text-center px-3"
              >
                <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                  Faculty Development Program
                </h3>
                <p className="text-xs sm:text-sm mt-1 mb-4">
                  Conducted by Infosys, Mysore, Karnataka
                </p>

                {/* Iconic Button */}
                <a
                  href="#"
                  className="flex items-center gap-1 sm:gap-2 
             bg-blue-600 hover:bg-blue-700 
             text-white text-[10px] sm:text-xs md:text-sm 
             font-medium 
             py-1.5 sm:py-2 px-3 sm:px-4 md:px-5 
             rounded-full 
             transition-all duration-300 
             hover:scale-105 active:scale-95 
             shadow-md"
                >
                  <ExternalLink
                    size={14}
                    className="sm:w-4 sm:h-4 md:w-[16px] md:h-[16px]"
                  />
                  <span>Know More</span>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
