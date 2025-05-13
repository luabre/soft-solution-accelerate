
import React from 'react';
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center relative overflow-hidden py-12 md:py-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-digital-dark-purple z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-digital-purple/5 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-digital-purple/20 via-transparent to-transparent opacity-70"></div>
      </div>
      
      {/* Animated orbs */}
      <div className="absolute top-1/3 right-[10%] w-32 h-32 bg-digital-purple/30 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-1/4 left-[15%] w-40 h-40 bg-digital-secondary-purple/20 rounded-full blur-xl animate-float-delay"></div>
      <div className="absolute top-1/2 left-[60%] w-24 h-24 bg-digital-vivid-purple/20 rounded-full blur-lg animate-float"></div>
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center gap-8 md:gap-12">
          {/* Main heading with impactful typography */}
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-white via-digital-purple to-white">
            <span className="block">DIGITAL</span>
            <span className="shimmer-text font-extrabold">TRANSFORMAÇÃO</span>
          </h1>
          
          {/* Highlighted bullet points */}
          <div className="flex flex-col gap-5 animate-fade-in-delay-1 max-w-2xl">
            {bulletPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-4 group">
                <span className="inline-block w-3 h-3 rounded-full bg-digital-purple group-hover:scale-125 transition-all duration-300"></span>
                <p className="text-xl md:text-2xl text-white/90 font-medium">{point}</p>
              </div>
            ))}
          </div>
          
          {/* CTA buttons with enhanced styling */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 animate-fade-in-delay-2">
            <Button className="bg-digital-purple hover:bg-digital-purple/90 text-white px-8 py-7 text-lg rounded-full flex items-center gap-2 hover:-translate-y-1 transition-all duration-300 shadow-[0_0_15px_rgba(155,135,245,0.5)]">
              Ver projetos
              <ArrowRight size={20} />
            </Button>
            <Button variant="outline" className="border-white/20 hover:border-digital-purple text-white hover:bg-white/5 px-8 py-7 text-lg rounded-full flex items-center gap-2 hover:-translate-y-1 transition-all duration-300">
              Solicitar solução
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom glow effect */}
      <div className="absolute -bottom-24 left-1/2 w-[800px] h-[200px] bg-digital-purple/30 rounded-full blur-[100px] -translate-x-1/2"></div>
    </section>
  );
};

// Bullet points data
const bulletPoints = [
  "Plataformas que pensam",
  "Negócios que escalam",
  "Automações que surpreendem"
];

export default HeroSection;
