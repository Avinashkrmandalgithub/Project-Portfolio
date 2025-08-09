import React from "react";
import {
  UserGroupIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/solid";

// Icon components (unchanged)
const CIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    title="C Language"
  >
    <circle cx="32" cy="32" r="30" fill="#A8B9CC" />
    <path
      d="M36.72,19.2C32.48,16.56,27.52,16.56,23.28,19.2C19.04,21.84,16.56,26.48,16.56,31.68C16.56,36.88,19.04,41.52,23.28,44.16C27.52,46.8,32.48,46.8,36.72,44.16"
      stroke="#00599C"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PythonIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    title="Python"
  >
    <path
      d="M32 60C18.745 60 8 49.255 8 36V28C8 14.745 18.745 4 32 4H36C42.627 4 48 9.373 48 16V26H38C32.477 26 28 30.477 28 36C28 41.523 32.477 46 38 46H56V36"
      fill="#306998"
    />
    <path
      d="M32 4C45.255 4 56 14.745 56 28V36C56 49.255 45.255 60 32 60H28C21.373 60 16 54.627 16 48V38H26C31.523 38 36 33.523 36 28C36 22.477 31.523 18 26 18H8V28"
      fill="#FFD43B"
    />
  </svg>
);

const SQLIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    title="SQL"
  >
    <rect width="64" height="64" rx="10" fill="#F29111" />
    <text
      x="32"
      y="42"
      textAnchor="middle"
      fill="white"
      fontWeight="bold"
      fontSize="24"
      fontFamily="Arial, sans-serif"
    >
      S
    </text>
    <path d="M12 22 H52" stroke="white" strokeWidth="4" />
    <path d="M12 32 H52" stroke="white" strokeWidth="4" />
    <path d="M12 42 H52" stroke="white" strokeWidth="4" />
  </svg>
);

const IconLibrary = {
  C: (props) => <CIcon {...props} />,
  Python: (props) => <PythonIcon {...props} />,
  SQL: (props) => <SQLIcon {...props} />,
  Volunteering: (props) => <UserGroupIcon {...props} />,
  Speaker: (props) => <PresentationChartBarIcon {...props} />,
};

const skillsData = [
  {
    category: "Programming Languages",
    details: "Building robust applications and data solutions.",
    icons: ["C", "Python", "SQL"],
    color: "bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500",
  },
  {
    category: "Volunteering",
    details: "Nodal Officer at Jnana Kaveri campus (UUCMS).",
    icons: ["Volunteering"],
    color: "bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-500",
  },
  {
    category: "Public Speaking",
    details: "Resource person at University College Bannadka, Mangalore.",
    icons: ["Speaker"],
    color: "bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500",
  },
];

const SkillCard = ({ category, details, icons, color }) => {
  const renderIcons = () => {
    if (icons.length > 1) {
      return (
        <div className="flex -space-x-3">
          {icons.map((iconName) => {
            const IconComponent = IconLibrary[iconName];
            return IconComponent ? (
              <IconComponent
                key={iconName}
                className="w-8 h-8 rounded-full bg-white p-1 shadow-md"
              />
            ) : null;
          })}
        </div>
      );
    }
    const IconComponent = IconLibrary[icons[0]];
    return IconComponent ? (
      <IconComponent className="w-10 h-10 text-white" />
    ) : null;
  };

  return (
    <div
      className={`group ${color} p-6 rounded-3xl shadow-lg cursor-pointer
        transition-transform transform hover:scale-105 hover:shadow-2xl
        flex items-start space-x-6
      `}
      tabIndex={0}
      aria-label={`${category} skill card`}
    >
      <div
        className="flex-shrink-0 rounded-full w-16 h-16 flex items-center justify-center
          bg-white bg-opacity-20 backdrop-blur-sm
          shadow-lg group-hover:bg-opacity-40 transition-all"
      >
        {renderIcons()}
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-white">{category}</h3>
        <p className="mt-1 text-white/90">{details}</p>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gray-50 dark:bg-gray-900 py-20 sm:py-24 px-4 sm:px-12 lg:px-24 transition-colors duration-500 min-h-screen flex flex-col items-center"
    >
      {/* Heading Section */}
      <header className="max-w-4xl text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          My Skills & Expertise
        </h2>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          A showcase of technologies and activities I excel at.
        </p>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-24">
        {/* Left floating animated icons */}
        <div className="flex flex-wrap md:flex-col justify-center md:justify-start w-full md:w-auto gap-6 md:gap-12">
          {["C", "Python", "SQL"].map((iconName, idx) => {
            const IconComponent = IconLibrary[iconName];
            return (
              <div
                key={iconName}
                className={`
                  w-20 h-20 flex items-center justify-center shadow-lg
                  cursor-pointer
                  bg-gradient-to-tr from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300
                  animate-bounce hover:animate-none
                  focus:outline-none focus:ring-4 focus:ring-blue-400 rounded-xl
                `}
                style={{ animationDelay: `${idx * 0.3}s` }}
                title={iconName}
                tabIndex={0}
                aria-label={`${iconName} icon`}
              >
                <IconComponent className="w-12 h-12 text-white drop-shadow-md" />
              </div>
            );
          })}
        </div>

        {/* Right side cards */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {skillsData.map((skill) => (
            <SkillCard key={skill.category} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
