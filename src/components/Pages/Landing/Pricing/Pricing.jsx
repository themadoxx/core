import React from 'react';
import InfoBanner from '../../../banners/info/InfoBanner';
import PricingCard from '../../../cards/PricingCard';
import FeatureItem from '../../../icons/FeatureItem';

const PricingSection = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-navy-900 mb-12">Tarification</h2>
      
      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureItem 
          icon={
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10.34 15.84c.2.23.53.26.78.07l3.6-2.7c.25-.19.26-.52.02-.78l-3.6-3.6c-.2-.25-.53-.28-.78-.09-.26.2-.31.55-.09.78l2.9 2.9-2.9 2.64c-.2.24-.19.57.07.78z"></path>
              <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2V5a2 2 0 00-2-2zm0 16H5V5h14v14z"></path>
            </svg>
          } 
          title="Pas de frais d'installation"
        />
        <FeatureItem 
          icon={
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5zM19 19.09H5V4.91h14v14.18z"></path>
              <path d="M7 9h10v2H7zm0 4h5v2H7z"></path>
            </svg>
          } 
          title="Pas de frais mensuels"
        />
        <FeatureItem 
          icon={
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 18v1c0 1.1-.9 2-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14c1.1 0 2 .9 2 2v1h-9a2 2 0 00-2 2v8a2 2 0 002 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path>
            </svg>
          } 
          title="Payez comme vous le souhaitez"
        />
      </div>
      
      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <PricingCard 
          flagIcon={<span className="text-lg">🇲🇦</span>}
          cardTitle="Cartes marocaines"
          percentage="3.9"
          fee="2"
          description="Par transaction de carte réussie"
          bgColor="bg-green-400"
        />
        
        <PricingCard 
          flagIcon={<span className="text-lg">🌐</span>}
          cardTitle="Cartes internationales"
          percentage="4.9"
          fee="2"
          description="Par transaction de carte réussie"
          bgColor="bg-red-400"
        />
      </div>
      
      {/* Info Banner */}
      <InfoBanner>
        ADP vous offre des remises sur le volume si vous réalisez plus de 500 000 Dirhams de ventes chaque mois. Nous offrons également des remises aux marques et aux marchands locaux.
      </InfoBanner>
    </section>
  );
};

export default PricingSection;