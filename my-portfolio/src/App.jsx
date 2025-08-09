import React from 'react';
import Navbar from './components/Navbar';
import './index.css'; 
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import EducationTimeline from './components/Education';
import Skills from './components/Skills';

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 min-h-screen transition-colors">
      <Navbar />
      <section className="p-6 text-gray-800 dark:text-gray-200">
        <Home />
        <About />
        <Experience />
        <EducationTimeline />
        <Skills />
      </section>
    </div>
  );
}

export default App;
