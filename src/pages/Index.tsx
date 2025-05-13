
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProductsSection from '../components/ProductsSection';
import DifferentialsSection from '../components/DifferentialsSection';
import CustomSolutionsSection from '../components/CustomSolutionsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-digital-dark-purple">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <DifferentialsSection />
      <CustomSolutionsSection />
      <Footer />
    </div>
  );
};

export default Index;
