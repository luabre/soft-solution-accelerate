
import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Lightbulb, Rocket, Database } from "lucide-react";

const SimulatorSection = () => {
  const [idea, setIdea] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [stage, setStage] = useState(0);
  
  useEffect(() => {
    if (isGenerating) {
      const timer = setTimeout(() => {
        setStage(prev => {
          if (prev < 3) {
            return prev + 1;
          }
          setIsGenerating(false);
          return prev;
        });
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [isGenerating, stage]);
  
  const generateConcept = () => {
    if (!idea || idea.length < 3) return;
    
    setIsGenerating(true);
    setStage(0);
    
    // Simulate AI generation based on input
    const ideaType = idea.toLowerCase();
    let generatedScreens = [];
    let micropitch = "";
    
    if (ideaType.includes("vendas") || ideaType.includes("lead") || ideaType.includes("cliente")) {
      generatedScreens = ["CRM Autônomo", "Funil Automatizado", "Dashboard de Vendas"];
      micropitch = "Um sistema de vendas autônomo que gera leads, nutre relacionamentos e fecha negócios sem intervenção humana - aumentando sua receita enquanto você dorme.";
    } else if (ideaType.includes("produção") || ideaType.includes("audiovisual") || ideaType.includes("vídeo")) {
      generatedScreens = ["Gestão de Assets", "Automação de Workflow", "Análise de Performance"];
      micropitch = "Plataforma de gestão audiovisual que utiliza IA para otimizar processos criativos, reduzindo tempo de produção em até 70% e maximizando o ROI de cada projeto.";
    } else if (ideaType.includes("gestão") || ideaType.includes("processo") || ideaType.includes("projeto")) {
      generatedScreens = ["Automação de Tarefas", "Gestão Inteligente", "Análise Preditiva"];
      micropitch = "Sistema integrado de gestão com IA que automatiza processos operacionais, prioriza tarefas e fornece insights preditivos - transformando dados em decisões estratégicas.";
    } else {
      generatedScreens = ["Modelo de IA", "Interface Intuitiva", "Escalabilidade Automática"];
      micropitch = `Solução digital autônoma para ${idea}, que utiliza inteligência artificial para automatizar processos, gerar insights e escalar operações sem intervenção humana.`;
    }
    
    // Store generated result
    setResult({
      screens: generatedScreens,
      micropitch: micropitch
    });
  };
  
  const resetSimulator = () => {
    setIdea('');
    setResult(null);
    setIsGenerating(false);
    setStage(0);
  };
  
  return (
    <section className="w-full py-24 relative overflow-hidden">
      {/* Futuristic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-digital-dark-purple to-black z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full transform bg-gradient-radial opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block relative">
            <span className="text-digital-bright-blue text-lg font-bold uppercase tracking-wider relative z-10">Simulador</span>
            <div className="absolute -inset-1 bg-digital-bright-blue/10 blur-sm rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">
            Transforme sua <span className="shimmer-text">ideia</span> em realidade
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-white/70 text-lg">
            Digite sua ideia de produto digital. Vamos mostrar como a transformaríamos em uma solução autônoma.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-10 shadow-glow">
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                placeholder="Quero criar um app para..."
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                className="bg-white/5 border-white/10 text-white placeholder-white/40 focus:border-digital-bright-blue"
                disabled={isGenerating || result}
              />
              
              {!result ? (
                <Button 
                  onClick={generateConcept} 
                  disabled={isGenerating || idea.length < 3}
                  className="bg-digital-bright-blue hover:bg-digital-bright-blue/80 text-white"
                >
                  {isGenerating ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full border-2 border-t-transparent border-white animate-spin"></div>
                      Gerando conceito...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={18} />
                      Transformar ideia
                    </span>
                  )}
                </Button>
              ) : (
                <Button
                  onClick={resetSimulator}
                  className="bg-digital-purple hover:bg-digital-purple/80 text-white"
                >
                  Nova ideia
                </Button>
              )}
            </div>
            
            {(isGenerating || result) && (
              <div className="mt-10">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* AI thinking visualization */}
                  {isGenerating && (
                    <div className="ai-thinking-animation w-full">
                      <div className="h-8 flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-full bg-digital-bright-blue/20 flex items-center justify-center">
                          <Lightbulb size={20} className="text-digital-bright-blue" />
                        </div>
                        <span className="text-white font-medium">Analisando ideia...</span>
                      </div>
                      
                      <div className={`thinking-stage transition-opacity duration-300 ${stage >= 0 ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="h-2 bg-white/10 rounded overflow-hidden mb-6">
                          <div className="h-full bg-gradient-to-r from-digital-bright-blue to-digital-purple transition-all duration-1000" style={{width: `${(stage + 1) * 25}%`}}></div>
                        </div>
                        
                        <div className="flex flex-wrap gap-3 mb-6">
                          {['Analisando mercado', 'Verificando viabilidade', 'Definindo arquitetura', 'Planejando interfaces'].map((step, i) => (
                            <span 
                              key={i}
                              className={`text-sm px-3 py-1 rounded-full transition-all duration-300 ${
                                i <= stage 
                                  ? 'bg-digital-bright-blue/20 text-digital-bright-blue' 
                                  : 'bg-white/5 text-white/40'
                              }`}
                            >
                              {step}
                            </span>
                          ))}
                        </div>
                        
                        <div className="ai-code-simulation font-mono text-xs text-white/70 bg-black/50 p-3 rounded overflow-hidden h-20">
                          {stage >= 1 && (
                            <>
                              <div className="code-line">&gt; Analisando requisitos para: "{idea}"</div>
                              <div className="code-line">&gt; Identificando componentes principais...</div>
                            </>
                          )}
                          {stage >= 2 && (
                            <>
                              <div className="code-line">&gt; Definindo arquitetura de sistema...</div>
                              <div className="code-line">&gt; Planejando integrações de IA...</div>
                            </>
                          )}
                          {stage >= 3 && (
                            <>
                              <div className="code-line">&gt; Projetando interfaces...</div>
                              <div className="code-line animate-pulse">&gt; Conceito finalizado. Gerando visualização...</div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Result visualization */}
                  {result && (
                    <div className="concept-result w-full">
                      <h3 className="text-2xl font-bold text-white mb-8">Conceito para: <span className="text-digital-bright-blue">{idea}</span></h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        {result.screens.map((screen: string, i: number) => (
                          <div 
                            key={i} 
                            className="screen-mockup border border-white/10 rounded-lg p-5 bg-black/30 hover:bg-black/50 transition-all duration-300 hover:scale-105 hover:shadow-glow"
                          >
                            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-digital-bright-blue to-digital-purple flex items-center justify-center">
                              {i === 0 && <Lightbulb size={24} className="text-white" />}
                              {i === 1 && <Database size={24} className="text-white" />}
                              {i === 2 && <Rocket size={24} className="text-white" />}
                            </div>
                            <h4 className="text-center text-white font-bold">{screen}</h4>
                            
                            <div className="mt-4 flex flex-wrap gap-2 justify-center">
                              {[0, 1, 2].map(n => (
                                <div key={n} className="w-16 h-2 bg-white/10 rounded-full"></div>
                              ))}
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2 justify-center">
                              {[0, 1].map(n => (
                                <div key={n} className="w-24 h-2 bg-white/10 rounded-full"></div>
                              ))}
                            </div>
                            <div className="mt-3 flex justify-center">
                              <div className="w-20 h-6 bg-digital-purple/30 rounded-full"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="micropitch-container border border-digital-bright-blue/30 bg-black/50 rounded-lg p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="px-3 py-1 bg-digital-bright-blue/20 text-digital-bright-blue rounded-full text-sm font-medium">
                            Micropitch
                          </div>
                        </div>
                        <p className="text-white text-lg">{result.micropitch}</p>
                        
                        <div className="mt-6">
                          <Button className="bg-gradient-to-r from-digital-bright-blue to-digital-purple hover:opacity-90 text-white">
                            Explore esta ideia
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimulatorSection;
