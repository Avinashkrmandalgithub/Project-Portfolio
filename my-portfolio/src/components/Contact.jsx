import React from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  LinkIcon,
} from "@heroicons/react/24/solid";

const contactInfo = [
  {
    title: "Phone",
    value: ["8951683619", "7019207710"],
    href: ["tel:8951683619", "tel:7019207710"],
    icon: PhoneIcon,
    color: "bg-purple-500",
  },
  {
    title: "Email",
    value: [
      "gourangabagh24@gmail.com",
      "grb.cs@brainwareuniversity.ac.in",
    ],
    href: [
      "mailto:gourangabagh24@gmail.com",
      "mailto:grb.cs@brainwareuniversity.ac.in",
    ],
    icon: EnvelopeIcon,
    color: "bg-pink-500",
  },
  {
    title: "LinkedIn",
    value: ["linkedin.com/in/gourangabagh3aa9731b6"],
    href: ["https://www.linkedin.com/in/gouranga-bag-3aa9731b6/"],
    icon: LinkIcon,
    color: "bg-blue-500",
  },
  {
    title: "Location",
    value: ["India"],
    href: [],
    icon: MapPinIcon,
    color: "bg-green-500",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-14 px-6 sm:px-10 bg-transparent text-gray-900 dark:text-white"
    >
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Let’s Connect
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300 text-lg">
          Reach out for collaborations, projects, or just to say hi!
        </p>
      </div>

      {/* Contact Cards */}
      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {contactInfo.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex-1 min-w-[260px] max-w-[320px] bg-white/60 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-purple-500/30 transition-all duration-500 cursor-pointer"
            >
              {/* Icon */}
              <div
                className={`flex items-center justify-center w-16 h-16 ${item.color} rounded-full mx-auto mb-4 shadow-lg`}
              >
                <Icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-center mb-2">
                {item.title}
              </h3>

              {/* Links / Values */}
              <div className="text-center space-y-1">
                {item.value.map((val, i) =>
                  item.href[i] ? (
                    <p key={i}>
                      <a
                        href={item.href[i]}
                        target={item.title === "LinkedIn" ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors break-words"
                      >
                        {val}
                      </a>
                    </p>
                  ) : (
                    <p
                      key={i}
                      className="text-gray-700 dark:text-gray-300 break-words"
                    >
                      {val}
                    </p>
                  )
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
