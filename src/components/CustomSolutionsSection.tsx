
import React from 'react';
import { ArrowRight, Clock, Wand2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const CustomSolutionsSection = () => {
  return (
    <section className="w-full py-20 bg-digital-dark-purple relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-digital-purple/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-digital-secondary-purple/10 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-white/10 shadow-glow">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
            <span className="gradient-text">Transforme sua ideia</span> em produto digital premium
          </h2>
          
          <div className="flex flex-col items-center gap-8 mt-10">
            <div className="bg-digital-purple/20 text-white px-6 py-3 rounded-full text-center">
              <span className="font-bold">Projetos sob demanda com execução premium</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              <div className="bg-white/5 p-6 rounded-xl text-center border border-white/10 hover:border-digital-purple/50 transition-all duration-300 flex flex-col items-center group hover:translate-y-[-5px]">
                <Clock size={32} className="text-digital-purple mb-4 group-hover:text-white transition-colors" />
                <h3 className="font-bold mb-2 group-hover:text-digital-purple transition-colors">Modo Degustação</h3>
                <p className="text-gray-300 text-sm">7 dias de teste. Sem compromisso.</p>
              </div>
              
              <div className="bg-white/5 p-6 rounded-xl text-center border border-white/10 hover:border-digital-purple/50 transition-all duration-300 flex flex-col items-center group hover:translate-y-[-5px]">
                <Wand2 size={32} className="text-digital-purple mb-4 group-hover:text-white transition-colors" />
                <h3 className="font-bold mb-2 group-hover:text-digital-purple transition-colors">Feito Para Você</h3>
                <p className="text-gray-300 text-sm">O impossível entregue na medida.</p>
              </div>
              
              <div className="bg-white/5 p-6 rounded-xl text-center border border-white/10 hover:border-digital-purple/50 transition-all duration-300 flex flex-col items-center group hover:translate-y-[-5px]">
                <Zap size={32} className="text-digital-purple mb-4 group-hover:text-white transition-colors" />
                <h3 className="font-bold mb-2 group-hover:text-digital-purple transition-colors">Ultra Rápido</h3>
                <p className="text-gray-300 text-sm">6 meses de trabalho em 6 minutos.</p>
              </div>
            </div>
            
            <Button className="bg-digital-purple hover:bg-digital-purple/90 text-white px-10 py-6 rounded-full flex items-center gap-2 mt-6 hover:translate-y-[-5px] transition-all duration-300">
              Solicitar Solução
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSolutionsSection;
