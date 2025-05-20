
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect } from "react";
import { ArrowRight } from 'lucide-react';

const StoryStep = ({ 
  active, 
  index, 
  title, 
  description, 
  visualElement 
}: { 
  active: boolean; 
  index: number; 
  title: string; 
  description: string;
  visualElement: React.ReactNode;
}) => {
  return (
    <div className={`story-step transition-all duration-500 ease-out ${active ? 'opacity-100 scale-100' : 'opacity-20 scale-95'}`}>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="w-full md:w-1/2 story-visual">
          {visualElement}
        </div>
        <div className="w-full md:w-1/2 story-content text-left">
          <div className="step-number mb-4">
            <span className="inline-block bg-digital-purple/20 text-digital-bright-blue font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl border border-digital-purple/50">
              {index + 1}
            </span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">{title}</h3>
          <p className="text-lg text-white/70">{description}</p>
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api) return;

    api.on('select', () => {
      setCurrentStep(api.selectedScrollSnap());
    });

    // Auto-rotate through the carousel
    const autoRotate = setInterval(() => {
      if (currentStep < 3) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => clearInterval(autoRotate);
  }, [api, currentStep]);

  const storySteps = [
    {
      title: "Uma ideia nasce...",
      description: "Todo produto revolucionário começa como uma ideia. Nós capturamos a essência do seu conceito e começamos a dar forma digital ao que antes era apenas imaginação.",
      visualElement: (
        <div className="idea-visualization">
          <div className="idea-sketch">
            <svg viewBox="0 0 200 200" className="w-full max-w-md mx-auto">
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1EAEDB" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#9b87f5" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              <path 
                d="M30,100 Q50,50 100,80 T170,90" 
                fill="none"
                stroke="url(#gradient1)"
                strokeWidth="2"
                className="animate-sketch"
              />
              <circle cx="30" cy="100" r="5" fill="#1EAEDB" className="animate-fadeIn delay-1" />
              <circle cx="100" cy="80" r="5" fill="#9b87f5" className="animate-fadeIn delay-2" />
              <circle cx="170" cy="90" r="5" fill="#8B5CF6" className="animate-fadeIn delay-3" />
            </svg>
          </div>
        </div>
      )
    },
    {
      title: "Ganha inteligência...",
      description: "Transformamos ideias estáticas em sistemas inteligentes. Integramos IA, automação e regras de negócio para criar uma solução que pensa e aprende sozinha.",
      visualElement: (
        <div className="intelligence-visualization">
          <div className="automated-flow-diagram">
            <div className="w-full max-w-md mx-auto relative">
              <div className="flowchart-container h-64 flex flex-col justify-around">
                <div className="flowchart-node bg-digital-dark-purple border border-digital-purple/40 p-4 rounded-lg shadow-glow relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-digital-bright-blue/20 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="#1EAEDB" strokeWidth="2" />
                        <path d="M12 2V4" stroke="#1EAEDB" strokeWidth="2" strokeLinecap="round" />
                        <path d="M12 20V22" stroke="#1EAEDB" strokeWidth="2" strokeLinecap="round" />
                        <path d="M4 12H2" stroke="#1EAEDB" strokeWidth="2" strokeLinecap="round" />
                        <path d="M22 12H20" stroke="#1EAEDB" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <span className="text-white font-medium">Input Processado</span>
                  </div>
                </div>
                <div className="flow-line h-12 w-0.5 bg-gradient-to-b from-digital-bright-blue to-digital-purple mx-auto animate-pulse"></div>
                <div className="flowchart-node bg-digital-dark-purple border border-digital-purple/40 p-4 rounded-lg shadow-glow relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-digital-purple/20 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="#9b87f5" strokeWidth="2" />
                        <path d="M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21" stroke="#9b87f5" strokeWidth="2" />
                      </svg>
                    </div>
                    <span className="text-white font-medium">Automação Inteligente</span>
                  </div>
                </div>
                <div className="flow-line h-12 w-0.5 bg-gradient-to-b from-digital-purple to-digital-vivid-purple mx-auto animate-pulse"></div>
                <div className="flowchart-node bg-digital-dark-purple border border-digital-purple/40 p-4 rounded-lg shadow-glow relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-digital-vivid-purple/20 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#8B5CF6" strokeWidth="2" />
                        <path d="M9 12L11 14L15 10" stroke="#8B5CF6" strokeWidth="2" />
                      </svg>
                    </div>
                    <span className="text-white font-medium">Resultado Otimizado</span>
                  </div>
                </div>
              </div>
              <div className="data-particles"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Escala sozinha...",
      description: "Sua solução começa a crescer autonomamente. Nossas plataformas são projetadas para escalar sem intervenção humana, gerando resultados exponenciais.",
      visualElement: (
        <div className="scaling-visualization">
          <div className="saas-dashboard w-full max-w-md mx-auto overflow-hidden rounded-lg border border-digital-purple/40 shadow-glow">
            <div className="dashboard-header bg-digital-dark-purple/80 backdrop-blur-sm border-b border-digital-purple/20 p-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-digital-bright-blue"></div>
                  <div className="w-3 h-3 rounded-full bg-digital-purple"></div>
                  <div className="w-3 h-3 rounded-full bg-digital-vivid-purple"></div>
                </div>
                <div className="text-sm text-white/70">Dashboard Autônomo</div>
              </div>
            </div>
            <div className="dashboard-content bg-black/40 p-4">
              <div className="stats-row flex justify-between mb-4">
                <div className="stat-card bg-digital-dark-purple/50 p-3 rounded border border-digital-bright-blue/20 w-[48%]">
                  <p className="text-xs text-white/60">Vendas Automáticas</p>
                  <p className="text-xl font-bold text-white">R$ 247.350</p>
                  <div className="flex items-center gap-1 text-xs text-digital-bright-blue mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>+34.5%</span>
                  </div>
                </div>
                <div className="stat-card bg-digital-dark-purple/50 p-3 rounded border border-digital-purple/20 w-[48%]">
                  <p className="text-xs text-white/60">Leads Gerados</p>
                  <p className="text-xl font-bold text-white">1.458</p>
                  <div className="flex items-center gap-1 text-xs text-digital-purple mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>+28.2%</span>
                  </div>
                </div>
              </div>
              <div className="chart-area h-24 bg-digital-dark-purple/30 rounded border border-white/5 mb-4">
                <div className="h-full w-full flex items-end justify-around px-2">
                  {[40, 65, 35, 50, 75, 45, 90].map((height, i) => (
                    <div key={i} className="chart-bar h-full flex items-end">
                      <div 
                        className="w-4 bg-gradient-to-t from-digital-bright-blue to-digital-vivid-purple rounded-t opacity-80"
                        style={{ height: `${height}%`, animationDelay: `${i * 0.1}s` }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="automation-row flex items-center justify-between">
                <div className="text-xs text-white/60">Processos automatizados</div>
                <div className="automation-pills flex gap-1">
                  <span className="text-xs bg-digital-bright-blue/20 text-digital-bright-blue px-2 py-0.5 rounded-full">Vendas</span>
                  <span className="text-xs bg-digital-purple/20 text-digital-purple px-2 py-0.5 rounded-full">Suporte</span>
                  <span className="text-xs bg-digital-vivid-purple/20 text-digital-vivid-purple px-2 py-0.5 rounded-full">Marketing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Você não está criando só um software. Está criando um legado digital.",
      description: "A sua ideia vira um produto único — pronto para ser lançado, vendido ou licenciado. Com alma, estratégia e automação, ele nasce para gerar impacto real e receita recorrente. Porque aqui, o digital tem propósito. E você é o dono dele.",
      visualElement: (
        <div className="final-product-visualization">
          <div className="product-showcase w-full max-w-md mx-auto">
            <div className="device-mockup relative">
              <div className="laptop-frame border-8 border-digital-dark-purple/80 rounded-lg overflow-hidden shadow-glow">
                <div className="screen bg-black/80 aspect-video flex items-center justify-center p-4">
                  <div className="product-logo flex flex-col items-center justify-center">
                    <div className="w-24 h-24 mb-2 rounded-full bg-gradient-to-br from-digital-bright-blue via-digital-purple to-digital-vivid-purple flex items-center justify-center">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="white" strokeWidth="2" />
                        <path d="M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21" stroke="white" strokeWidth="2" />
                        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="white" strokeWidth="2" />
                        <path d="M17 21L21 17M21 17L17 13M21 17H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="product-name text-white text-2xl font-bold">YourProduct</div>
                    <div className="product-tagline text-white/70 text-sm">Autonomia digital para seu negócio</div>
                    <div className="mt-4 flex gap-2">
                      <div className="px-3 py-1 rounded bg-digital-bright-blue text-white text-xs">Lançar</div>
                      <div className="px-3 py-1 rounded bg-digital-purple text-white text-xs">Vender</div>
                      <div className="px-3 py-1 rounded bg-digital-vivid-purple text-white text-xs">Licenciar</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-lg border border-digital-purple/40 bg-digital-dark-purple/80 backdrop-blur-sm overflow-hidden shadow-glow flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xl font-bold text-digital-bright-blue">R$</div>
                  <div className="text-3xl font-bold text-white">3.2M</div>
                  <div className="text-xs text-white/70">Valor</div>
                </div>
              </div>
              <div className="absolute -left-6 -bottom-6 w-24 h-24 rounded-lg border border-digital-purple/40 bg-digital-dark-purple/80 backdrop-blur-sm overflow-hidden shadow-glow flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-digital-vivid-purple">95%</div>
                  <div className="text-xs text-white/70">Automação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="w-full py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-digital-dark-purple z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full transform bg-grid opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-digital-bright-blue text-lg font-bold uppercase tracking-wider">O que fazemos</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-white">
            Da ideia ao <span className="shimmer-text">impacto digital</span>
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Carousel 
            setApi={setApi} 
            opts={{ loop: true, align: "center" }}
            className="w-full"
          >
            <CarouselContent>
              {storySteps.map((step, index) => (
                <CarouselItem key={index} className="w-full">
                  <StoryStep 
                    active={currentStep === index} 
                    index={index} 
                    title={step.title} 
                    description={step.description}
                    visualElement={step.visualElement}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              {storySteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentStep === index ? 'bg-digital-bright-blue w-8' : 'bg-white/30'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <Button variant="cta" className="group">
              <span className="relative flex items-center gap-2">
                Crie sua própria história com a Digital Soft Solution
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
