import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Brain, BrainCircuit, Database, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const neuralNetRef = useRef<HTMLDivElement>(null);
  const [showProducts, setShowProducts] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Neural network simulation
  useEffect(() => {
    const container = containerRef.current;
    const neuralContainer = neuralNetRef.current;
    if (!container || !neuralContainer) return;

    // Create nodes
    const createNodes = () => {
      const nodes = [];
      const nodeCount = window.innerWidth < 768 ? 15 : 30;
      
      for (let i = 0; i < nodeCount; i++) {
        const node = document.createElement('div');
        node.className = 'neural-node';
        node.style.left = `${Math.random() * 100}%`;
        node.style.top = `${Math.random() * 100}%`;
        node.style.animationDelay = `${Math.random() * 5}s`;
        
        const size = Math.random() * 10 + 5;
        node.style.width = `${size}px`;
        node.style.height = `${size}px`;
        
        const hue = Math.random() * 60 + 240; // Purple to blue hues
        node.style.backgroundColor = `hsla(${hue}, 70%, 60%, ${Math.random() * 0.5 + 0.3})`;
        
        nodes.push(node);
        neuralContainer.appendChild(node);
      }
      
      return nodes;
    };
    
    // Create connections between nodes
    const createConnections = (nodes: HTMLDivElement[]) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      canvas.width = neuralContainer.offsetWidth;
      canvas.height = neuralContainer.offsetHeight;
      
      const drawConnections = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < nodes.length; i++) {
          const nodeA = nodes[i];
          const rectA = nodeA.getBoundingClientRect();
          const centerAX = rectA.left - neuralContainer.getBoundingClientRect().left + rectA.width / 2;
          const centerAY = rectA.top - neuralContainer.getBoundingClientRect().top + rectA.height / 2;
          
          // Connect to a few closest nodes
          for (let j = 0; j < 3; j++) {
            if (j !== i && Math.random() > 0.7) {
              const nodeB = nodes[Math.floor(Math.random() * nodes.length)];
              const rectB = nodeB.getBoundingClientRect();
              const centerBX = rectB.left - neuralContainer.getBoundingClientRect().left + rectB.width / 2;
              const centerBY = rectB.top - neuralContainer.getBoundingClientRect().top + rectB.height / 2;
              
              const distance = Math.sqrt(Math.pow(centerBX - centerAX, 2) + Math.pow(centerBY - centerAY, 2));
              
              if (distance < 150) { // Only connect if nodes are close enough
                ctx.beginPath();
                ctx.moveTo(centerAX, centerAY);
                ctx.lineTo(centerBX, centerBY);
                
                // Create gradient for each connection
                const gradient = ctx.createLinearGradient(centerAX, centerAY, centerBX, centerBY);
                gradient.addColorStop(0, 'rgba(155, 135, 245, 0.2)');
                gradient.addColorStop(1, 'rgba(30, 174, 219, 0.2)');
                
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 0.5;
                ctx.stroke();
                
                // Animate data flow
                const dataParticle = document.createElement('div');
                dataParticle.className = 'data-particle';
                neuralContainer.appendChild(dataParticle);
                
                const animateParticle = () => {
                  let progress = 0;
                  const speed = 0.01 + Math.random() * 0.02;
                  
                  const updateParticle = () => {
                    progress += speed;
                    
                    if (progress >= 1) {
                      neuralContainer.removeChild(dataParticle);
                      return;
                    }
                    
                    const x = centerAX + (centerBX - centerAX) * progress;
                    const y = centerAY + (centerBY - centerAY) * progress;
                    
                    dataParticle.style.left = `${x}px`;
                    dataParticle.style.top = `${y}px`;
                    
                    requestAnimationFrame(updateParticle);
                  };
                  
                  requestAnimationFrame(updateParticle);
                };
                
                if (Math.random() > 0.7) {
                  animateParticle();
                }
              }
            }
          }
        }
      };
      
      setInterval(drawConnections, 800);
      
      // Handle resize
      window.addEventListener('resize', () => {
        canvas.width = neuralContainer.offsetWidth;
        canvas.height = neuralContainer.offsetHeight;
        drawConnections();
      });
    };
    
    const nodes = createNodes();
    setTimeout(() => {
      createConnections(nodes as HTMLDivElement[]);
      setShowProducts(true);
    }, 1000);
    
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => {
      while (neuralContainer.firstChild) {
        neuralContainer.removeChild(neuralContainer.firstChild);
      }
    };
  }, []);

  // Products that will appear dynamically
  const products = [
    { name: "SourceXpress", icon: <Database className="text-digital-bright-blue" size={24} /> },
    { name: "LeadHunter AI", icon: <Brain className="text-digital-purple" size={24} /> },
    { name: "LocaView AI", icon: <BrainCircuit className="text-digital-vivid-purple" size={24} /> },
    { name: "TaskGenius AI", icon: <Rocket className="text-digital-secondary-purple" size={24} /> },
  ];

  return (
    <section 
      ref={containerRef}
      className="w-full min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-digital-dark-purple perspective-3d"
    >
      {/* Digital Brain visualization */}
      <div ref={neuralNetRef} className="absolute inset-0 neural-network-container">
        <canvas ref={canvasRef} className="absolute inset-0 z-10"></canvas>
      </div>
      
      {/* Futuristic overlay with scanlines */}
      <div className="absolute inset-0 scanlines opacity-10 z-10"></div>
      <div className="absolute inset-0 radial-gradient-bg z-0"></div>
      
      {/* Main content area */}
      <div className="container px-4 md:px-6 mx-auto relative z-20 mt-16">
        <div className="flex flex-col items-center justify-center gap-10 text-center">
          {/* Dynamic product name appearance */}
          <div className={`products-container transition-opacity duration-1000 ${showProducts ? 'opacity-100' : 'opacity-0'}`}>
            {products.map((product, index) => (
              <div 
                key={index}
                className="product-tag"
                style={{ 
                  animationDelay: `${index * 0.3 + 0.5}s`,
                  top: `${25 + Math.random() * 50}%`, 
                  left: `${10 + Math.random() * 80}%` 
                }}
              >
                <span className="flex items-center gap-2 bg-digital-dark-purple/50 backdrop-blur-sm px-3 py-1 rounded-full border border-digital-purple/30">
                  {product.icon}
                  <span className="product-name">{product.name}</span>
                </span>
              </div>
            ))}
          </div>
          
          {/* Main heading with dynamic typing effect */}
          <div className={`text-center max-w-4xl mx-auto transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="glitch-heading text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-4">
              <span className="block text-white">A MENTE ESTRATÉGICA</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-digital-bright-blue via-digital-purple to-digital-vivid-purple">
                POR TRÁS DE PRODUTOS
              </span>
              <span className="block text-white">QUE FUNCIONAM SOZINHOS</span>
            </h1>
            
            <div className="mt-6 h-16 text-xl md:text-2xl text-white/80">
              <TypeAnimation
                sequence={[
                  'Criamos produtos digitais com autonomia real.',
                  2000,
                  'Eles vendem, negociam, operam... sozinhos.',
                  2000,
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                className="text-typing"
              />
            </div>
          </div>
          
          {/* Call to action buttons */}
          <div className={`mt-10 flex flex-col gap-4 transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Button className="pulse-button group relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2 font-bold text-lg py-6 px-8">
                Desafie o comum – conheça nosso portfólio
                <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={24} />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-digital-bright-blue to-digital-vivid-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </Button>
            
            <Button variant="cta" className="group px-6 py-6 text-lg">
              <span className="relative flex items-center gap-2">
                Esqueça o comum. Veja o que é possível
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white/50 text-sm mb-2">Scroll para descobrir</span>
        <div className="w-8 h-12 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-2 h-2 rounded-full bg-digital-purple animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
