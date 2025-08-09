import React from "react";
import { motion } from "framer-motion";
import awardIcon from "../assets/award.png";
import certificateIcon from "../assets/certificate.png";

const About = () => {
  return (
    <section 
    id="about"
    className="bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 md:px-16 transition-colors">
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

          {/* Achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Card 1 */}
            <motion.div
              tabIndex={0}
              className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <img
                src={awardIcon}
                alt="UGC NET"
                className="w-full h-48 sm:h-56 md:h-64 object-contain p-6 bg-white/10 dark:bg-gray-700/30 backdrop-blur-lg"
              />
              {/* Glassmorphic Overlay */}
              <div className="absolute inset-0 
                bg-black/40 dark:bg-white/20
                backdrop-blur-lg 
                border border-white/30 dark:border-gray-700/40
                flex flex-col items-center justify-center 
                text-white dark:text-gray-900
                opacity-0 group-hover:opacity-100 group-focus:opacity-100
                transition-opacity duration-300 text-center px-3"
              >
                <h3 className="text-base sm:text-lg font-semibold">UGC NET 2020</h3>
                <p className="text-xs sm:text-sm mt-1">Computer Science & Applications</p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              tabIndex={0}
              className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <img
                src={certificateIcon}
                alt="FDP"
                className="w-full h-48 sm:h-56 md:h-64 object-contain p-6 bg-white/10 dark:bg-gray-700/30 backdrop-blur-lg"
              />
              {/* Glassmorphic Overlay */}
              <div className="absolute inset-0 
                bg-black/40 dark:bg-white/20
                backdrop-blur-lg 
                border border-white/30 dark:border-gray-700/40
                flex flex-col items-center justify-center 
                text-white dark:text-gray-900
                opacity-0 group-hover:opacity-100 group-focus:opacity-100
                transition-opacity duration-300 text-center px-3"
              >
                <h3 className="text-base sm:text-lg font-semibold">Faculty Development Program</h3>
                <p className="text-xs sm:text-sm mt-1">Conducted by Infosys, Mysore, Karnataka</p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
