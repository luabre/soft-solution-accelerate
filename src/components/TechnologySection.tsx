
import React, { useEffect, useRef } from 'react';
import { Brain, Database, Code, Network, Link, Cloud } from 'lucide-react';

interface TechItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const TechItem = ({ icon, title, description, delay }: TechItemProps) => {
  return (
    <div 
      className="tech-item relative bg-digital-dark-purple/30 backdrop-blur-sm border border-white/5 rounded-lg p-5 hover:border-digital-bright-blue/30 transition-all duration-500 hover:shadow-glow hover:transform hover:scale-105"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-gradient-to-br from-digital-bright-blue/20 to-digital-purple/20">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white/70">{description}</p>
        </div>
      </div>
    </div>
  );
};

const TechnologySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gearRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !gearRef.current) return;
    
    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const scrollPercentage = 1 - (rect.top / viewportHeight);
        const rotationDegree = scrollPercentage * 180;
        
        if (gearRef.current) {
          gearRef.current.style.transform = `rotate(${rotationDegree}deg)`;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const technologies = [
    {
      icon: <Brain size={28} className="text-digital-bright-blue" />,
      title: "Autonomia",
      description: "Sistemas que tomam decisões inteligentes e operam independentemente, sem intervenção humana constante.",
      delay: 100
    },
    {
      icon: <Network size={28} className="text-digital-purple" />,
      title: "IA Integrada",
      description: "Algoritmos avançados que aprendem, adaptam-se e evoluem para otimizar cada aspecto do seu negócio.",
      delay: 200
    },
    {
      icon: <Database size={28} className="text-digital-vivid-purple" />,
      title: "UX Estratégica",
      description: "Interfaces intuitivas projetadas para maximizar conversões e melhorar a experiência do usuário.",
      delay: 300
    },
    {
      icon: <Code size={28} className="text-digital-secondary-purple" />,
      title: "Modelo de Negócio",
      description: "Arquitetura digital alinhada com objetivos de receita, crescimento e retenção de clientes.",
      delay: 400
    },
    {
      icon: <Cloud size={28} className="text-digital-bright-blue" />,
      title: "Lógica de Escala",
      description: "Estruturas que crescem organicamente conforme o volume de negócios aumenta, sem gargalos técnicos.",
      delay: 500
    },
    {
      icon: <Link size={28} className="text-digital-purple" />,
      title: "Ecosistema Completo",
      description: "Soluções que se integram perfeitamente ao seu ambiente atual, ampliando capacidades existentes.",
      delay: 600
    }
  ];
  
  return (
    <section ref={containerRef} className="w-full py-24 relative overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-digital-dark-purple/40 to-black">
        <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Visual elements - gear metaphor */}
          <div className="w-full lg:w-1/3 flex justify-center items-center">
            <div className="gear-mechanism relative">
              <div ref={gearRef} className="main-gear w-72 h-72 border-4 border-digital-purple/30 rounded-full transition-transform duration-1000 flex items-center justify-center">
                <div className="inner-gear w-48 h-48 border-4 border-digital-bright-blue/30 rounded-full flex items-center justify-center">
                  <div className="core-gear w-24 h-24 bg-gradient-to-br from-digital-bright-blue to-digital-purple rounded-full flex items-center justify-center pulsing-glow">
                    <Brain size={40} className="text-white" />
                  </div>
                </div>
                
                {/* Gear teeth */}
                {Array.from({ length: 12 }).map((_, i) => {
                  const angle = (i * 30) * Math.PI / 180;
                  const x = Math.cos(angle) * 36;
                  const y = Math.sin(angle) * 36;
                  
                  return (
                    <div 
                      key={i}
                      className="absolute w-8 h-3 bg-digital-purple/50"
                      style={{ 
                        transform: `translate(${x}px, ${y}px) rotate(${angle + Math.PI/2}rad)` 
                      }}
                    ></div>
                  );
                })}
                
                {/* Connection points */}
                {[45, 135, 225, 315].map((angle, i) => {
                  const radians = angle * Math.PI / 180;
                  const x = Math.cos(radians) * 124;
                  const y = Math.sin(radians) * 124;
                  
                  return (
                    <div
                      key={i}
                      className="absolute w-4 h-4 rounded-full bg-digital-bright-blue" 
                      style={{ 
                        transform: `translate(${x}px, ${y}px)`,
                        boxShadow: '0 0 15px rgba(30,174,219,0.8)'
                      }}
                    ></div>
                  );
                })}
                
                {/* Data particles */}
                {Array.from({ length: 5 }).map((_, i) => {
                  const delay = i * 1.5;
                  const path = `path${i % 3 + 1}`;
                  
                  return (
                    <div
                      key={i}
                      className={`absolute w-2 h-2 rounded-full bg-white data-particle ${path}`}
                      style={{ animationDelay: `${delay}s` }}
                    ></div>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="w-full lg:w-2/3">
            <div className="mb-12">
              <span className="text-digital-bright-blue text-lg font-bold uppercase tracking-wider">Tecnologia Invisível</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white">
                Resultados <span className="shimmer-text">Visíveis</span>
              </h2>
              
              <p className="mt-6 text-xl text-white/80 leading-relaxed">
                Nossos produtos não são só bonitos. São inteligentes, acionáveis e prontos para crescer.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technologies.map((tech, index) => (
                <TechItem
                  key={index}
                  icon={tech.icon}
                  title={tech.title}
                  description={tech.description}
                  delay={tech.delay}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
