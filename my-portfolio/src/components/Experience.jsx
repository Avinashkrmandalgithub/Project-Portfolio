import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { AcademicCapIcon, CodeBracketIcon } from "@heroicons/react/24/solid";

const workExperiences = [
  {
    company: "Brainware University",
    role: "Assistant Professor",
    period: "01 Aug 2023 – present",
    description: "Teaching for BCA & MCA students at Brainware University.",
    icon: <AcademicCapIcon className="w-6 h-6 text-white" />,
  },
  {
    company: "Mangalore University",
    role: "Guest Faculty",
    period: "15 Jan 2021 – 26 July 2023",
    description:
      "Taught M.Sc. students subjects including ML & AI, Data Science with Python, and Advanced Operating System.",
    icon: <AcademicCapIcon className="w-6 h-6 text-white" />,
  },
  {
    company: "7edge Pvt Ltd",
    role: "Software Engineer",
    period: "02 Nov 2020 – 04 Jan 2021",
    description: "Worked as a frontend developer.",
    icon: <CodeBracketIcon className="w-6 h-6 text-white" />,
  },
];

const ExperienceTimeline = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ height: "100%" });
    }
  }, [inView, controls]);

  return (
    <section
      id="experience"
      className="bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 md:px-12 lg:px-20 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center text-gray-900 dark:text-white">
          My Career Journey
        </h2>

        {/* Small screen horizontal mini timeline with icons */}
        <div className="flex justify-center space-x-8 mb-12 md:hidden overflow-x-auto px-4">
          {workExperiences.map(({ company, icon }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center space-y-1 min-w-[80px]"
            >
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer">
                {icon}
              </div>
              <p className="text-xs font-semibold text-gray-800 dark:text-gray-300 text-center truncate">
                {company}
              </p>
            </div>
          ))}
        </div>

        {/* Container with relative positioning for timeline line and items */}
        <div className="relative max-w-4xl mx-auto w-full flex flex-col space-y-16 md:grid md:grid-cols-2 md:gap-12">
          {/* Vertical timeline line, absolute centered */}
          <motion.div
            ref={ref}
            initial={{ height: 0 }}
            animate={controls}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden md:block absolute left-1/2 top-0 w-1 -translate-x-1/2 rounded-full
              bg-blue-500 dark:bg-blue-400 backdrop-blur-md shadow-lg origin-top z-10"
            style={{ height: "0%" }}
          />

          {/* Timeline items */}
          {workExperiences.map(
            ({ company, role, period, description, icon }, idx) => (
              <motion.div
                key={idx}
                className={`relative
                  ${idx % 2 === 0 ? "md:justify-self-end md:text-left" : "md:justify-self-start md:text-left"}`}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.3 }}
              >
                {/* Glassmorphic card with icon inside */}
                <div
                  className="bg-white/30 dark:bg-gray-800/40 backdrop-blur-md
                    border border-white/30 dark:border-gray-700/50
                    p-6 rounded-xl shadow-lg text-gray-900 dark:text-gray-100
                    cursor-pointer hover:shadow-2xl transition-shadow relative"
                >
                  {/* Icon container top-left */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-blue-600 dark:bg-blue-400 rounded-full flex items-center justify-center shadow-lg">
                    {icon}
                  </div>

                  <div className="ml-16">
                    <h3 className="text-2xl font-semibold text-blue-600">
                      {company}
                    </h3>
                    <p className="font-medium mt-1 text-gray-800 dark:text-gray-300">
                      {role}
                    </p>
                    <p className="text-sm mt-1 text-gray-600 dark:text-gray-400 mb-4">
                      {period}
                    </p>
                    <p className="leading-relaxed">{description}</p>
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
