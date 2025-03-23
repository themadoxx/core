import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center text-2xl font-bold">
              <span className="text-blue-900">africaine·</span>
              <span className={scrolled ? 'text-gray-800' : 'text-white'}>d</span>
              <span className={scrolled ? 'text-gray-800' : 'text-white'}>·paiements</span>
            </a>
          </div>
          
          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink title="Solutions" scrolled={scrolled} />
            <NavLink title="Coverage" scrolled={scrolled} />
            <NavLink title="Customers" scrolled={scrolled} />
            <NavLink title="Industries" scrolled={scrolled} />
            <NavLink title="Company" scrolled={scrolled} />
            <NavLink title="Resources" scrolled={scrolled} />
            <NavLink title="Developers" scrolled={scrolled} />
            <NavLink title="FAQs" scrolled={scrolled} />
          </div>
          
          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Language selector */}
            <div className="relative">
              <button className={`flex items-center ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
                </svg>
                EN
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
            
            {/* Login button */}
            <a href="/login" className={`font-medium ${scrolled ? 'text-gray-700' : 'text-white'}`}>
              Login
            </a>
            
            {/* Contact Sales button */}
            <a href="/contact" className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300">
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Reusable NavLink component
const NavLink = ({ title, scrolled }) => (
  <a 
    href={`/${title.toLowerCase()}`} 
    className={`font-medium transition-colors duration-300 ${
      scrolled ? 'text-gray-700 hover:text-blue-900' : 'text-white hover:text-blue-100'
    }`}
  >
    {title}
  </a>
);

export default Navbar;