import React from 'react';
import Navbar from './components/Navbar';
import './index.css'; 
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import EducationTimeline from './components/Education';
import PortfolioShowcase from './components/PortfolioShowcase';
import Contact from './components/Contact';

function App() {

  return (
    <div className="bg-gray-50 dark:bg-gray-800 min-h-screen transition-colors">
      <Navbar />
      <section className="p-6 text-gray-800 dark:text-gray-200">
        <Home />
        <About />
        <Experience />
        <EducationTimeline />
        <PortfolioShowcase />
        <Contact />
      </section>

      {/* Footer Credit */}
      <footer className="text-center text-gray-400 text-sm py-4">Made with 💕 & ☕ <br />
        © {new Date().getFullYear()} 
        <span className="text-purple-400"> All Rights Reserved</span>.
      </footer>
    </div>
  );
}

export default App;
