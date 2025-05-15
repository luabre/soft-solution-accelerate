
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Rocket, BrainCircuit, ArrowRight } from "lucide-react";

const CallToActionSection = () => {
  const [hoveredOption, setHoveredOption] = useState<null | 'launch' | 'transform'>(null);
  
  return (
    <section className="w-full py-32 relative overflow-hidden">
      {/* Advanced futuristic background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-digital-dark-purple/70 to-black z-0">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-full h-[500px] bg-gradient-radial from-digital-bright-blue/10 to-transparent opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-radial from-digital-purple/10 to-transparent opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-digital-bright-blue text-lg font-bold uppercase tracking-wider">Próximos Passos</span>
          <h2 className="text-4xl md:text-6xl font-extrabold mt-4 text-white leading-tight">
            <span className="block">Você pode continuar contratando tecnologia.</span>
            <span className="block mt-3">Ou pode ser <span className="shimmer-text">dono da sua</span>.</span>
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div 
              className={`option-card relative overflow-hidden rounded-xl border transition-all duration-500 ${
                hoveredOption === 'launch'
                  ? 'border-digital-bright-blue shadow-glow bg-black/60 scale-105'
                  : 'border-white/10 bg-black/20'
              }`}
              onMouseEnter={() => setHoveredOption('launch')}
              onMouseLeave={() => setHoveredOption(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-digital-bright-blue/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              
              {/* Background decorative elements */}
              <div className="absolute w-24 h-24 rounded-full bg-digital-bright-blue/20 blur-xl right-8 bottom-8"></div>
              
              <div className="p-8 md:p-10 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-digital-bright-blue to-digital-purple rounded-full flex items-center justify-center mb-6">
                  <Rocket size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Quero lançar um produto próprio</h3>
                <p className="text-white/70 mb-8">
                  Transforme sua visão em um produto digital autônomo, pronto para ser lançado ao mercado e gerar receitas recorrentes.
                </p>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "Desenvolvimento completo do produto",
                    "IA e automação integradas",
                    "Estratégia de lançamento",
                    "Suporte técnico contínuo"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 min-w-4 h-4 rounded-full bg-digital-bright-blue/30 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-digital-bright-blue"></div>
                      </div>
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full bg-digital-bright-blue hover:bg-digital-bright-blue/80 text-white font-bold py-6 shadow-md">
                  <span className="flex items-center justify-center gap-2 text-lg">
                    Quero lançar meu produto
                    <ArrowRight size={20} />
                  </span>
                </Button>
              </div>
            </div>
            
            <div 
              className={`option-card relative overflow-hidden rounded-xl border transition-all duration-500 ${
                hoveredOption === 'transform'
                  ? 'border-digital-vivid-purple shadow-glow bg-black/60 scale-105'
                  : 'border-white/10 bg-black/20'
              }`}
              onMouseEnter={() => setHoveredOption('transform')}
              onMouseLeave={() => setHoveredOption(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-digital-vivid-purple/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              
              {/* Background decorative elements */}
              <div className="absolute w-24 h-24 rounded-full bg-digital-vivid-purple/20 blur-xl right-8 bottom-8"></div>
              
              <div className="p-8 md:p-10 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-digital-purple to-digital-vivid-purple rounded-full flex items-center justify-center mb-6">
                  <BrainCircuit size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Quero transformar meu negócio com IA</h3>
                <p className="text-white/70 mb-8">
                  Revolucione suas operações atuais com soluções de inteligência artificial que automatizam processos e amplificam resultados.
                </p>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "Diagnóstico personalizado",
                    "Implementação de IA estratégica",
                    "Integração com sistemas existentes",
                    "Capacitação da sua equipe"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 min-w-4 h-4 rounded-full bg-digital-vivid-purple/30 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-digital-vivid-purple"></div>
                      </div>
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full bg-digital-vivid-purple hover:bg-digital-vivid-purple/80 text-white font-bold py-6 shadow-md">
                  <span className="flex items-center justify-center gap-2 text-lg">
                    Quero transformar meu negócio
                    <ArrowRight size={20} />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
