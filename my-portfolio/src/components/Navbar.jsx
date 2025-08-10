import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark');
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ['Home','About', 'Experience', 'Education', 'Skills & Work', 'Contact'];

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300 font-poppins relative z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-2xl w-12 h-12 flex items-center justify-center rounded-full shadow-lg">
          GB
        </div>
        <span className="font-bold text-xl text-gray-800 dark:text-gray-200 hidden md:inline">
          Gouranga Bag
        </span>
      </div>

      {/* Desktop Nav */}
      <ul className="hidden lg:flex space-x-10 font-semibold text-lg">
        {navLinks.map(item => (
          <li key={item} className="relative group">
            <a
              href={`#${item.toLowerCase()}`}
              className="text-gray-800 dark:text-gray-200 transition-colors duration-300"
            >
              {item}
            </a>
            <span className="absolute left-0 bottom-0 h-0.5 bg-blue-500 w-0 group-hover:w-full transition-all duration-300 group-hover:dark:shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
          </li>
        ))}
      </ul>

      {/* Right controls */}
      <div className="flex items-center space-x-4">
        {/* Dark mode toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition-transform"
        >
          {darkMode ? <SunIcon className="h-6 w-6 text-yellow-400" /> : <MoonIcon className="h-6 w-6 text-gray-800" />}
        </button>

        {/* Hamburger */}
        <button
          className="lg:hidden p-2 rounded-md bg-gray-200 dark:bg-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <XMarkIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" /> : <Bars3Icon className="h-6 w-6 text-gray-800 dark:text-gray-200" />}
        </button>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Glassmorphic Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg border-l border-white/30 dark:border-gray-700/30 shadow-lg transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 lg:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)}>
            <XMarkIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
          </button>
        </div>
        <ul className="flex flex-col space-y-6 pl-8 font-semibold text-lg mt-4">
          {navLinks.map(item => (
            <li key={item} className="relative group">
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-800 dark:text-gray-200 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
              <span className="absolute left-0 bottom-0 h-0.5 bg-blue-500 w-0 group-hover:w-full transition-all duration-300 group-hover:dark:shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
