import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import './index.css'; 
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import EducationTimeline from './components/Education';
import PortfolioShowcase from './components/PortfolioShowcase';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    console.log(
      "%cThis portfolio was built by Avinash",
      "color: purple; font-size: 16px;"
    );
  }, []);

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
      <footer className="text-center text-gray-400 text-sm py-4">
        © {new Date().getFullYear()} Portfolio built by 
        <span className="text-purple-400"> Avinash</span>.
      </footer>
    </div>
  );
}

export default App;
