
import React from 'react';
import { Check, TrendingUp, Zap, Award, ShieldCheck, Users } from "lucide-react";

const DifferentialsSection = () => {
  const features = [
    {
      icon: <TrendingUp size={30} />,
      title: "Arquitetura escalável",
      description: "Cresce sem limites técnicos"
    },
    {
      icon: <Zap size={30} />,
      title: "Fluxos automatizados",
      description: "Funciona sem intervenção humana"
    },
    {
      icon: <Award size={30} />,
      title: "Experiência fluida",
      description: "UX/UI de classe mundial"
    },
    {
      icon: <ShieldCheck size={30} />,
      title: "IA nativa",
      description: "Inteligência em cada interação"
    },
    {
      icon: <Users size={30} />,
      title: "Mínimo esforço humano",
      description: "Máxima eficiência operacional"
    },
    {
      icon: <Check size={30} />,
      title: "Visão estratégica",
      description: "Pensando além do óbvio"
    }
  ];

  return (
    <section className="w-full py-20 bg-[#15171E] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80')] opacity-5 bg-cover bg-fixed"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-digital-purple text-lg font-bold uppercase tracking-wider">DIFERENCIAIS</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-2">Por que somos <span className="shimmer-text">diferentes?</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-digital-purple/50 transition-all duration-300 hover:translate-y-[-5px] group">
              <div className="w-14 h-14 rounded-xl bg-digital-purple/20 flex items-center justify-center text-digital-purple mb-4 group-hover:bg-digital-purple group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-digital-purple transition-colors duration-300">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <div className="bg-digital-purple/20 text-white px-8 py-4 rounded-full text-center max-w-2xl">
            <span className="font-bold text-xl">Tecnologia Premium + Visão Estratégica = Crescimento Exponencial</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
