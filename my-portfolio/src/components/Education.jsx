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
    degree: "Bachelor of Science – Physics, Mathematics, Computer Science",
    institution: "Canara First Grade College, Mangalore, Karnataka",
    period: "2015 – 2018",
    icon: <AcademicCapIcon className="w-6 h-6 text-white" />,
  },
];

const EducationTimeline = () => {
  return (
    <section
      id="education"
      className="bg-gray-50 dark:bg-gray-900 py-16 px-6 sm:px-12 lg:px-20 transition-colors"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center text-gray-900 dark:text-white">
          My Education
        </h2>

        <div className="flex flex-col space-y-12">
          {educations.map(({ degree, institution, period, icon }, idx) => (
            <div
              key={idx}
              className="relative bg-white/30 dark:bg-gray-800/40 backdrop-blur-md
                border border-white/30 dark:border-gray-700/50
                p-6 rounded-xl shadow-lg text-gray-900 dark:text-gray-100
                cursor-pointer
                transform transition-transform duration-300
                hover:scale-[1.03] hover:shadow-2xl"
              title={`${degree} at ${institution} (${period})`}
            >
              {/* Icon */}
              <div className="absolute top-6 left-6 w-12 h-12 bg-blue-600 dark:bg-blue-400 rounded-full flex items-center justify-center shadow-lg">
                {icon}
              </div>

              {/* Content with left padding */}
              <div className="ml-20">
                <h3 className="text-2xl font-semibold text-blue-600">{degree}</h3>
                {institution && (
                  <p className="mt-1 text-gray-800 dark:text-gray-300 font-medium">
                    {institution}
                  </p>
                )}
                {period && (
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
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
