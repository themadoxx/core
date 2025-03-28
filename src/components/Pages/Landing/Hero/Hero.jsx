import React from 'react';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-blue-900 w-full min-h-screen relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-blue-700 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-blue-600 rounded-full blur-3xl opacity-30"></div>
      </div>
      
      {/* Main content container */}
      <div className="container mx-auto px-4 pt-64 pb-16 relative z-10 flex flex-col items-center justify-center text-center">
        <div className="mb-16 md:mb-20">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            {t('hero.title1')}
            <div className="text-cyan-300 mt-2">
              {t('hero.title2')}
            </div>
          </h1>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-white text-lg md:text-xl mb-4">
            {t('hero.subtitle1')}
          </p>
          <p className="text-white text-base md:text-lg mb-12">
            {t('hero.subtitle2')}
          </p>
        </div>

        <button className="bg-white hover:bg-opacity-90 text-blue-900 font-medium py-3 px-8 rounded-md transition-all duration-300">
          {t('hero.cta')}
        </button>
      </div>
    </div>
  );
};

export default HeroSection;