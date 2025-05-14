
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const ResponsiveDemoSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="w-full py-20 bg-gradient-to-b from-[#15171E] to-[#1A1F2C] overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Interface <span className="shimmer-text">{isMobile ? 'Mobile' : 'Desktop'}</span> Otimizada
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Nossa plataforma se adapta perfeitamente a qualquer dispositivo,
            garantindo experiência consistente em smartphones, tablets e desktops.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Card que muda de layout em mobile */}
          <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden 
              ${isMobile ? 'col-span-1' : 'col-span-2'}`}>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-digital-purple">Layout Adaptativo</h3>
              <p className="text-sm text-gray-300">
                {isMobile 
                  ? 'Visualização otimizada para telas compactas' 
                  : 'Aproveite todo o espaço disponível em telas maiores com layouts expandidos e conteúdo adicional'
                }
              </p>
            </div>
          </div>
          
          {/* Cards que mudam de posição */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-2 text-digital-bright-blue">
              Navegação {isMobile ? 'Simplificada' : 'Completa'}
            </h3>
            <p className="text-sm text-gray-300">
              Interface adapta controles e menus para otimizar a experiência em cada dispositivo
            </p>
          </div>
          
          {/* Elemento que só aparece em desktop */}
          {!isMobile && (
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hidden md:block">
              <h3 className="text-xl font-bold mb-2 text-digital-vivid-purple">Recursos Avançados</h3>
              <p className="text-sm text-gray-300">
                Recursos adicionais disponíveis em telas maiores para aumento de produtividade
              </p>
            </div>
          )}
          
          {/* Elemento exclusivo mobile */}
          {isMobile && (
            <div className="bg-digital-purple/20 rounded-xl p-6 border border-digital-purple/30">
              <h3 className="text-xl font-bold mb-2 text-white">Touch Optimized</h3>
              <p className="text-sm text-gray-300">
                Interface otimizada para interação por toque com botões maiores
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResponsiveDemoSection;
