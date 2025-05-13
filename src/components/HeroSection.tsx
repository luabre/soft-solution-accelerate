
import React from 'react';
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center relative overflow-hidden py-20 hero-grid">
      <div className="absolute inset-0 bg-gradient-radial from-digital-purple/10 to-transparent opacity-50"></div>
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center gap-6 md:gap-8">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter max-w-4xl opacity-0 animate-fade-in">
            Criamos plataformas que <span className="shimmer-text">pensam</span>. 
            Negócios que <span className="gradient-text">escalam</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl opacity-0 animate-fade-in-delay-1">
            A Digital Soft Solution lança produtos digitais com inteligência viva, 
            automação profunda e autonomia operacional — prontos para escalar, vender e surpreender.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4 opacity-0 animate-fade-in-delay-2">
            <Button className="bg-digital-purple hover:bg-digital-purple/90 text-white px-8 py-6 rounded-md flex items-center gap-2 hover-scale">
              Ver nossos projetos
              <ArrowRight size={18} />
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-md flex items-center gap-2 hover-scale">
              Solicitar uma solução sob medida
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
