
import React, { useState } from 'react';
import { Layers, Users, MapPin, CheckCircle, Rocket, BookOpenText, ShoppingCart, Book, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from "../hooks/use-mobile";

interface ProductCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  color: string;
  image: string;
}

const ProductCard = ({ title, description, features, icon, color, image }: ProductCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const isMobile = useIsMobile();
  
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  
  return (
    <div 
      className="product-card-container h-full perspective-3d"
      onMouseEnter={() => !isMobile && setIsFlipped(true)}
      onMouseLeave={() => !isMobile && setIsFlipped(false)}
    >
      <div className={`product-card h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        <div className="product-card-front h-full rounded-xl overflow-hidden border border-white/10 bg-digital-dark-purple relative">
          <AspectRatio ratio={4/3}>
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover brightness-50"
            />
          </AspectRatio>
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <div className={`absolute top-6 right-6 w-12 h-12 rounded-full ${color} bg-opacity-20 flex items-center justify-center`}>
              {icon}
            </div>
            <h3 className="text-3xl font-bold mb-2 text-white">{title}</h3>
            <p className="text-white/70">{description}</p>
            
            {isMobile && (
              <button 
                onClick={handleFlip}
                className="mt-4 bg-digital-bright-blue/20 border border-digital-bright-blue/40 text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 w-full"
              >
                <span>Ver detalhes</span>
              </button>
            )}
          </div>
          
          {!isMobile && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white/50 flex items-center gap-2">
                <span className="text-sm">Hover para detalhes</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M19 12L12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          )}
        </div>
        
        <div className="product-card-back h-full rounded-xl overflow-hidden absolute inset-0 border border-white/10 bg-gradient-to-br from-digital-dark-purple to-black rotate-y-180 backface-hidden">
          <div className="p-6 h-full flex flex-col">
            <div className={`w-12 h-12 rounded-full ${color} bg-opacity-20 flex items-center justify-center mb-4`}>
              {icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
            
            <ScrollArea className="flex-1 mb-6">
              <ul className="space-y-3 pr-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="mt-1 min-w-4 h-4 rounded-full bg-digital-purple/30 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-digital-bright-blue"></div>
                    </div>
                    <span className="text-white/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </ScrollArea>
            
            <Button 
              variant="outline" 
              className="mt-auto border-digital-bright-blue text-digital-bright-blue hover:bg-digital-bright-blue hover:text-white transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              Explorar a Solução
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductsSection = () => {
  const products = [
    {
      title: "DigitalmenteSeu",
      description: "Muito mais que um hub de conhecimento — um espaço onde o saber encontra identidade.",
      features: [
        "Plataforma digital para cursos",
        "Clube de membros exclusivo",
        "Experiências educativas personalizadas por nicho",
        "Área de membros com conteúdo premium",
        "Glossário de IA com termos e explicações detalhadas"
      ],
      icon: <Users size={24} className="text-digital-light-purple" />,
      color: "bg-digital-light-purple",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "SourceXpress",
      description: "Criado para equipes de compras que querem liderar com agilidade, visão e controle — sem depender de gigantes.",
      features: [
        "Sistema inteligente para sourcing",
        "Gestão de fornecedores",
        "Automação de cotações e compliance",
        "Escalabilidade sem limites"
      ],
      icon: <Layers size={24} className="text-digital-bright-blue" />,
      color: "bg-digital-bright-blue",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "RadarHunter Pro AI",
      description: "Desenhado para times comerciais que querem vender com inteligência — e não com cansaço.",
      features: [
        "Sistema inteligente para prospecção",
        "Qualificação e fechamento B2B",
        "IA SDR, Closer e CRM visual",
        "Blocos de foco e produtividade assistida por IA"
      ],
      icon: <Users size={24} className="text-digital-purple" />,
      color: "bg-digital-purple",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "LocaView AI",
      description: "Criado para quem enxerga locações como palco de histórias — não só como pontos no mapa.",
      features: [
        "Sistema inteligente para gestão de locações",
        "Otimização logística",
        "Relatórios e pontuação de locais via IA",
        "Tomada de decisão inteligente"
      ],
      icon: <MapPin size={24} className="text-digital-vivid-purple" />,
      color: "bg-digital-vivid-purple",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
    },
    {
      title: "Fala Rê",
      description: "Criado para que ninguém se sinta sozinho na hora de cuidar da saúde.",
      features: [
        "Sistema inteligente para lembretes de medicação",
        "Alertas para consultas e cuidado remoto",
        "IA de voz e suporte ao cuidador",
        "Integração com ferramentas de saúde"
      ],
      icon: <CheckCircle size={24} className="text-digital-secondary-purple" />,
      color: "bg-digital-secondary-purple",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Jovem Pro",
      description: "Feito para dar o primeiro passo com coragem, mesmo sem saber o destino.",
      features: [
        "Plataforma educacional para inserção no mercado de trabalho",
        "Curso guiado",
        "Simulador de entrevistas",
        "Mentor virtual"
      ],
      icon: <Rocket size={24} className="text-digital-light-purple" />,
      color: "bg-digital-light-purple",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
  ];

  return (
    <section className="w-full py-32 relative overflow-hidden">
      {/* Advanced background with animated gradients */}
      <div className="absolute inset-0 bg-black z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-digital-dark-purple/50 via-black to-black"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-digital-bright-blue opacity-5 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-digital-vivid-purple opacity-5 blur-[100px] rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <span className="text-digital-bright-blue text-lg font-bold uppercase tracking-wider relative z-10">Produtos</span>
            <div className="absolute -inset-1 bg-digital-bright-blue/10 blur-sm rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mt-4 text-white leading-tight">
            Soluções que <span className="shimmer-text">reinventam</span> mercados
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-white/70 text-lg">
            Produtos digitais com inteligência viva, automação profunda e autonomia operacional — prontos para escalar, vender e surpreender.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              features={product.features}
              icon={product.icon}
              color={product.color}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
