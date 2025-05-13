
import React from 'react';
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="w-full py-20 md:py-32 relative overflow-hidden bg-digital-dark-purple/90">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center">
            Somos a mente por trás das plataformas que vão 
            <span className="gradient-text ml-2">desafiar gigantes</span>.
          </h2>
          
          <div className="bg-white/5 backdrop-blur-sm p-6 md:p-10 rounded-lg">
            <p className="text-lg md:text-xl text-gray-200 mb-6">
              <span className="text-digital-purple font-bold">SourceXpress</span>, 
              <span className="text-digital-purple font-bold"> LeadHunter AI</span>, 
              <span className="text-digital-purple font-bold"> LocaView</span>, 
              <span className="text-digital-purple font-bold"> Jovem Pro</span>, 
              <span className="text-digital-purple font-bold"> TaskGenius AI</span> — esses são apenas os primeiros nomes 
              de um portfólio que está reescrevendo o jogo em diversos mercados.
            </p>
            
            <p className="text-lg md:text-xl text-gray-200 mb-6">
              Na <span className="font-bold">Digital Soft Solution</span>, não entregamos apenas tecnologia. 
              <span className="font-bold"> Criamos produtos digitais com inteligência nativa, fluxos automatizados e autonomia real</span>, 
              preparados para escalar sem depender de operação manual.
            </p>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Além dos nossos lançamentos próprios, desenvolvemos 
              <span className="font-bold"> soluções sob medida para empresas visionárias</span> que querem sair na frente com 
              <span className="font-bold"> automação inteligente, interfaces estratégicas e modelos prontos para crescimento exponencial</span>.
            </p>
            
            <div className="text-center">
              <p className="text-xl md:text-2xl font-medium mb-6">
                Quer descobrir o que vem por aí?{" "}
                <span className="italic text-digital-purple">
                  Spoiler: vai além do que você está acostumado a ver.
                </span>
              </p>
              
              <Button className="bg-transparent border-2 border-digital-purple hover:bg-digital-purple/20 text-white px-8 py-6 rounded-md hover-scale">
                Conheça nossa visão
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background element */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-digital-purple/10 rounded-full blur-[120px]"></div>
    </section>
  );
};

export default AboutSection;
