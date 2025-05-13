
import React from 'react';
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center relative overflow-hidden py-12 md:py-20 hero-grid">
      <div className="absolute inset-0 bg-gradient-radial from-digital-purple/20 to-transparent opacity-70"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 right-10 w-32 h-32 bg-digital-purple/30 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-1/4 left-10 w-40 h-40 bg-digital-secondary-purple/20 rounded-full blur-xl animate-float-delay"></div>
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center gap-6">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight opacity-0 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-white via-digital-purple to-white">
            CRIAMOS O <span className="shimmer-text font-extrabold">FUTURO</span>
          </h1>
          
          <div className="flex flex-col gap-3 opacity-0 animate-fade-in-delay-1 max-w-xl">
            <div className="flex items-center gap-2 text-lg md:text-xl">
              <span className="inline-block w-2 h-2 rounded-full bg-digital-purple"></span>
              <p className="text-white/90">Plataformas que pensam</p>
            </div>
            <div className="flex items-center gap-2 text-lg md:text-xl">
              <span className="inline-block w-2 h-2 rounded-full bg-digital-purple"></span>
              <p className="text-white/90">Negócios que escalam</p>
            </div>
            <div className="flex items-center gap-2 text-lg md:text-xl">
              <span className="inline-block w-2 h-2 rounded-full bg-digital-purple"></span>
              <p className="text-white/90">Automações que surpreendem</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4 opacity-0 animate-fade-in-delay-2">
            <Button className="bg-digital-purple hover:bg-digital-purple/90 text-white px-8 py-6 rounded-full flex items-center gap-2 hover:translate-y-[-5px] transition-all duration-300">
              Ver projetos
              <ArrowRight size={18} />
            </Button>
            <Button variant="outline" className="border-white/20 hover:border-digital-purple text-white hover:bg-white/5 px-8 py-6 rounded-full flex items-center gap-2 hover:translate-y-[-5px] transition-all duration-300">
              Solicitar solução
            </Button>
          </div>
        </div>
      </div>

      {/* Visual elements */}
      <div className="absolute -bottom-24 left-1/2 w-[800px] h-[200px] bg-digital-purple/30 rounded-full blur-[100px] -translate-x-1/2"></div>
    </section>
  );
};

export default HeroSection;
