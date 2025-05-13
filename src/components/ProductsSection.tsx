
import React from 'react';
import { Layers, Users, MapPin, CheckCircle, Rocket } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProductCard = ({ title, description, icon }: ProductCardProps) => {
  return (
    <Card className="bg-white/5 border-white/10 hover:border-digital-purple/50 transition-all duration-300 hover-scale overflow-hidden group">
      <CardHeader className="pb-2">
        <div className="w-12 h-12 rounded-full bg-digital-purple/20 flex items-center justify-center mb-4 text-digital-purple group-hover:bg-digital-purple group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        <CardTitle className="text-xl text-white group-hover:text-digital-purple transition-colors duration-300">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-300 text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <a href="#" className="card-link text-digital-purple text-sm">Saiba mais</a>
      </CardFooter>
    </Card>
  );
};

const ProductsSection = () => {
  const products = [
    {
      title: "SourceXpress",
      description: "Plataforma de sourcing inteligente que desafia os grandes players com agilidade, automação e inteligência aplicada.",
      icon: <Layers size={24} />
    },
    {
      title: "LeadHunter AI",
      description: "CRM vivo com SDR e Closer automáticos. Vende sozinho, responde sozinho, escala sozinho.",
      icon: <Users size={24} />
    },
    {
      title: "LocaView AI",
      description: "Gestão de locações audiovisuais com IA e relatórios automáticos. Ideal para produção e publicidade.",
      icon: <MapPin size={24} />
    },
    {
      title: "TaskGenius AI",
      description: "Seu plano de ação surge em segundos. Organização pessoal e corporativa com inteligência autônoma.",
      icon: <CheckCircle size={24} />
    },
    {
      title: "Jovem Pro",
      description: "App educativo que prepara jovens para o mercado com gamificação, IA e protagonismo real.",
      icon: <Rocket size={24} />
    },
  ];

  return (
    <section className="w-full py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-digital-dark-purple to-[#15171E]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="gradient-text">Soluções</span> que já estão moldando o futuro
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Nossos produtos proprietários combinam tecnologia avançada, design estratégico e inteligência artificial para criar experiências únicas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              icon={product.icon}
            />
          ))}
        </div>
      </div>
      
      {/* Visual elements */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-digital-purple/5 rounded-full blur-[150px] -translate-y-1/2"></div>
    </section>
  );
};

export default ProductsSection;
