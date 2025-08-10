// import React from "react";
// import { DocumentTextIcon, GlobeAltIcon } from "@heroicons/react/24/solid";

// // Publications Data
// const publicationsData = [
//   {
//     title:
//       "Biometric Authentication of a Person — Using Image Processing Technology",
//     category: "International",
//     icon: "Document",
//   },
//   {
//     title: "Agriculture Development and Management System",
//     category: "International",
//     icon: "Document",
//   },
// ];

// // Icon Library
// const IconLibrary = {
//   Document: (props) => <DocumentTextIcon {...props} />,
//   Globe: (props) => <GlobeAltIcon {...props} />,
// };

// // Publication Card
// const PublicationCard = ({ title, category, icon }) => {
//   const IconComponent = IconLibrary[icon];
//   return (
//     <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 text-left shadow-md transition-all duration-200 hover:bg-white/20">
//       {IconComponent && <IconComponent className="w-6 h-6 text-purple-400 mb-3" />}
//       <h3 className="text-base font-semibold text-white">{title}</h3>
//       <p className="mt-1 text-sm text-gray-300">{category}</p>
//     </div>
//   );
// };

// // Main Publications Section
// const Publications = () => {
//   return (
//     <section
//       id="publications"
//       className="py-10 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white"
//     >
//       <div className="text-center mb-6">
//         <h2 className="text-2xl sm:text-3xl font-bold">Research Papers & Publications</h2>
//         <p className="mt-2 text-gray-300 text-sm sm:text-base max-w-xl mx-auto">
//           Internationally recognized works in technology and innovation.
//         </p>
//       </div>

//       {/* Grid Layout */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         {publicationsData.map((pub, index) => (
//           <PublicationCard key={index} {...pub} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Publications;
