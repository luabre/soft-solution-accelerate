
import React from 'react';
import { Button } from "@/components/ui/button";
import { Zap, Rocket, Brain } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden bg-digital-dark-purple/90">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center animate-fade-in">
            Somos a mente por trás das plataformas que vão
            <span className="gradient-text block mt-2">desafiar gigantes.</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-digital-purple/50 transition-all duration-300 hover:transform hover:scale-105 group">
              <Zap size={40} className="text-digital-purple mb-4 group-hover:text-white transition-colors duration-300" />
              <h3 className="text-xl font-bold mb-3">Tecnologia Viva</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-digital-purple rounded-full"></span>
                  <span>Inteligência nativa</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-digital-purple rounded-full"></span>
                  <span>Automação profunda</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-digital-purple rounded-full"></span>
                  <span>Autonomia operacional</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-digital-purple/50 transition-all duration-300 hover:transform hover:scale-105 group">
              <Brain size={40} className="text-digital-purple mb-4 group-hover:text-white transition-colors duration-300" />
              <h3 className="text-xl font-bold mb-3">Produtos Disruptivos</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-digital-purple rounded-full"></span>
                  <span>SourceXpress</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-digital-purple rounded-full"></span>
                  <span>LeadHunter AI</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-digital-purple rounded-full"></span>
                  <span>TaskGenius AI</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-digital-purple/50 transition-all duration-300 hover:transform hover:scale-105 group">
              <Rocket size={40} className="text-digital-purple mb-4 group-hover:text-white transition-colors duration-300" />
              <h3 className="text-xl font-bold mb-3">Crescimento Exponencial</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-digital-purple rounded-full"></span>
                  <span>Escala sem limites</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-digital-purple rounded-full"></span>
                  <span>Resultados em tempo real</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-digital-purple rounded-full"></span>
                  <span>Crescimento acelerado</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <Button className="bg-transparent border-2 border-digital-purple hover:bg-digital-purple/20 text-white px-8 py-6 rounded-full hover:translate-y-[-5px] transition-all duration-300">
              Nossa visão
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background element */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-digital-purple/10 rounded-full blur-[120px]"></div>
    </section>
  );
};

export default AboutSection;
