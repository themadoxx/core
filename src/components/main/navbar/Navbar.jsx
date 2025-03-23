import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import LanguageSelector from '../../buttons/Language/LanguageSelector';
import BurgerToggle from '../../buttons/Language/BurgerToggle';

const Navbar = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isWhiteMode = scrolled || menuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-6 py-0 transition-all duration-300
      ${isWhiteMode ? 'bg-white shadow-lg rounded-xl' : 'bg-white/10 backdrop-blur-md shadow-xs rounded-xl'}
      max-w-7xl w-[95%]`}>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center text-2xl font-bold">
            <span className="text-blue-900">a·</span>
            <span className={isWhiteMode ? 'text-gray-800' : 'text-white'}>d</span>
            <span className={isWhiteMode ? 'text-gray-800' : 'text-white'}>·paiements</span>
          </a>

          {/* Burger Mobile */}
          <div className="md:hidden">
            <BurgerToggle isOpen={menuOpen} toggle={() => setMenuOpen(!menuOpen)} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/solutions" label={t('navbar.links.solutions')} scrolled={scrolled} />
            <NavLink to="/entreprise" label={t('navbar.links.entreprise')} scrolled={scrolled} />
            <NavLink to="/ressources" label={t('navbar.links.ressources')} scrolled={scrolled} />
            <NavLink to="/developpeurs" label={t('navbar.links.developpeurs')} scrolled={scrolled} />
          </div>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector scrolled={scrolled} />
            <a href="/login" className={`font-medium ${isWhiteMode ? 'text-gray-700' : 'text-white'}`}>
              {t('navbar.login')}
            </a>
            <a href="/contact" className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300">
              {t('navbar.contact')}
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 pb-4 flex flex-col space-y-4">
            <NavLink to="/solutions" label={t('navbar.links.solutions')} scrolled={true} />
            <NavLink to="/entreprise" label={t('navbar.links.entreprise')} scrolled={true} />
            <NavLink to="/ressources" label={t('navbar.links.ressources')} scrolled={true} />
            <NavLink to="/developpeurs" label={t('navbar.links.developpeurs')} scrolled={true} />
            <NavLink to="/faqs" label={t('navbar.links.faqs')} scrolled={true} />
            <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200">
              <LanguageSelector scrolled={true} />
              <a href="/login" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md text-center">
                {t('navbar.login')}
              </a>
              <a href="/contact" className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md text-center">
                {t('navbar.contact')}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Reusable NavLink
const NavLink = ({ to, label, scrolled }) => (
  <a
    href={to}
    className={`font-medium transition-colors duration-300 ${
      scrolled ? 'text-gray-700 hover:text-blue-900' : 'text-white hover:text-blue-100'
    }`}
  >
    {label}
  </a>
);

export default Navbar;