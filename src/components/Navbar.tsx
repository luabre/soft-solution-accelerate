
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-digital-dark-purple/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="text-white font-bold text-2xl md:text-3xl">
          Digital<span className="text-digital-purple">Soft</span>
        </a>
        
        <nav className="hidden lg:flex items-center space-x-10">
          <a href="#" className="text-white hover:text-digital-purple transition-colors text-lg">Soluções</a>
          <a href="#" className="text-white hover:text-digital-purple transition-colors text-lg">Produtos</a>
          <a href="#" className="text-white hover:text-digital-purple transition-colors text-lg">Diferenciais</a>
          <a href="#" className="text-white hover:text-digital-purple transition-colors text-lg">Sobre nós</a>
          <a href="#" className="text-white hover:text-digital-purple transition-colors text-lg">Contato</a>
        </nav>
        
        <div className="hidden lg:block">
          <Button className="bg-digital-purple hover:bg-digital-purple/90 text-white px-8 py-6 rounded-full text-lg shadow-[0_0_15px_rgba(155,135,245,0.3)]">
            Solicitar Solução
          </Button>
        </div>
        
        <button 
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-digital-dark-purple/95 backdrop-blur-md flex flex-col z-40 animate-fade-in">
          <div className="container mx-auto px-4 pt-8 pb-16 flex flex-col gap-6">
            <a href="#" className="text-xl text-white hover:text-digital-purple transition-colors py-3 border-b border-white/10">Soluções</a>
            <a href="#" className="text-xl text-white hover:text-digital-purple transition-colors py-3 border-b border-white/10">Produtos</a>
            <a href="#" className="text-xl text-white hover:text-digital-purple transition-colors py-3 border-b border-white/10">Diferenciais</a>
            <a href="#" className="text-xl text-white hover:text-digital-purple transition-colors py-3 border-b border-white/10">Sobre nós</a>
            <a href="#" className="text-xl text-white hover:text-digital-purple transition-colors py-3 border-b border-white/10">Contato</a>
            
            <Button className="bg-digital-purple hover:bg-digital-purple/90 text-white px-6 py-7 mt-4 rounded-full text-lg">
              Solicitar Solução
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
