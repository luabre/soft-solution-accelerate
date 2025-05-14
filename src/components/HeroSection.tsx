
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (textRef.current) {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth) * 20 - 10;
        const y = (clientY / window.innerHeight) * 20 - 10;
        
        textRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      // Create star element
      const star = document.createElement('div');
      star.className = 'absolute rounded-full bg-white/40 pointer-events-none animate-star-fade';
      
      // Random size between 3-10px
      const size = Math.random() * 7 + 3;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Position at mouse with small offset
      star.style.left = `${e.clientX + (Math.random() * 30 - 15)}px`;
      star.style.top = `${e.clientY + (Math.random() * 30 - 15)}px`;
      
      container.appendChild(star);
      
      // Remove after animation completes
      setTimeout(() => {
        star.remove();
      }, 1500);
    };

    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="w-full min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      {/* Innovative background - diagonal split with gradient */}
      <div className="absolute inset-0 bg-digital-dark-purple z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-digital-bright-blue/20 via-digital-purple/10 to-transparent"></div>
        <div className="absolute top-0 right-0 w-full h-full rotate-180 transform skew-y-12 bg-gradient-to-b from-digital-vivid-purple/10 via-transparent to-transparent opacity-70"></div>
      </div>
      
      {/* Interactive 3D elements */}
      <div className="absolute top-1/4 right-1/5 w-64 h-64 rounded-full interactive-sphere"></div>
      <div className="absolute bottom-1/3 left-1/6 w-40 h-40 rounded-full interactive-sphere-alt"></div>
      
      {/* Futuristic grid overlay */}
      <div className="absolute inset-0 futuristic-grid opacity-20"></div>

      {/* Animated particles */}
      <div className="particles"></div>
      
      {/* Main content area */}
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center gap-10 text-center">
          {/* Main heading with 3D perspective effect */}
          <div
            ref={textRef} 
            className="perspective-text transition-transform duration-200 ease-out"
          >
            <h1 className="glitch-heading text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter">
              <span className="block relative inline-block transform hover:scale-110 transition-transform duration-300 perspective-layer-1">DIGITAL</span>
              <span className="neon-text block perspective-layer-2">TRANS<span className="text-digital-bright-blue">FORMA</span>ÇÃO</span>
            </h1>
          </div>
          
          {/* Minimal key points with creative styling */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-3xl mx-auto">
            {["PLATAFORMAS PENSANTES", "NEGÓCIOS ESCALÁVEIS", "AUTOMAÇÃO SURPREENDENTE"].map((point, idx) => (
              <div 
                key={idx} 
                className="feature-pill group"
              >
                <span className="text-lg md:text-xl font-medium">{point}</span>
                <div className="feature-pill-glow"></div>
              </div>
            ))}
          </div>
          
          {/* Interactive call-to-action */}
          <div className="flex flex-col sm:flex-row gap-8 mt-12">
            <Button className="magnetic-button">
              <span className="relative z-10 flex items-center gap-2">
                Iniciar projeto
                <ArrowRight size={20} />
              </span>
            </Button>
            
            <Button variant="outline" className="cyber-button">
              <span className="glitch-text">Ver soluções</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Floating tech symbols */}
      <div className="absolute top-1/2 left-1/4 tech-symbol text-5xl opacity-20">&lt;/&gt;</div>
      <div className="absolute bottom-1/3 right-1/5 tech-symbol text-4xl opacity-15">AI</div>
      <div className="absolute top-1/3 right-1/3 tech-symbol text-6xl opacity-10">∞</div>
    </section>
  );
};

export default HeroSection;
