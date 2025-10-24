import React from "react";
import { AcademicCapIcon } from "@heroicons/react/24/solid";

const educations = [
  {
    degree: "Ph.D. – Computer Science",
    institution: "Vidyasagar University, Mednipur, West Bengal",
    period: "2025 – present",
    icon: <AcademicCapIcon className="w-6 h-6 text-white" />,
  },
  {
    degree: "Master of Science – Computer Science",
    institution: "Mangalore University, Konaje, Mangalagangotri, Karnataka",
    period: "2018 – 2020",
    icon: <AcademicCapIcon className="w-6 h-6 text-white" />,
  },
  {
    degree:
      "Bachelor of Science – Physics, Mathematics, Computer Science",
    institution: "Canara First Grade College, Mangalore, Karnataka",
    period: "2015 – 2018",
    icon: <AcademicCapIcon className="w-6 h-6 text-white" />,
  },
];

const EducationTimeline = () => {
  return (
    <section
      id="education"
      className="bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-8 lg:px-20 transition-colors"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-16 text-center text-gray-900 dark:text-white">
          My Education
        </h2>

        <div className="flex flex-col space-y-8 sm:space-y-12">
          {educations.map(({ degree, institution, period, icon }, idx) => (
            <div
              key={idx}
              className="relative bg-white/30 dark:bg-gray-800/40 backdrop-blur-md
                border border-white/30 dark:border-gray-700/50
                p-4 sm:p-6 rounded-xl shadow-lg text-gray-900 dark:text-gray-100
                cursor-pointer transform transition-transform duration-300
                hover:scale-[1.02] hover:shadow-2xl"
              title={`${degree} at ${institution} (${period})`}
            >
              {/* Icon */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 dark:bg-blue-400 rounded-full flex items-center justify-center shadow-lg">
                {icon}
              </div>

              {/* Content */}
              <div className="ml-16 sm:ml-20">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-600">
                  {degree}
                </h3>
                {institution && (
                  <p className="mt-1 text-sm sm:text-base text-gray-800 dark:text-gray-300 font-medium">
                    {institution}
                  </p>
                )}
                {period && (
                  <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {period}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
