import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import ReactCountryFlag from 'react-country-flag';
import i18n from '../../../i18n'; 

const languages = [
  { code: 'fr', countryCode: 'FR' },
  { code: 'en', countryCode: 'GB' },
  { code: 'ma', countryCode: 'MA' },
  { code: 'ar', countryCode: 'SA' },
  { code: 'de', countryCode: 'DE' },
];

const LanguageSelector = ({ scrolled = false, onChange = () => {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const dropdownRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Détection des clics à l'extérieur du dropdown pour le fermer
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const handleSelect = (lang) => {
    setSelectedLang(lang);
    setIsOpen(false);
    i18n.changeLanguage(lang.code);
    // TODO: intégrer changement de langue (i18n, routing, etc.)
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // < md
    };
  
    handleResize(); // appel initial
  
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const currentLangCode = i18n.language;
    const currentLang = languages.find((lang) => lang.code === currentLangCode);
    if (currentLang) {
      setSelectedLang(currentLang);
    }
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={`
            flex items-center justify-between
            ${isMobile ? 'w-full h-11 px-4' : 'w-24 h-10 px-3'}
            rounded-full transition-all duration-300 font-medium border text-sm
            ${
            scrolled
                ? 'bg-white text-gray-800 hover:bg-gray-50 border-gray-200 shadow-sm'
                : 'bg-white/20 text-black hover:bg-white/30 backdrop-blur-md border-white/30'
            }
        `}
        aria-label="Sélectionner une langue"
        >
        <div className="flex items-center">
          <ReactCountryFlag 
            countryCode={selectedLang.countryCode} 
            svg 
            style={{
              width: '1.25rem',
              height: '0.875rem',
              marginRight: '0.5rem'
            }}
          />
          <span className="font-semibold uppercase">{selectedLang.code}</span>
        </div>
        <FaChevronDown 
          className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg z-50 w-24">
          <ul className="py-1">
            {languages.map((lang) => (
              <li
                key={lang.code}
                onClick={() => handleSelect(lang)}
                className={`
                  flex items-center px-3 py-2 hover:bg-gray-50 cursor-pointer
                  ${selectedLang.code === lang.code ? 'bg-gray-50 font-medium' : 'text-gray-700'}
                `}
              >
                <ReactCountryFlag 
                  countryCode={lang.countryCode} 
                  svg 
                  style={{
                    width: '1.25rem',
                    height: '0.875rem',
                    marginRight: '0.5rem'
                  }}
                />
                <span className="uppercase font-semibold">{lang.code}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;