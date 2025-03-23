
import React from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const BurgerToggle = ({ isOpen, toggle }) => {
  return (
    <button 
      onClick={toggle} 
      className="text-black focus:outline-none transition-transform duration-300 ease-in-out"
    >
      <div className="relative w-8 h-8">
        {/* Icône burger */}
        <div className={`absolute inset-0 transform transition-all duration-300 ease-in-out
          ${isOpen ? 'rotate-180 opacity-0 scale-75' : 'rotate-0 opacity-100 scale-100'}`}>
          <Bars3Icon className="h-8 w-8" />
        </div>
        {/* Icône croix */}
        <div className={`absolute inset-0 transform transition-all duration-300 ease-in-out
          ${isOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-180 opacity-0 scale-75'}`}>
          <XMarkIcon className="h-8 w-8" />
        </div>
      </div>
    </button>
  );
};

export default BurgerToggle;