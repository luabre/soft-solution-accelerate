
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Users, BarChart3, Fingerprint, Volume2, ShoppingCart } from "lucide-react";

interface BuildingBlockProps {
  icon: React.ReactNode;
  title: string;
  isSelected: boolean;
  onClick: () => void;
}

const BuildingBlock = ({ icon, title, isSelected, onClick }: BuildingBlockProps) => {
  return (
    <div
      className={`building-block cursor-pointer transition-all duration-300 ${
        isSelected 
          ? 'bg-gradient-to-br from-digital-bright-blue to-digital-purple text-white shadow-glow scale-105' 
          : 'bg-white/5 text-white/70 hover:bg-white/10'
      }`}
      onClick={onClick}
    >
      <div className="p-4 flex items-center gap-3">
        <div className={`w-10 h-10 rounded-md flex items-center justify-center ${isSelected ? 'bg-white/20' : 'bg-digital-bright-blue/20'}`}>
          {icon}
        </div>
        <span className="font-medium">{title}</span>
      </div>
      <div className="connection-points">
        <div className="point top"></div>
        <div className="point right"></div>
        <div className="point bottom"></div>
        <div className="point left"></div>
      </div>
    </div>
  );
};

const CustomSolutionsSection = () => {
  const [selectedBlocks, setSelectedBlocks] = useState<string[]>([]);
  const [assembling, setAssembling] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  
  const blocks = [
    { id: "team", title: "Gestão de equipe", icon: <Users size={24} /> },
    { id: "sales", title: "Venda automática", icon: <ShoppingCart size={24} /> },
    { id: "dashboard", title: "Dashboard inteligente", icon: <BarChart3 size={24} /> },
    { id: "signature", title: "Assinatura digital", icon: <Fingerprint size={24} /> },
    { id: "voice", title: "Notificação por voz", icon: <Volume2 size={24} /> }
  ];
  
  const toggleBlock = (id: string) => {
    setSelectedBlocks(prev => 
      prev.includes(id)
        ? prev.filter(b => b !== id)
        : [...prev, id]
    );
  };
  
  const assembleBlocks = () => {
    if (selectedBlocks.length < 2) return;
    
    setAssembling(true);
    setTimeout(() => {
      setShowOverview(true);
    }, 2000);
  };
  
  const resetBlocks = () => {
    setAssembling(false);
    setShowOverview(false);
    setSelectedBlocks([]);
  };
  
  useEffect(() => {
    if (assembling) {
      const timeout = setTimeout(() => {
        setAssembling(false);
      }, 2000);
      
      return () => clearTimeout(timeout);
    }
  }, [assembling]);
  
  return (
    <section className="w-full py-28 relative overflow-hidden">
      {/* Background with dynamic grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-digital-dark-purple z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-digital-dark-purple to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-digital-bright-blue text-lg font-bold uppercase tracking-wider">Soluções Personalizadas</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white">
            Criamos <span className="shimmer-text">sob medida</span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-white/70 text-lg">
            Selecione os módulos que seu negócio precisa. Montamos o sistema perfeito combinando nossas tecnologias.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {!showOverview ? (
            <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-10 shadow-glow">
              <div className="mb-8">
                <h3 className="text-2xl text-white font-bold mb-4">Selecione os componentes:</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {blocks.map(block => (
                    <BuildingBlock
                      key={block.id}
                      icon={block.icon}
                      title={block.title}
                      isSelected={selectedBlocks.includes(block.id)}
                      onClick={() => toggleBlock(block.id)}
                    />
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <Button
                  disabled={selectedBlocks.length < 2 || assembling}
                  className={`px-8 py-6 text-lg ${
                    selectedBlocks.length < 2 
                      ? 'bg-white/10 text-white/50 cursor-not-allowed'
                      : 'bg-gradient-to-r from-digital-bright-blue to-digital-purple hover:opacity-90 text-white'
                  }`}
                  onClick={assembleBlocks}
                >
                  {assembling ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full border-2 border-t-transparent border-white animate-spin"></div>
                      Montando solução...
                    </span>
                  ) : (
                    `Montar solução (${selectedBlocks.length}/5 componentes)`
                  )}
                </Button>
              </div>
              
              {/* Assembly visualization (appears when assembling) */}
              {assembling && (
                <div className="assembly-animation mt-12">
                  <div className="flex flex-wrap justify-center gap-4">
                    {selectedBlocks.map((blockId, index) => {
                      const block = blocks.find(b => b.id === blockId);
                      return (
                        <div key={blockId} className="animate-float-assembly" style={{animationDelay: `${index * 0.2}s`}}>
                          <div className="w-16 h-16 bg-digital-bright-blue/20 rounded-lg flex items-center justify-center">
                            {block?.icon}
                          </div>
                          <div className="connector-line"></div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="system-overview bg-black/30 backdrop-blur-sm border border-digital-bright-blue/30 rounded-xl p-8 md:p-10 shadow-glow">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl text-white font-bold">Sua solução personalizada</h3>
                <Button variant="outline" onClick={resetBlocks}>
                  Recomeçar
                </Button>
              </div>
              
              <div className="integrated-solution-visualization mb-8">
                <div className="relative h-64 border border-white/10 rounded-lg overflow-hidden bg-black/50 p-6">
                  {/* Central hub */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-digital-bright-blue to-digital-purple flex items-center justify-center shadow-glow animate-pulse">
                      <div className="text-white font-bold">CORE</div>
                    </div>
                  </div>
                  
                  {/* Connected modules */}
                  {selectedBlocks.map((blockId, index) => {
                    const block = blocks.find(b => b.id === blockId);
                    const angle = (index * (360 / selectedBlocks.length)) * Math.PI / 180;
                    const distance = 100;
                    const x = Math.cos(angle) * distance;
                    const y = Math.sin(angle) * distance;
                    
                    return (
                      <div
                        key={blockId}
                        className="absolute w-16 h-16 bg-digital-dark-purple border border-digital-bright-blue/30 rounded-lg flex items-center justify-center"
                        style={{
                          transform: `translate(${x}px, ${y}px)`,
                          top: '50%',
                          left: '50%',
                          marginLeft: '-32px',
                          marginTop: '-32px'
                        }}
                      >
                        {block?.icon}
                        
                        {/* Connection line to center */}
                        <div 
                          className="connection-line absolute bg-digital-bright-blue/30"
                          style={{
                            width: '2px',
                            height: `${distance}px`,
                            transformOrigin: '50% 0',
                            transform: `rotate(${angle + Math.PI/2}rad)`
                          }}
                        ></div>
                      </div>
                    );
                  })}
                  
                  {/* Data flow animation */}
                  {selectedBlocks.map((_, index) => {
                    const angle = (index * (360 / selectedBlocks.length)) * Math.PI / 180;
                    
                    return (
                      <div
                        key={`particle-${index}`}
                        className="data-flow-particle absolute w-2 h-2 rounded-full bg-digital-bright-blue"
                        style={{
                          top: '50%',
                          left: '50%',
                          marginLeft: '-1px',
                          marginTop: '-1px',
                          animation: `dataFlow 3s infinite`
                        }}
                        data-angle={angle}
                      ></div>
                    );
                  })}
                </div>
              </div>
              
              <div className="system-features">
                <h4 className="text-xl text-white mb-4">Funcionalidades da sua solução:</h4>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedBlocks.map(blockId => {
                    const block = blocks.find(b => b.id === blockId);
                    return (
                      <li key={blockId} className="flex items-start gap-3">
                        <div className="p-2 bg-digital-bright-blue/20 rounded-md mt-1">
                          {block?.icon}
                        </div>
                        <div>
                          <h5 className="text-lg text-white font-medium">{block?.title}</h5>
                          <p className="text-white/70">
                            {blockId === 'team' && 'IA para gerenciamento automático de equipes e projetos.'}
                            {blockId === 'sales' && 'Automação completa do processo de vendas e follow-ups.'}
                            {blockId === 'dashboard' && 'Métricas em tempo real com insights acionáveis.'}
                            {blockId === 'signature' && 'Autenticação segura com validação jurídica.'}
                            {blockId === 'voice' && 'Alertas por voz baseados em gatilhos personalizados.'}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                
                <div className="mt-10 text-center">
                  <Button className="bg-gradient-to-r from-digital-bright-blue to-digital-purple hover:opacity-90 text-white px-8 py-6 text-lg">
                    Solicitar orçamento desta solução
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CustomSolutionsSection;
