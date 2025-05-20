
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProductsSection from '../components/ProductsSection';
import SimulatorSection from '../components/SimulatorSection';
import TechnologySection from '../components/TechnologySection';
import ResponsiveDemoSection from '../components/ResponsiveDemoSection';
import DifferentialsSection from '../components/DifferentialsSection';
import CustomSolutionsSection from '../components/CustomSolutionsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CallToActionSection from '../components/CallToActionSection';
import Footer from '../components/Footer';
import CustomHeroButton from '../components/CustomHeroButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-digital-dark-purple">
      <Navbar />
      <div className="relative">
        <HeroSection />
        <div className="absolute bottom-12 left-0 right-0 flex justify-center z-10 pointer-events-none">
          <div className="pointer-events-auto">
            <CustomHeroButton />
          </div>
        </div>
      </div>
      <AboutSection />
      <ProductsSection />
      <SimulatorSection />
      <TechnologySection />
      <ResponsiveDemoSection />
      <DifferentialsSection />
      <CustomSolutionsSection />
      <TestimonialsSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default Index;
