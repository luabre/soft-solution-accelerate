
import React, { useEffect, useRef, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
}

const TestimonialsSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodeRefs = useRef<Map<string, { x: number; y: number; radius: number }>>(new Map());
  const [activeTestimonial, setActiveTestimonial] = useState<string>('t1');
  const [api, setApi] = useState<any>();
  
  const testimonials: Testimonial[] = [
    {
      id: 't1',
      author: 'Ricardo Silva',
      role: 'CTO',
      company: 'TechBridge Ventures',
      content: 'A plataforma LeadHunter AI transformou completamente nosso processo de vendas. Nossa equipe consegue focar em estratégia enquanto o sistema converte leads em clientes de forma autônoma.',
      avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80'
    },
    {
      id: 't2',
      author: 'Camila Rocha',
      role: 'Diretora de Marketing',
      company: 'Nexus Group',
      content: 'O SourceXpress reduziu nosso tempo de sourcing em 70%. A inteligência artificial identifica oportunidades que jamais encontraríamos manualmente, com precisão incrível.',
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80'
    },
    {
      id: 't3',
      author: 'Fernando Mendes',
      role: 'Produtor Executivo',
      company: 'Vision Studios',
      content: 'LocaView AI revolucionou nossa produção audiovisual. O sistema gerencia locações, equipes e equipamentos com tamanha autonomia que conseguimos aumentar em 40% nossa capacidade produtiva.',
      avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80'
    }
  ];
  
  useEffect(() => {
    if (!api) return;
    
    api.on('select', () => {
      setActiveTestimonial(testimonials[api.selectedScrollSnap()].id);
    });
    
    // Auto-rotate through testimonials
    const autoRotate = setInterval(() => {
      api.scrollNext();
    }, 6000);
    
    return () => clearInterval(autoRotate);
  }, [api, testimonials]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    
    // Clear previous nodes
    nodeRefs.current.clear();
    
    // Create neural nodes
    const nodeCount = 15;
    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * canvas.offsetWidth;
      const y = Math.random() * canvas.offsetHeight;
      const radius = Math.random() * 3 + 2;
      const nodeId = `node-${i}`;
      
      nodeRefs.current.set(nodeId, { x, y, radius });
    }
    
    // Highlight nodes for each testimonial
    testimonials.forEach((testimonial, idx) => {
      const highlightCount = 3;
      const startIdx = idx * highlightCount;
      
      for (let i = 0; i < highlightCount; i++) {
        const nodeId = `node-${startIdx + i}`;
        if (nodeRefs.current.has(nodeId)) {
          nodeRefs.current.get(nodeId)!.radius = 4; 
        }
      }
    });
    
    // Animation function
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      
      // Draw connections between nodes
      ctx.beginPath();
      nodeRefs.current.forEach((nodeA, idA) => {
        nodeRefs.current.forEach((nodeB, idB) => {
          if (idA !== idB) {
            const distance = Math.sqrt(
              Math.pow(nodeB.x - nodeA.x, 2) + Math.pow(nodeB.y - nodeA.y, 2)
            );
            
            if (distance < 150) {
              ctx.beginPath();
              ctx.moveTo(nodeA.x, nodeA.y);
              ctx.lineTo(nodeB.x, nodeB.y);
              
              const alpha = 0.2 * (1 - distance / 150);
              ctx.strokeStyle = `rgba(155, 135, 245, ${alpha})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });
      
      // Draw nodes
      nodeRefs.current.forEach((node, id) => {
        ctx.beginPath();
        
        // Check if node is part of active testimonial
        const isActive = activeTestimonial === 't1' && id.startsWith('node-0') ||
                         activeTestimonial === 't2' && id.startsWith('node-3') ||
                         activeTestimonial === 't3' && id.startsWith('node-6');
        
        if (isActive) {
          ctx.fillStyle = '#1EAEDB';
          ctx.shadowColor = '#1EAEDB';
          ctx.shadowBlur = 10;
        } else {
          ctx.fillStyle = 'rgba(155, 135, 245, 0.5)';
          ctx.shadowBlur = 0;
        }
        
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Reset shadow
        ctx.shadowBlur = 0;
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [activeTestimonial, testimonials]);
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <section className="w-full py-24 relative overflow-hidden">
      {/* Neural network background */}
      <div className="absolute inset-0 bg-gradient-to-b from-digital-dark-purple to-black z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-digital-bright-blue text-lg font-bold uppercase tracking-wider">Prova Social</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white">
            Clientes que <span className="shimmer-text">transformaram</span> seus negócios
          </h2>
        </div>
        
        {/* Neural network visualization */}
        <div className="neural-network-visualization relative h-96 mb-12">
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full"></canvas>
          
          {/* Testimonial carousel */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-3xl w-full">
              <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                  {testimonials.map((testimonial) => (
                    <CarouselItem key={testimonial.id} className="w-full">
                      <div 
                        className={`testimonial-card bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-8 transition-all duration-500 ${
                          activeTestimonial === testimonial.id ? 'border-digital-bright-blue/30 shadow-glow' : ''
                        }`}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-digital-bright-blue">
                            <img 
                              src={testimonial.avatarUrl} 
                              alt={testimonial.author} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">{testimonial.author}</h3>
                            <p className="text-white/70">{testimonial.role}, {testimonial.company}</p>
                          </div>
                        </div>
                        
                        <div className="relative">
                          <Quote className="absolute top-0 left-0 -mt-4 -ml-2 text-digital-bright-blue opacity-30" size={40} />
                          <p className="pl-8 text-xl text-white">{testimonial.content}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              
              {/* Indicator dots */}
              <div className="flex justify-center mt-8 gap-3">
                {testimonials.map((testimonial) => (
                  <button
                    key={testimonial.id}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeTestimonial === testimonial.id 
                        ? 'bg-digital-bright-blue w-8' 
                        : 'bg-white/30'
                    }`}
                    onClick={() => api?.scrollTo(
                      testimonials.findIndex((t) => t.id === testimonial.id)
                    )}
                    aria-label={`View testimonial from ${testimonial.author}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
