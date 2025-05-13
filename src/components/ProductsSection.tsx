
import React from 'react';
import { Layers, Users, MapPin, CheckCircle, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  title: string;
  features: string[];
  icon: React.ReactNode;
  color: string;
}

const ProductCard = ({ title, features, icon, color }: ProductCardProps) => {
  return (
    <Card className="bg-white/5 border-white/10 hover:border-digital-purple/50 transition-all duration-500 hover:translate-y-[-10px] overflow-hidden group relative h-full">
      <div className={`absolute top-0 left-0 w-1.5 h-full ${color}`}></div>
      <div className="absolute top-0 right-0 p-4">
        <div className="w-12 h-12 rounded-full bg-digital-purple/20 flex items-center justify-center text-digital-purple group-hover:bg-digital-purple group-hover:text-white transition-all duration-300">
          {icon}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-4 mt-8 text-white group-hover:text-digital-purple transition-colors duration-300">{title}</h3>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-300">
              <span className="w-1.5 h-1.5 bg-digital-purple rounded-full"></span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 pt-4 border-t border-white/10">
          <a href="#" className="card-link text-digital-purple text-sm font-medium">Explorar →</a>
        </div>
      </CardContent>
    </Card>
  );
};

const ProductsSection = () => {
  const products = [
    {
      title: "SourceXpress",
      features: [
        "Sourcing inteligente",
        "Desafia grandes players",
        "Automação total"
      ],
      icon: <Layers size={24} />,
      color: "bg-digital-bright-blue"
    },
    {
      title: "LeadHunter AI",
      features: [
        "CRM vivo e autônomo",
        "SDR e Closer automáticos",
        "Escala sem equipe"
      ],
      icon: <Users size={24} />,
      color: "bg-digital-purple"
    },
    {
      title: "LocaView AI",
      features: [
        "Gestão audiovisual",
        "IA para produção",
        "Relatórios automáticos"
      ],
      icon: <MapPin size={24} />,
      color: "bg-digital-vivid-purple"
    },
    {
      title: "TaskGenius AI",
      features: [
        "Planos de ação instantâneos",
        "Organização inteligente",
        "Automação de tarefas"
      ],
      icon: <CheckCircle size={24} />,
      color: "bg-digital-secondary-purple"
    },
    {
      title: "Jovem Pro",
      features: [
        "Educação gamificada",
        "Preparação para mercado",
        "IA personalizada"
      ],
      icon: <Rocket size={24} />,
      color: "bg-digital-light-purple"
    },
  ];

  return (
    <section className="w-full py-20 relative overflow-hidden bg-gradient-to-b from-[#15171E] to-digital-dark-purple">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="text-digital-purple text-lg font-bold uppercase tracking-wider">Produtos</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Soluções que <span className="shimmer-text">reinventam</span> mercados
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              features={product.features}
              icon={product.icon}
              color={product.color}
            />
          ))}
        </div>
      </div>
      
      {/* Visual elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-digital-purple to-transparent"></div>
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-digital-purple/5 rounded-full blur-[150px] -translate-y-1/2"></div>
    </section>
  );
};

export default ProductsSection;
