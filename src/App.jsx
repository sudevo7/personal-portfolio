import React from 'react';
import ProfileCard from './components/ProfileCard';
import Navbar from './components/Navbar';
import About from './components/About';
import Technologies from './components/Technologies';
import PortfolioShowcase from './components/PortfolioShowcase';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-800 min-h-screen">
      <div className="lg:hidden">
        <Navbar />
      </div>
      <ProfileCard />
      
      <main className="flex-1">
        <div className="hidden lg:block">
          <Navbar />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 lg:px-8 space-y-8 py-8">
          <About />
          <Technologies />
          <PortfolioShowcase />
          <Contact />
        </div>
        
        <Footer />
      </main>
    </div>
  );
};

export default App;