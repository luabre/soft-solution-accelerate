
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

const Index = () => {
  return (
    <div className="min-h-screen bg-digital-dark-purple">
      <Navbar />
      <HeroSection />
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
