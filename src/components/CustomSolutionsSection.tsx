
import React from 'react';
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CustomSolutionsSection = () => {
  return (
    <section className="w-full py-20 md:py-32 bg-digital-dark-purple relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80')] opacity-5 bg-cover bg-center"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Tem uma ideia? <span className="gradient-text">Nós transformamos em produto digital de alto impacto.</span>
          </h2>
          
          <p className="text-lg text-gray-200 mb-6 text-center">
            Desde startups até empresas consolidadas, criamos soluções sob medida com a mesma 
            excelência dos nossos próprios lançamentos.
          </p>
          
          <p className="text-lg text-gray-200 mb-10 text-center">
            Sistemas vivos, integrados, automatizados e preparados para gerar resultados reais.
          </p>
          
          <div className="flex flex-col items-center gap-8">
            <div className="bg-digital-purple/20 text-white px-6 py-3 rounded-full text-center">
              <span className="font-bold">Projetos sob demanda, com visão de negócio e execução premium.</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <div className="bg-white/5 p-6 rounded-lg text-center">
                <h3 className="font-bold mb-2">Modo degustação</h3>
                <p className="text-gray-300 text-sm">Você testa por 7 dias e decide. Simples assim!</p>
              </div>
              
              <div className="bg-white/5 p-6 rounded-lg text-center">
                <h3 className="font-bold mb-2">Feito pra você</h3>
                <p className="text-gray-300 text-sm">O homem sem saber o que era impossível foi lá e fez!</p>
              </div>
              
              <div className="bg-white/5 p-6 rounded-lg text-center">
                <h3 className="font-bold mb-2">Implementação rápida</h3>
                <p className="text-gray-300 text-sm">O que outros levam 6 meses para entregar você tem em 6 minutos!</p>
              </div>
            </div>
            
            <Button className="bg-digital-purple hover:bg-digital-purple/90 text-white px-10 py-6 rounded-md flex items-center gap-2 mt-4 hover-scale">
              Solicitar uma solução
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSolutionsSection;
