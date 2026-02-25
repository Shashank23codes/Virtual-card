import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import QuickActions from './components/QuickActions';
import AboutInfo from './components/AboutInfo';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ContactFooter from './components/ContactFooter';
import TopNav from './components/TopNav';
import BottomNav from './components/BottomNav';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobile, setIsMobile] = useState(false);

  // Detect if screen is mobile (< 768px)
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIsMobile();

    // Add event listener
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-10 md:pb-0 md:pt-5">

      {/* Desktop Navigation */}
      <TopNav />

      {/* HOME SECTION - Full Width */}
      <div id="home" className={isMobile && activeTab !== 'home' ? 'hidden' : 'block w-full'}>
        <Hero />
      </div>

      {/* 
        Mobile View (App-like, conditionally rendered tabs) 
        Desktop View (Landing page, sequentially rendered sections)
      */}
      <div className="max-w-7xl mx-auto w-full">

        {/* ABOUT SECTION */}
        <div id="about" className={isMobile && activeTab !== 'about' ? 'hidden' : 'block'}>
          <AboutInfo />
        </div>

        {/* SERVICES SECTION */}
        <div id="services" className={isMobile && activeTab !== 'services' ? 'hidden' : 'block'}>
          <Services />
        </div>

        {/* TESTIMONIALS SECTION (Groups with Services on Mobile for simplicity, or keep hidden if totally strict. We'll show it only on Services tab on mobile to save space, but show everywhere on desktop) */}
        <div className={isMobile && activeTab !== 'services' ? 'hidden' : 'block'}>
          <Testimonials />
        </div>
      </div>

      {/* CONTACT SECTION (Footer) */}
      <div id="contact" className={isMobile && activeTab !== 'contact' ? 'hidden' : 'block'}>
        <ContactFooter />
      </div>

      {/* Mobile Navigation */}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />

    </div>
  );
}

export default App;



