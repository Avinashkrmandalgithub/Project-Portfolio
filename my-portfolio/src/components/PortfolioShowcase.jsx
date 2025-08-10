import React from "react";
import { motion } from "framer-motion";
import {
  DocumentTextIcon,
  GlobeAltIcon,
  UserGroupIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/solid";

// ===== Publications Data =====
const publicationsData = [
  {
    title:
      "Biometric Authentication of a Person — Using Image Processing Technology",
    category: "International",
    icon: "Document",
    color: "bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-500",
  },
  {
    title: "Agriculture Development and Management System",
    category: "International",
    icon: "Document",
    color: "bg-gradient-to-r from-pink-700 via-pink-600 to-pink-500",
  },
];

// ===== Skills Data =====
const skillsData = [
  {
    category: "Programming Languages",
    details: "Building robust applications and data solutions.",
    icons: ["Document"],
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

// ===== Icon Library =====
const IconLibrary = {
  Document: (props) => <DocumentTextIcon {...props} />,
  Globe: (props) => <GlobeAltIcon {...props} />,
  Volunteering: (props) => <UserGroupIcon {...props} />,
  Speaker: (props) => <PresentationChartBarIcon {...props} />,
};

// ===== Publication Card =====
const PublicationCard = ({ title, category, icon, color }) => {
  const IconComponent = IconLibrary[icon];
  return (
    <div
      className={`${color} rounded-2xl p-5 shadow-lg flex items-start space-x-4 min-w-[250px] sm:min-w-[300px] lg:min-w-[350px] mr-6 hover:scale-105 transition cursor-pointer`}
    >
      <div className="bg-white/20 p-3 rounded-full">
        {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-white/80">{category}</p>
      </div>
    </div>
  );
};

// ===== Skill Card =====
const SkillCard = ({ category, details, icons, color }) => {
  const renderIcons = () => (
    <div className="flex -space-x-3">
      {icons.map((iconName) => {
        const IconComponent = IconLibrary[iconName];
        return IconComponent ? (
          <IconComponent
            key={iconName}
            className="w-8 h-8 rounded-full bg-white p-1 shadow-md text-gray-900"
          />
        ) : null;
      })}
    </div>
  );

  return (
    <div
      className={`${color} p-5 rounded-2xl shadow-lg flex items-center space-x-4 min-w-[250px] sm:min-w-[300px] lg:min-w-[350px] mr-6 hover:scale-105 transition cursor-pointer`}
    >
      <div className="bg-white/20 p-3 rounded-full">{renderIcons()}</div>
      <div>
        <h3 className="text-lg font-semibold text-white">{category}</h3>
        <p className="text-sm text-white/80">{details}</p>
      </div>
    </div>
  );
};

// ===== Marquee Wrapper =====
const Marquee = ({ children, duration = 40 }) => {
  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: duration,
          ease: "linear",
        }}
        style={{ width: "max-content" }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};

// ===== Main Component =====
const PortfolioShowcase = () => {
  return (
    <section
      id="skills & work"
      className="py-10 px-4 text-gray-800 dark:text-gray-200"
    >
      <h2 className="text-3xl font-bold text-center mb-6">
        My Work & Skills
      </h2>

      {/* Publications */}
      <h3 className="text-2xl font-semibold mb-4 text-center">
        Research Papers & Publications
      </h3>

      {/* Mobile: stacked */}
      <div className="flex flex-col gap-4 sm:hidden">
        {publicationsData.map((pub, index) => (
          <PublicationCard key={index} {...pub} />
        ))}
      </div>

      {/* Desktop: marquee */}
      <div className="hidden sm:block">
        <Marquee duration={35}>
          {publicationsData.map((pub, index) => (
            <PublicationCard key={index} {...pub} />
          ))}
        </Marquee>
      </div>

      {/* Skills */}
      <h3 className="text-2xl font-semibold mt-10 mb-4 text-center">
        Skills & Expertise
      </h3>

      {/* Mobile: stacked */}
      <div className="flex flex-col gap-4 sm:hidden">
        {skillsData.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>

      {/* Desktop: marquee */}
      <div className="hidden sm:block">
        <Marquee duration={45}>
          {skillsData.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
