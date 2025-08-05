import React, { useState,useEffect } from 'react'
import { Header } from './components/header';
import Hero from './components/Hero';
import About from './components/About';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { FloatingElements } from './sharedComponents/FloatingElement';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'publications', 'contact'];
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans relative overflow-x-hidden">
      <FloatingElements />
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero activeSection={activeSection} setActiveSection={setActiveSection}/>
      <About />
      <Publications />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;