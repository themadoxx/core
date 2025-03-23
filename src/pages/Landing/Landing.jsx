import React from 'react';
import Navbar from '../../components/main/navbar/Navbar';
import HeroSection from '../../components/Pages/Landing/Hero/Hero';
import PricingSection from '../../components/Pages/Landing/Pricing/Pricing';

const Landing = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <PricingSection />
        </div>
    );
};

export default Landing;