
import React, { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-digital-dark-purple/80 backdrop-blur-xl py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Innovative logo with glitch effect */}
        <a href="#" className="text-white font-bold text-2xl md:text-3xl group relative">
          <span className="glitch-text relative z-10">Digi</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-digital-purple to-digital-bright-blue">Unic</span>
          <div className="absolute -inset-1 bg-digital-purple/20 rounded-lg blur-lg group-hover:bg-digital-bright-blue/20 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
        </a>
        
        {/* Futuristic navigation with hover effects */}
        <nav className="hidden lg:flex items-center space-x-10">
          {['Soluções', 'Produtos', 'Diferenciais', 'Sobre', 'Contato'].map((item, index) => (
            <a 
              key={index}
              href="#" 
              className="nav-link relative overflow-hidden group"
            >
              <span className="relative z-10 text-white/80 hover:text-white transition-colors text-lg">
                {item}
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-digital-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="absolute top-0 left-0 w-0 h-0 border-t border-l border-digital-bright-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 border-b border-r border-digital-bright-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
          ))}
        </nav>
        
        {/* Creative CTA button with hover animation */}
        <div className="hidden lg:block">
          <button className="cyber-cta relative px-8 py-3 overflow-hidden group">
            <span className="relative z-10 text-white group-hover:text-digital-bright-blue transition-colors duration-300">
              Iniciar Projeto
            </span>
            <span className="absolute inset-0 border-2 border-digital-purple/50 group-hover:border-digital-bright-blue"></span>
            <span className="absolute inset-0 bg-digital-purple/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            <span className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg 
                className="w-5 h-5 text-digital-bright-blue" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </span>
          </button>
        </div>
        
        {/* Interactive mobile menu toggle */}
        <button 
          className="lg:hidden text-white focus:outline-none relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative w-8 h-8">
            <span className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3.5' : 'top-2'}`}></span>
            <span className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100 top-3.5'}`}></span>
            <span className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3.5' : 'top-5'}`}></span>
          </div>
        </button>
      </div>
      
      {/* Creative mobile menu overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-gradient-to-b from-digital-dark-purple/95 to-black/95 backdrop-blur-md flex flex-col z-40 animate-fade-in">
          <div className="container mx-auto px-4 pt-8 pb-16 flex flex-col gap-6">
            {['Soluções', 'Produtos', 'Diferenciais', 'Sobre', 'Contato'].map((item, index) => (
              <a 
                key={index}
                href="#" 
                className="text-xl text-white hover:text-digital-bright-blue transition-colors py-3 border-b border-white/10 flex items-center justify-between"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{item}</span>
                <span className="w-1.5 h-1.5 bg-digital-purple rounded-full"></span>
              </a>
            ))}
            
            <button className="bg-digital-dark-purple border border-digital-purple text-white hover:bg-digital-purple/10 px-6 py-4 mt-4 rounded-none text-lg relative overflow-hidden">
              <span className="relative z-10">Iniciar Projeto</span>
              <span className="absolute top-0 right-0 w-12 h-12 -mt-3 -mr-3 bg-digital-bright-blue rounded-full opacity-20"></span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
