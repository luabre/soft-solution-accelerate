
import React from 'react';
import { Check, TrendingUp, Zap, Award, ShieldCheck, Users } from "lucide-react";

interface DifferentialItemProps {
  text: string;
}

const DifferentialItem = ({ text }: DifferentialItemProps) => {
  return (
    <div className="flex items-center gap-3 group hover:scale-105 transition-transform">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-digital-purple/20 flex items-center justify-center text-digital-purple group-hover:bg-digital-purple group-hover:text-white transition-colors duration-300">
        <Check size={18} />
      </div>
      <span className="text-lg text-gray-200 group-hover:text-white transition-colors duration-300">{text}</span>
    </div>
  );
};

const DifferentialsSection = () => {
  const differentials = [
    "Arquitetura pensada para escalar",
    "Fluxos automatizados de ponta a ponta",
    "Experiência fluida e adaptável",
    "IA integrada nativamente",
    "Produtos que funcionam com o mínimo de esforço humano",
    "Visão estratégica desde o primeiro clique"
  ];

  return (
    <section className="w-full py-20 md:py-32 bg-[#15171E] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center gap-2">
            <span className="text-digital-purple">Por que</span> nossos projetos não são como os outros?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 max-w-5xl mx-auto">
          {differentials.map((text, index) => (
            <DifferentialItem key={index} text={text} />
          ))}
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300">
            <TrendingUp size={32} className="text-digital-purple mb-4" />
            <h3 className="text-xl font-bold mb-2">Escalabilidade</h3>
            <p className="text-gray-300">Cresça sem limites e com mínima fricção operacional</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300">
            <Zap size={32} className="text-digital-purple mb-4" />
            <h3 className="text-xl font-bold mb-2">Performance</h3>
            <p className="text-gray-300">Velocidade e fluidez em todas as interações</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300">
            <ShieldCheck size={32} className="text-digital-purple mb-4" />
            <h3 className="text-xl font-bold mb-2">Segurança</h3>
            <p className="text-gray-300">Proteção integrada e conformidade normativa</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300">
            <Users size={32} className="text-digital-purple mb-4" />
            <h3 className="text-xl font-bold mb-2">Autonomia</h3>
            <p className="text-gray-300">Sistemas que pensam e se adaptam sozinhos</p>
          </div>
        </div>
      </div>
      
      {/* Visual elements */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-digital-purple/10 rounded-full blur-[120px]"></div>
    </section>
  );
};

export default DifferentialsSection;
