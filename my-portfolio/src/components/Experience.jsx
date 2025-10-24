import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { AcademicCapIcon, CodeBracketIcon } from "@heroicons/react/24/solid";

const workExperiences = [
  {
    company: "Brainware University",
    shortName: "Brainware",
    role: "Assistant Professor",
    period: "01 Aug 2023 – Present",
    description: "Teaching for BCA & MCA students at Brainware University.",
    icon: <AcademicCapIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
  },
  {
    company: "Mangalore University",
    shortName: "Mangalore",
    role: "Guest Faculty",
    period: "15 Jan 2021 – 26 July 2023",
    description:
      "Taught M.Sc. students subjects including ML & AI, Data Science with Python, and Advanced Operating System.",
    icon: <AcademicCapIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
  },
  {
    company: "7edge Pvt Ltd",
    shortName: "7edge",
    role: "Software Engineer",
    period: "02 Nov 2020 – 04 Jan 2021",
    description: "Worked as a frontend developer.",
    icon: <CodeBracketIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
  },
];

const ExperienceTimeline = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    if (inView) controls.start({ height: "100%" });
  }, [inView, controls]);

  useEffect(() => {
    const checkScreenSize = () => setIsSmallScreen(window.innerWidth <= 400);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section
      id="experience"
      className="bg-gray-50 dark:bg-gray-900 py-12 sm:py-16 px-3 sm:px-6 md:px-12 lg:px-20 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-16 text-center text-gray-900 dark:text-white">
          My Career Journey
        </h2>

        {/* Small screen horizontal mini timeline */}
        <div className="flex justify-start sm:justify-center space-x-6 sm:space-x-8 mb-10 sm:mb-12 overflow-x-auto overflow-y-hidden px-2 sm:px-4 hide-scrollbar">
          {workExperiences.map(({ company, shortName, icon }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center space-y-1 min-w-[70px] sm:min-w-[90px] text-center"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-md cursor-pointer shrink-0">
                {icon}
              </div>
              <p className="text-[11px] sm:text-xs font-semibold text-gray-800 dark:text-gray-300 leading-tight break-words whitespace-normal">
                {isSmallScreen ? shortName : company}
              </p>
            </div>
          ))}
        </div>

        {/* Main timeline section */}
        <div className="relative max-w-4xl mx-auto w-full flex flex-col space-y-10 sm:space-y-16 md:grid md:grid-cols-2 md:gap-12">
          {/* Vertical line */}
          <motion.div
            ref={ref}
            initial={{ height: 0 }}
            animate={controls}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden md:block absolute left-1/2 top-0 w-1 -translate-x-1/2 rounded-full bg-blue-500 dark:bg-blue-400 backdrop-blur-md shadow-lg origin-top z-10"
          />

          {/* Timeline items */}
          {workExperiences.map(
            ({ company, role, period, description, icon }, idx) => (
              <motion.div
                key={idx}
                className={`relative ${
                  idx % 2 === 0
                    ? "md:justify-self-end md:text-left"
                    : "md:justify-self-start md:text-left"
                }`}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.3 }}
              >
                <div
                  className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-md
                    border border-white/30 dark:border-gray-700/50
                    p-4 sm:p-6 rounded-xl shadow-md text-gray-900 dark:text-gray-100
                    hover:shadow-xl transition-shadow relative"
                >
                  {/* Icon */}
                  <div className="absolute top-4 left-4 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 dark:bg-blue-400 rounded-full flex items-center justify-center shadow-md">
                    {icon}
                  </div>

                  {/* Text */}
                  <div className="ml-14 sm:ml-16">
                    <h3 className="text-lg sm:text-xl font-semibold text-blue-600">
                      {company}
                    </h3>
                    <p className="font-medium mt-1 text-sm sm:text-base text-gray-800 dark:text-gray-300">
                      {role}
                    </p>
                    <p className="text-xs sm:text-sm mt-1 text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                      {period}
                    </p>
                    <p className="text-xs sm:text-sm leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
