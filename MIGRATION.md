# DigiUnic - Documento de Migração Completo

Este documento contém todo o código-fonte do projeto DigiUnic, organizado por arquivo, para facilitar a migração para outro ambiente Lovable.

---

## 🎨 Resumo Visual e Técnico do Projeto

### Identidade Visual
- **Tema:** Dark futurista premium com base roxo escuro (#1A1F2C)
- **Paleta de cores:** `digital-purple` (#9b87f5), `digital-bright-blue` (#1EAEDB), `digital-vivid-purple` (#8B5CF6)
- **Tipografia:** Space Grotesk (headings) + Inter (body)
- **Estética:** Cyberpunk/tech com elementos de IA e automação

### Fontes Utilizadas
```html
<!-- Google Fonts no index.html -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<!-- CSS import no index.css -->
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap');
```

### Efeitos Visuais Principais

| Efeito | Classe CSS | Descrição |
|--------|------------|-----------|
| **Glitch Text** | `.glitch-heading` | Texto com efeito de distorção RGB animado |
| **Neon Glow** | `.neon-text` | Brilho roxo intenso em texto |
| **3D Perspective** | `.perspective-3d` | Container com perspectiva 2000px para cards 3D |
| **Flip Cards** | `.rotate-y-180` + `.backface-hidden` | Cards que viram 180° no hover |
| **Float Animation** | `.animate-float` | Elementos que flutuam suavemente |
| **Float + Rotate** | `.animate-float-rotate` | Flutuação com rotação 360° |
| **Shimmer Text** | `.shimmer-text` | Gradiente animado de esquerda para direita |
| **Magnetic Button** | `.magnetic-button` | Botão com gradiente e glow no hover |
| **Cyber Button** | `.cyber-button` | Botão com clip-path angular futurista |
| **Pulse Glow** | `.pulsing-glow` | Animação de pulso com sombra azul |
| **Grid Pattern** | `.futuristic-grid` | Background com linhas de grade sutis |
| **Circuit Pattern** | `.bg-circuit-pattern` | Padrão SVG de circuito eletrônico |
| **Interactive Spheres** | `.interactive-sphere` | Esferas blur com gradiente radial |
| **Scanlines** | `.scanlines` | Efeito de linhas de monitor CRT |

### Estrutura das Seções

| # | Componente | Efeitos Principais | Descrição |
|---|------------|-------------------|-----------|
| 1 | **Navbar** | Glitch text, backdrop-blur | Navegação fixa com logo animado |
| 2 | **HeroSection** | Neural network canvas, TypeAnimation, float-rotate | Rede neural interativa + texto digitado |
| 3 | **AboutSection** | Carousel (Embla), gradient cards | Timeline da jornada da empresa |
| 4 | **ProductsSection** | 3D flip cards, perspective | Cards que viram mostrando detalhes |
| 5 | **SimulatorSection** | State machine, animated tags | Simulador interativo de ideias |
| 6 | **TechnologySection** | SVG gear animation, pulse | Engrenagem central animada |
| 7 | **ResponsiveDemoSection** | Device mockups, animated preview | Demo de responsividade |
| 8 | **DifferentialsSection** | Grid cards, hover effects | 6 diferenciais com ícones |
| 9 | **CustomSolutionsSection** | Building blocks, connection lines | Blocos montáveis com conexões |
| 10 | **TestimonialsSection** | Canvas particles, cards | Depoimentos com partículas |
| 11 | **CallToActionSection** | Dual CTAs, gradient cards | Dois caminhos de conversão |
| 12 | **Footer** | Social icons, links grid | Rodapé com contatos |

### Animações Customizadas (tailwind.config.ts)

```typescript
keyframes: {
  'text-shimmer': { /* Gradiente deslizante */ },
  'float': { /* Flutuação vertical suave */ },
  'float-rotate': { /* Flutuação + rotação 360° */ },
  'star-fade': { /* Estrela que aparece e desaparece */ },
  'fade-in': { /* Entrada suave com translateY */ },
  'typing': { /* Efeito máquina de escrever */ }
}
```

### Dependências Especiais
- `react-type-animation` - Efeito de digitação no Hero
- `embla-carousel-react` - Carousel na AboutSection
- `lucide-react` - Ícones em todo o projeto

### Hook Customizado: useIsMobile
Detecta viewport < 768px para adaptar:
- Tamanhos de texto menores
- Animações simplificadas
- Interações touch-friendly (tap ao invés de hover nos cards)

---

## Índice

1. [Instruções de Migração](#instruções-de-migração)
2. [Dependências (package.json)](#dependências)
3. [Arquivos de Configuração](#arquivos-de-configuração)
4. [Estilos Globais](#estilos-globais)
5. [Arquivos Core](#arquivos-core)
6. [Hooks Customizados](#hooks-customizados)
7. [Componentes UI Customizados](#componentes-ui-customizados)
8. [Páginas](#páginas)
9. [Componentes de Seção](#componentes-de-seção)

---

## Instruções de Migração

### Ordem de criação dos arquivos:
1. Primeiro, instale as dependências listadas abaixo
2. Configure `tailwind.config.ts` com as cores e animações customizadas
3. Atualize `index.html` com SEO e fontes
4. Copie `src/index.css` com todos os estilos customizados
5. Copie os arquivos core (`App.tsx`, `main.tsx`, `utils.ts`)
6. Copie os hooks e componentes UI customizados
7. Copie as páginas
8. Por último, copie todos os componentes de seção

---

## Dependências

Instale as seguintes dependências no novo projeto Lovable:

```
react-type-animation
lucide-react
embla-carousel-react (via shadcn Carousel)
```

**Dependências já incluídas no Lovable:**
- @radix-ui/react-*
- tailwindcss-animate
- class-variance-authority
- clsx
- tailwind-merge

---

## Arquivos de Configuração

### index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Digital Soft Solution | Criamos plataformas que pensam. Negócios que escalam.</title>
    <meta name="description" content="A Digital Soft Solution lança produtos digitais com inteligência viva, automação profunda e autonomia operacional — prontos para escalar, vender e surpreender." />
    <meta name="author" content="Digital Soft Solution" />

    <meta property="og:title" content="Digital Soft Solution | Criamos plataformas que pensam. Negócios que escalam." />
    <meta property="og:description" content="A Digital Soft Solution lança produtos digitais com inteligência viva, automação profunda e autonomia operacional — prontos para escalar, vender e surpreender." />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@lovable_dev" />
    <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  </head>

  <body>
    <div id="root"></div>
    <!-- IMPORTANT: DO NOT REMOVE THIS SCRIPT TAG OR THIS VERY COMMENT! -->
    <script src="https://cdn.gpteng.co/gptengineer.js" type="module"></script>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

### tailwind.config.ts

```typescript
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'sans': ['Space Grotesk', 'Inter', 'sans-serif'],
				'mono': ['monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				digital: {
					purple: '#9b87f5',
					'dark-purple': '#1A1F2C',
					'secondary-purple': '#7E69AB',
					'light-purple': '#D6BCFA',
					'neutral-gray': '#8E9196',
					'bright-blue': '#1EAEDB',
					'vivid-purple': '#8B5CF6'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-out': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(10px)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'text-shimmer': {
					'0%': {
						'background-position': '-200% 0'
					},
					'100%': {
						'background-position': '200% 0'
					}
				},
				'float': {
					'0%': { 
						transform: 'translateY(0px)',
						opacity: '0.5'
					},
					'50%': { 
						transform: 'translateY(-20px)',
						opacity: '0.8' 
					},
					'100%': { 
						transform: 'translateY(0px)',
						opacity: '0.5'
					}
				},
				'float-rotate': {
					'0%': {
						transform: 'translateY(0) rotate(0deg)',
						opacity: '0.5'
					},
					'50%': {
						transform: 'translateY(-20px) rotate(180deg)',
						opacity: '0.8'
					},
					'100%': {
						transform: 'translateY(0) rotate(360deg)',
						opacity: '0.5'
					}
				},
				'star-fade': {
					'0%': {
						transform: 'scale(0)',
						opacity: '0.8'
					},
					'50%': {
						transform: 'scale(1)',
						opacity: '0.6'
					},
					'100%': {
						transform: 'scale(0)',
						opacity: '0'
					}
				},
				'typing': {
					from: { width: '0' },
					to: { width: '100%' }
				},
				'blink': {
					'50%': { borderColor: 'transparent' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-in-delay-1': 'fade-in 0.5s ease-out 0.2s forwards',
				'fade-in-delay-2': 'fade-in 0.5s ease-out 0.4s forwards',
				'fade-in-delay-3': 'fade-in 0.5s ease-out 0.6s forwards',
				'scale-in': 'scale-in 0.3s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'text-shimmer': 'text-shimmer 4s ease infinite',
				'float': 'float 8s ease-in-out infinite',
				'float-delay': 'float 10s ease-in-out 1s infinite',
				'float-rotate': 'float-rotate 15s ease-in-out infinite',
				'star-fade': 'star-fade 1.5s ease-out forwards',
				'typing': 'typing 2s steps(20, end)'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'purple-gradient': 'linear-gradient(135deg, #9b87f5 0%, #7E69AB 100%)',
				'dark-gradient': 'linear-gradient(to bottom, #1A1F2C 0%, #2A2F3C 100%)',
				'shimmer-gradient': 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 25%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)'
			},
			backgroundSize: {
				'200%': '200%',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

---

### vite.config.ts

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
```

---

## Estilos Globais

### src/index.css

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@500;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;

    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;

    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;

    --primary: 252 77% 75%;
    --primary-foreground: 210 40% 98%;

    --secondary: 260 24% 54%;
    --secondary-foreground: 222.2 47.4% 11.2%;

    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;

    --accent: 271 43% 86%;
    --accent-foreground: 222.2 47.4% 11.2%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;

    --radius: 0.5rem;

    --sidebar-background: 0 0% 98%;

    --sidebar-foreground: 240 5.3% 26.1%;

    --sidebar-primary: 240 5.9% 10%;

    --sidebar-primary-foreground: 0 0% 98%;

    --sidebar-accent: 240 4.8% 95.9%;

    --sidebar-accent-foreground: 240 5.9% 10%;

    --sidebar-border: 220 13% 91%;

    --sidebar-ring: 217.2 91.2% 59.8%;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;

    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;

    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;

    --primary: 252 77% 75%;
    --primary-foreground: 222.2 47.4% 11.2%;

    --secondary: 260 24% 54%;
    --secondary-foreground: 210 40% 98%;

    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;

    --accent: 271 43% 86%;
    --accent-foreground: 210 40% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;

    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 224.3 76.3% 48%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }

  @keyframes glitch {
    0% {
      text-shadow: 0.05em 0 0 rgba(255, 0, 255, 0.75),
        -0.05em -0.025em 0 rgba(0, 255, 255, 0.75),
        -0.025em 0.05em 0 rgba(0, 255, 0, 0.75);
    }
    14% {
      text-shadow: 0.05em 0 0 rgba(255, 0, 255, 0.75),
        -0.05em -0.025em 0 rgba(0, 255, 255, 0.75),
        -0.025em 0.05em 0 rgba(0, 255, 0, 0.75);
    }
    15% {
      text-shadow: -0.05em -0.025em 0 rgba(255, 0, 255, 0.75),
        0.025em 0.025em 0 rgba(0, 255, 255, 0.75),
        -0.05em -0.05em 0 rgba(0, 255, 0, 0.75);
    }
    49% {
      text-shadow: -0.05em -0.025em 0 rgba(255, 0, 255, 0.75),
        0.025em 0.025em 0 rgba(0, 255, 255, 0.75),
        -0.05em -0.05em 0 rgba(0, 255, 0, 0.75);
    }
    50% {
      text-shadow: 0.025em 0.05em 0 rgba(255, 0, 255, 0.75),
        0.05em 0 0 rgba(0, 255, 255, 0.75),
        0 -0.05em 0 rgba(0, 255, 0, 0.75);
    }
    99% {
      text-shadow: 0.025em 0.05em 0 rgba(255, 0, 255, 0.75),
        0.05em 0 0 rgba(0, 255, 255, 0.75),
        0 -0.05em 0 rgba(0, 255, 0, 0.75);
    }
    100% {
      text-shadow: -0.025em 0 0 rgba(255, 0, 255, 0.75),
        -0.025em -0.025em 0 rgba(0, 255, 255, 0.75),
        -0.025em -0.05em 0 rgba(0, 255, 0, 0.75);
    }
  }

  @keyframes float-rotate {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 0.5;
    }
    50% {
      transform: translateY(-20px) rotate(180deg);
      opacity: 0.8;
    }
    100% {
      transform: translateY(0) rotate(360deg);
      opacity: 0.5;
    }
  }

  @keyframes star-fade {
    0% {
      transform: scale(0);
      opacity: 0.8;
    }
    50% {
      transform: scale(1);
      opacity: 0.6;
    }
    100% {
      transform: scale(0);
      opacity: 0;
    }
  }

  @keyframes feature-pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(155, 135, 245, 0.7);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(155, 135, 245, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(155, 135, 245, 0);
    }
  }
  
  @keyframes dataFlow {
    0% {
      transform: translate(0, 0);
      opacity: 1;
    }
    100% {
      transform: translate(var(--data-x, 100px), var(--data-y, 100px));
      opacity: 0;
    }
  }
  
  @keyframes float-assembly {
    0% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0); }
  }
  
  @keyframes sketch {
    from { stroke-dashoffset: 1000; }
    to { stroke-dashoffset: 0; }
  }
  
  @keyframes pulse-glow {
    0% { box-shadow: 0 0 0 0 rgba(30, 174, 219, 0.4); }
    70% { box-shadow: 0 0 0 30px rgba(30, 174, 219, 0); }
    100% { box-shadow: 0 0 0 0 rgba(30, 174, 219, 0); }
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-digital-dark-purple text-white font-sans scroll-smooth;
    font-family: 'Space Grotesk', 'Inter', sans-serif;
  }

  .glitch-heading {
    animation: glitch 2s infinite;
  }

  .neon-text {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #9b87f5, 0 0 30px #9b87f5, 0 0 40px #9b87f5;
  }

  .perspective-3d {
    perspective: 2000px;
    transform-style: preserve-3d;
  }
  
  .transform-style-3d {
    transform-style: preserve-3d;
  }
  
  .backface-hidden {
    backface-visibility: hidden;
  }
  
  .rotate-y-180 {
    transform: rotateY(180deg);
  }

  .shadow-glow {
    box-shadow: 0 0 20px rgba(30, 174, 219, 0.2);
  }
  
  .pulsing-glow {
    animation: pulse-glow 2s infinite;
  }
  
  .animate-sketch {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: sketch 3s ease-in-out forwards;
  }
  
  .animate-float-assembly {
    animation: float-assembly 2s infinite ease-in-out;
  }

  .magnetic-button {
    @apply bg-gradient-to-r from-digital-bright-blue via-digital-purple to-digital-vivid-purple text-white rounded-full px-10 py-7 relative overflow-hidden hover:shadow-[0_0_25px_rgba(30,174,219,0.8)] transition-shadow duration-500;
  }
  
  .magnetic-button::before {
    content: '';
    @apply absolute inset-0 bg-gradient-to-r from-digital-bright-blue via-digital-purple to-digital-vivid-purple opacity-0 transition-opacity duration-500;
    filter: blur(15px);
    z-index: 0;
  }
  
  .magnetic-button:hover::before {
    opacity: 1;
  }
  
  .pulse-button {
    @apply bg-digital-dark-purple border-2 border-digital-bright-blue text-white rounded-md transition-all duration-500;
  }
  
  .pulse-button:hover {
    @apply shadow-[0_0_25px_rgba(30,174,219,0.5)];
  }

  .cyber-button {
    @apply border-2 border-white/30 bg-transparent text-white px-10 py-7 rounded-none hover:border-digital-purple hover:text-digital-bright-blue relative;
    clip-path: polygon(0 0, 100% 0, 100% 70%, 90% 100%, 0 100%);
    transition: clip-path 0.3s ease, background-color 0.3s ease;
  }
  
  .cyber-button:hover {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0% 70%);
    background: rgba(255, 255, 255, 0.05);
  }

  .interactive-sphere {
    background: radial-gradient(circle at 30% 30%, rgba(30,174,219,0.8), rgba(155,135,245,0.3) 60%, transparent);
    filter: blur(30px);
    animation: float-rotate 15s infinite ease-in-out;
  }

  .interactive-sphere-alt {
    background: radial-gradient(circle at 70% 70%, rgba(139,92,246,0.8), rgba(155,135,245,0.3) 60%, transparent);
    filter: blur(20px);
    animation: float-rotate 18s infinite ease-in-out reverse;
  }

  .futuristic-grid {
    background-image: 
      linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 30px 30px;
  }
  
  .bg-grid-pattern {
    background-size: 50px 50px;
    background-image: 
      linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  }
  
  .bg-circuit-pattern {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239b87f5' fill-opacity='0.1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  
  .radial-gradient-bg {
    background: radial-gradient(circle at 50% 50%, rgba(155, 135, 245, 0.1), transparent 70%);
  }
  
  .bg-gradient-radial {
    background: radial-gradient(circle at 50% 50%, var(--tw-gradient-from), var(--tw-gradient-to));
  }

  .feature-pill {
    @apply bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-digital-purple/30 transition-all hover:border-digital-bright-blue;
    animation: feature-pulse 2s infinite;
  }

  .feature-pill:nth-child(1) {
    animation-delay: 0s;
  }
  
  .feature-pill:nth-child(2) {
    animation-delay: 0.7s;
  }
  
  .feature-pill:nth-child(3) {
    animation-delay: 1.4s;
  }

  .feature-pill-glow {
    @apply absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500;
    background: radial-gradient(circle, rgba(30,174,219,0.8) 0%, transparent 70%);
    filter: blur(10px);
  }

  .tech-symbol {
    @apply font-mono animate-float-rotate;
  }

  .particles {
    @apply absolute inset-0 pointer-events-none;
  }

  .glitch-text {
    @apply relative;
    text-shadow: 0.05em 0 0 rgba(255, 0, 255, 0.75),
      -0.025em -0.05em 0 rgba(0, 255, 255, 0.75),
      0.025em 0.05em 0 rgba(0, 255, 0, 0.75);
    animation: glitch 2s infinite;
  }
  
  .neural-network-container {
    @apply overflow-hidden pointer-events-none;
  }
  
  .neural-node {
    @apply absolute rounded-full transition-all duration-300 ease-in-out;
  }
  
  .data-particle {
    @apply absolute w-2 h-2 rounded-full bg-digital-bright-blue/70;
    filter: blur(2px);
  }
  
  .product-tag {
    @apply absolute opacity-0 animate-fade-in;
  }
  
  .product-tag .product-name {
    @apply animate-typing overflow-hidden whitespace-nowrap;
  }
  
  .scanlines {
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 50%,
      rgba(255, 255, 255, 0.04) 50%
    );
    background-size: 100% 4px;
  }
  
  .text-typing {
    @apply text-white/80;
  }
  
  .building-block {
    @apply relative rounded-lg overflow-hidden;
  }
  
  .building-block .connection-points .point {
    @apply absolute w-4 h-4 bg-white/10 rounded-full border border-white/5 transform translate-x-[-50%] translate-y-[-50%] transition-all duration-300;
  }
  
  .building-block .connection-points .point.top {
    @apply top-0 left-1/2;
  }
  
  .building-block .connection-points .point.right {
    @apply top-1/2 right-0 translate-x-[50%];
  }
  
  .building-block .connection-points .point.bottom {
    @apply bottom-0 left-1/2 translate-y-[50%];
  }
  
  .building-block .connection-points .point.left {
    @apply top-1/2 left-0 translate-x-[-50%];
  }
  
  .building-block:hover .connection-points .point,
  .building-block.selected .connection-points .point {
    @apply bg-digital-bright-blue/20 border-digital-bright-blue/40;
  }
  
  .connector-line {
    @apply absolute h-3 w-1 bg-digital-bright-blue/50 left-1/2 bottom-0 transform translate-x-[-50%] translate-y-[50%];
  }
  
  .connection-line {
    @apply absolute bg-digital-bright-blue/30;
  }
}

@layer components {
  .shimmer-text {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-white via-digital-purple to-white bg-[length:200%_100%] animate-text-shimmer;
  }

  .gradient-text {
    @apply bg-clip-text text-transparent bg-purple-gradient;
  }

  .gradient-border {
    @apply relative before:absolute before:-inset-[1px] before:bg-purple-gradient before:rounded-[inherit] before:-z-10;
  }

  .card-link {
    @apply relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-digital-purple after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left;
  }
  
  .hover-scale {
    @apply transition-transform duration-200 hover:scale-[1.02];
  }
  
  .data-flow-particle {
    animation: dataFlow 3s infinite;
  }
  
  .data-flow-particle[data-angle="0"] {
    --data-x: 100px;
    --data-y: 0px;
  }
  
  .data-flow-particle[data-angle="1.0471975511965976"] {
    --data-x: 86.6px;
    --data-y: 50px;
  }
  
  .data-flow-particle[data-angle="2.0943951023931953"] {
    --data-x: 50px;
    --data-y: 86.6px;
  }
  
  .data-flow-particle[data-angle="3.141592653589793"] {
    --data-x: 0px;
    --data-y: 100px;
  }
  
  .data-flow-particle[data-angle="4.1887902047863905"] {
    --data-x: -50px;
    --data-y: 86.6px;
  }
  
  .data-flow-particle[data-angle="5.235987755982988"] {
    --data-x: -86.6px;
    --data-y: 50px;
  }
}
```

---

### src/App.css

```css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}
```

---

## Arquivos Core

### src/main.tsx

```tsx
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);
```

---

### src/App.tsx

```tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DeviceIndicator } from "./hooks/use-mobile";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import "./App.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <DeviceIndicator />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
```

---

### src/lib/utils.ts

```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

---

## Hooks Customizados

### src/hooks/use-mobile.tsx

```tsx
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Função para verificar o tamanho da tela
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Verificação inicial
    checkMobile()
    
    // Ouve mudanças de tamanho da tela
    window.addEventListener("resize", checkMobile)
    
    // Cleanup
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return isMobile
}

// Componente para mostrar tamanho da tela durante desenvolvimento
export function DeviceIndicator() {
  const isMobile = useIsMobile()
  
  if (process.env.NODE_ENV !== "development") return null
  
  return (
    <div className="fixed bottom-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded-md z-50">
      {isMobile ? "📱 Mobile" : "🖥️ Desktop"}
    </div>
  )
}
```

---

## Componentes UI Customizados

### src/components/ui/button.tsx

```tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        cta: "border border-digital-bright-blue text-white bg-transparent hover:bg-digital-bright-blue/20 transition-all duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

---

## Páginas

### src/pages/Index.tsx

```tsx
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProductsSection from '../components/ProductsSection';
import SimulatorSection from '../components/SimulatorSection';
import TechnologySection from '../components/TechnologySection';
import ResponsiveDemoSection from '../components/ResponsiveDemoSection';
import DifferentialsSection from '../components/DifferentialsSection';
import CustomSolutionsSection from '../components/CustomSolutionsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CallToActionSection from '../components/CallToActionSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-digital-dark-purple">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <SimulatorSection />
      <TechnologySection />
      <ResponsiveDemoSection />
      <DifferentialsSection />
      <CustomSolutionsSection />
      <TestimonialsSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default Index;
```

---

### src/pages/NotFound.tsx

```tsx
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
```

---

## Componentes de Seção

### src/components/Navbar.tsx

```tsx
import React, { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-digital-dark-purple/80 backdrop-blur-xl py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Innovative logo with glitch effect */}
        <a href="#" className="text-white font-bold text-2xl md:text-3xl group relative">
          <span className="glitch-text relative z-10">Digi</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-digital-purple to-digital-bright-blue">Unic</span>
          <div className="absolute -inset-1 bg-digital-purple/20 rounded-lg blur-lg group-hover:bg-digital-bright-blue/20 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
        </a>
        
        {/* Futuristic navigation with hover effects */}
        <nav className="hidden lg:flex items-center space-x-10">
          {['Soluções', 'Produtos', 'Diferenciais', 'Sobre', 'Contato'].map((item, index) => (
            <a 
              key={index}
              href="#" 
              className="nav-link relative overflow-hidden group"
            >
              <span className="relative z-10 text-white/80 hover:text-white transition-colors text-lg">
                {item}
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-digital-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="absolute top-0 left-0 w-0 h-0 border-t border-l border-digital-bright-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 border-b border-r border-digital-bright-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
          ))}
        </nav>
        
        {/* Creative CTA button with hover animation */}
        <div className="hidden lg:block">
          <button className="cyber-cta relative px-8 py-3 overflow-hidden group">
            <span className="relative z-10 text-white group-hover:text-digital-bright-blue transition-colors duration-300">
              Iniciar Projeto
            </span>
            <span className="absolute inset-0 border-2 border-digital-purple/50 group-hover:border-digital-bright-blue"></span>
            <span className="absolute inset-0 bg-digital-purple/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            <span className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg 
                className="w-5 h-5 text-digital-bright-blue" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </span>
          </button>
        </div>
        
        {/* Interactive mobile menu toggle */}
        <button 
          className="lg:hidden text-white focus:outline-none relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative w-8 h-8">
            <span className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3.5' : 'top-2'}`}></span>
            <span className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100 top-3.5'}`}></span>
            <span className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3.5' : 'top-5'}`}></span>
          </div>
        </button>
      </div>
      
      {/* Creative mobile menu overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-gradient-to-b from-digital-dark-purple/95 to-black/95 backdrop-blur-md flex flex-col z-40 animate-fade-in">
          <div className="container mx-auto px-4 pt-8 pb-16 flex flex-col gap-6">
            {['Soluções', 'Produtos', 'Diferenciais', 'Sobre', 'Contato'].map((item, index) => (
              <a 
                key={index}
                href="#" 
                className="text-xl text-white hover:text-digital-bright-blue transition-colors py-3 border-b border-white/10 flex items-center justify-between"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{item}</span>
                <span className="w-1.5 h-1.5 bg-digital-purple rounded-full"></span>
              </a>
            ))}
            
            <button className="bg-digital-dark-purple border border-digital-purple text-white hover:bg-digital-purple/10 px-6 py-4 mt-4 rounded-none text-lg relative overflow-hidden">
              <span className="relative z-10">Iniciar Projeto</span>
              <span className="absolute top-0 right-0 w-12 h-12 -mt-3 -mr-3 bg-digital-bright-blue rounded-full opacity-20"></span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
```

---

### src/components/HeroSection.tsx

```tsx
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
      const nodeCount = window.innerWidth < 768 ? 12 : 30;
      
      for (let i = 0; i < nodeCount; i++) {
        const node = document.createElement('div');
        node.className = 'neural-node';
        node.style.left = `${Math.random() * 100}%`;
        node.style.top = `${Math.random() * 100}%`;
        node.style.animationDelay = `${Math.random() * 5}s`;
        
        const size = window.innerWidth < 768 ? Math.random() * 6 + 3 : Math.random() * 10 + 5;
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
        
        const maxConnections = window.innerWidth < 768 ? 2 : 3;
        const maxDistance = window.innerWidth < 768 ? 100 : 150;
        
        for (let i = 0; i < nodes.length; i++) {
          const nodeA = nodes[i];
          const rectA = nodeA.getBoundingClientRect();
          const centerAX = rectA.left - neuralContainer.getBoundingClientRect().left + rectA.width / 2;
          const centerAY = rectA.top - neuralContainer.getBoundingClientRect().top + rectA.height / 2;
          
          // Connect to a few closest nodes
          for (let j = 0; j < maxConnections; j++) {
            if (j !== i && Math.random() > 0.7) {
              const nodeB = nodes[Math.floor(Math.random() * nodes.length)];
              const rectB = nodeB.getBoundingClientRect();
              const centerBX = rectB.left - neuralContainer.getBoundingClientRect().left + rectB.width / 2;
              const centerBY = rectB.top - neuralContainer.getBoundingClientRect().top + rectB.height / 2;
              
              const distance = Math.sqrt(Math.pow(centerBX - centerAX, 2) + Math.pow(centerBY - centerAY, 2));
              
              if (distance < maxDistance) { // Only connect if nodes are close enough
                ctx.beginPath();
                ctx.moveTo(centerAX, centerAY);
                ctx.lineTo(centerBX, centerBY);
                
                // Create gradient for each connection
                const gradient = ctx.createLinearGradient(centerAX, centerAY, centerBX, centerBY);
                gradient.addColorStop(0, 'rgba(155, 135, 245, 0.2)');
                gradient.addColorStop(1, 'rgba(30, 174, 219, 0.2)');
                
                ctx.strokeStyle = gradient;
                ctx.lineWidth = window.innerWidth < 768 ? 0.3 : 0.5;
                ctx.stroke();
                
                // Animate data flow (less on mobile)
                if (Math.random() > (window.innerWidth < 768 ? 0.8 : 0.7)) {
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
                  
                  animateParticle();
                }
              }
            }
          }
        }
      };
      
      setInterval(drawConnections, window.innerWidth < 768 ? 1200 : 800);
      
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
    { name: "SourceXpress", icon: <Database className="text-digital-bright-blue" size={16} /> },
    { name: "LeadHunter AI", icon: <Brain className="text-digital-purple" size={16} /> },
    { name: "LocaView AI", icon: <BrainCircuit className="text-digital-vivid-purple" size={16} /> },
    { name: "TaskGenius AI", icon: <Rocket className="text-digital-secondary-purple" size={16} /> },
  ];

  return (
    <section 
      ref={containerRef}
      className="w-full min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-digital-dark-purple perspective-3d"
    >
      {/* Digital Brain visualization */}
      <div ref={neuralNetRef} className="absolute inset-0 neural-network-container opacity-80 md:opacity-100">
        <canvas ref={canvasRef} className="absolute inset-0 z-10"></canvas>
      </div>
      
      {/* Futuristic overlay with scanlines */}
      <div className="absolute inset-0 scanlines opacity-5 md:opacity-10 z-10"></div>
      <div className="absolute inset-0 radial-gradient-bg z-0"></div>
      
      {/* Main content area */}
      <div className="container px-4 md:px-6 mx-auto relative z-20 mt-12 md:mt-16">
        <div className="flex flex-col items-center justify-center gap-6 md:gap-10 text-center">
          {/* Dynamic product name appearance - hidden on mobile */}
          <div className={`products-container hidden md:block transition-opacity duration-1000 ${showProducts ? 'opacity-100' : 'opacity-0'}`}>
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
                  <span className="product-name text-sm">{product.name}</span>
                </span>
              </div>
            ))}
          </div>
          
          {/* Main heading with dynamic typing effect */}
          <div className={`text-center max-w-4xl mx-auto transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="glitch-heading text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-3 md:mb-4 leading-tight">
              <span className="block text-white">A MENTE ESTRATÉGICA</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-digital-bright-blue via-digital-purple to-digital-vivid-purple">
                POR TRÁS DE PRODUTOS
              </span>
              <span className="block text-white">QUE FUNCIONAM SOZINHOS</span>
            </h1>
            
            <div className="mt-4 md:mt-6 h-12 md:h-16 text-base sm:text-lg md:text-2xl text-white/80">
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
                className="text-typing px-2 md:px-0"
              />
            </div>
          </div>
          
          {/* Call to action button - only the correct one */}
          <div className={`mt-6 md:mt-10 flex flex-col gap-4 transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Button variant="cta" className="group px-4 md:px-6 py-4 md:py-6 text-base md:text-lg w-full sm:w-auto">
              <span className="relative flex items-center gap-2 justify-center">
                Esqueça o comum. Veja o que é possível
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center animate-bounce">
        <span className="text-white/50 text-sm mb-2">Scroll para descobrir</span>
        <div className="w-8 h-12 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-2 h-2 rounded-full bg-digital-purple animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
```

---

### src/components/AboutSection.tsx

```tsx
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect } from "react";
import { ArrowRight } from 'lucide-react';

const StoryStep = ({ 
  active, 
  index, 
  title, 
  description, 
  visualElement 
}: { 
  active: boolean; 
  index: number; 
  title: string; 
  description: string;
  visualElement: React.ReactNode;
}) => {
  return (
    <div className={`story-step transition-all duration-500 ease-out ${active ? 'opacity-100 scale-100' : 'opacity-20 scale-95'}`}>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="w-full md:w-1/2 story-visual">
          {visualElement}
        </div>
        <div className="w-full md:w-1/2 story-content text-left">
          <div className="step-number mb-4">
            <span className="inline-block bg-digital-purple/20 text-digital-bright-blue font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl border border-digital-purple/50">
              {index + 1}
            </span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">{title}</h3>
          <p className="text-lg text-white/70">{description}</p>
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api) return;

    api.on('select', () => {
      setCurrentStep(api.selectedScrollSnap());
    });

    // Auto-rotate through the carousel
    const autoRotate = setInterval(() => {
      if (currentStep < 3) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => clearInterval(autoRotate);
  }, [api, currentStep]);

  const storySteps = [
    {
      title: "Uma ideia nasce...",
      description: "Todo produto revolucionário começa como uma ideia. Nós capturamos a essência do seu conceito e começamos a dar forma digital ao que antes era apenas imaginação.",
      visualElement: (
        <div className="idea-visualization">
          <div className="idea-sketch">
            <svg viewBox="0 0 200 200" className="w-full max-w-md mx-auto">
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1EAEDB" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#9b87f5" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              <path 
                d="M30,100 Q50,50 100,80 T170,90" 
                fill="none"
                stroke="url(#gradient1)"
                strokeWidth="2"
                className="animate-sketch"
              />
              <circle cx="30" cy="100" r="5" fill="#1EAEDB" className="animate-fadeIn delay-1" />
              <circle cx="100" cy="80" r="5" fill="#9b87f5" className="animate-fadeIn delay-2" />
              <circle cx="170" cy="90" r="5" fill="#8B5CF6" className="animate-fadeIn delay-3" />
            </svg>
          </div>
        </div>
      )
    },
    {
      title: "Ganha inteligência...",
      description: "Transformamos ideias estáticas em sistemas inteligentes. Integramos IA, automação e regras de negócio para criar uma solução que pensa e aprende sozinha.",
      visualElement: (
        <div className="intelligence-visualization">
          <div className="automated-flow-diagram">
            <div className="w-full max-w-md mx-auto relative">
              <div className="flowchart-container h-64 flex flex-col justify-around">
                <div className="flowchart-node bg-digital-dark-purple border border-digital-purple/40 p-4 rounded-lg shadow-glow relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-digital-bright-blue/20 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="#1EAEDB" strokeWidth="2" />
                        <path d="M12 2V4" stroke="#1EAEDB" strokeWidth="2" strokeLinecap="round" />
                        <path d="M12 20V22" stroke="#1EAEDB" strokeWidth="2" strokeLinecap="round" />
                        <path d="M4 12H2" stroke="#1EAEDB" strokeWidth="2" strokeLinecap="round" />
                        <path d="M22 12H20" stroke="#1EAEDB" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <span className="text-white font-medium">Input Processado</span>
                  </div>
                </div>
                <div className="flow-line h-12 w-0.5 bg-gradient-to-b from-digital-bright-blue to-digital-purple mx-auto animate-pulse"></div>
                <div className="flowchart-node bg-digital-dark-purple border border-digital-purple/40 p-4 rounded-lg shadow-glow relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-digital-purple/20 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="#9b87f5" strokeWidth="2" />
                        <path d="M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21" stroke="#9b87f5" strokeWidth="2" />
                      </svg>
                    </div>
                    <span className="text-white font-medium">Automação Inteligente</span>
                  </div>
                </div>
                <div className="flow-line h-12 w-0.5 bg-gradient-to-b from-digital-purple to-digital-vivid-purple mx-auto animate-pulse"></div>
                <div className="flowchart-node bg-digital-dark-purple border border-digital-purple/40 p-4 rounded-lg shadow-glow relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-digital-vivid-purple/20 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#8B5CF6" strokeWidth="2" />
                        <path d="M9 12L11 14L15 10" stroke="#8B5CF6" strokeWidth="2" />
                      </svg>
                    </div>
                    <span className="text-white font-medium">Resultado Otimizado</span>
                  </div>
                </div>
              </div>
              <div className="data-particles"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Escala sozinha...",
      description: "Sua solução começa a crescer autonomamente. Nossas plataformas são projetadas para escalar sem intervenção humana, gerando resultados exponenciais.",
      visualElement: (
        <div className="scaling-visualization">
          <div className="saas-dashboard w-full max-w-md mx-auto overflow-hidden rounded-lg border border-digital-purple/40 shadow-glow">
            <div className="dashboard-header bg-digital-dark-purple/80 backdrop-blur-sm border-b border-digital-purple/20 p-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-digital-bright-blue"></div>
                  <div className="w-3 h-3 rounded-full bg-digital-purple"></div>
                  <div className="w-3 h-3 rounded-full bg-digital-vivid-purple"></div>
                </div>
                <div className="text-sm text-white/70">Dashboard Autônomo</div>
              </div>
            </div>
            <div className="dashboard-content bg-black/40 p-4">
              <div className="stats-row flex justify-between mb-4">
                <div className="stat-card bg-digital-dark-purple/50 p-3 rounded border border-digital-bright-blue/20 w-[48%]">
                  <p className="text-xs text-white/60">Vendas Automáticas</p>
                  <p className="text-xl font-bold text-white">R$ 247.350</p>
                  <div className="flex items-center gap-1 text-xs text-digital-bright-blue mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>+34.5%</span>
                  </div>
                </div>
                <div className="stat-card bg-digital-dark-purple/50 p-3 rounded border border-digital-purple/20 w-[48%]">
                  <p className="text-xs text-white/60">Leads Gerados</p>
                  <p className="text-xl font-bold text-white">1.458</p>
                  <div className="flex items-center gap-1 text-xs text-digital-purple mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>+28.2%</span>
                  </div>
                </div>
              </div>
              <div className="chart-area h-24 bg-digital-dark-purple/30 rounded border border-white/5 mb-4">
                <div className="h-full w-full flex items-end justify-around px-2">
                  {[40, 65, 35, 50, 75, 45, 90].map((height, i) => (
                    <div key={i} className="chart-bar h-full flex items-end">
                      <div 
                        className="w-4 bg-gradient-to-t from-digital-bright-blue to-digital-vivid-purple rounded-t opacity-80"
                        style={{ height: `${height}%`, animationDelay: `${i * 0.1}s` }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="automation-row flex items-center justify-between">
                <div className="text-xs text-white/60">Processos automatizados</div>
                <div className="automation-pills flex gap-1">
                  <span className="text-xs bg-digital-bright-blue/20 text-digital-bright-blue px-2 py-0.5 rounded-full">Vendas</span>
                  <span className="text-xs bg-digital-purple/20 text-digital-purple px-2 py-0.5 rounded-full">Suporte</span>
                  <span className="text-xs bg-digital-vivid-purple/20 text-digital-vivid-purple px-2 py-0.5 rounded-full">Marketing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Você não está criando só um software. Está criando um legado digital.",
      description: "A sua ideia vira um produto único — pronto para ser lançado, vendido ou licenciado. Com alma, estratégia e automação, ele nasce para gerar impacto real e receita recorrente. Porque aqui, o digital tem propósito. E você é o dono dele.",
      visualElement: (
        <div className="final-product-visualization">
          <div className="product-showcase w-full max-w-md mx-auto">
            <div className="device-mockup relative">
              <div className="laptop-frame border-8 border-digital-dark-purple/80 rounded-lg overflow-hidden shadow-glow">
                <div className="screen bg-black/80 aspect-video flex items-center justify-center p-4">
                  <div className="product-logo flex flex-col items-center justify-center">
                    <div className="w-24 h-24 mb-2 rounded-full bg-gradient-to-br from-digital-bright-blue via-digital-purple to-digital-vivid-purple flex items-center justify-center">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="white" strokeWidth="2" />
                        <path d="M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21" stroke="white" strokeWidth="2" />
                        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="white" strokeWidth="2" />
                        <path d="M17 21L21 17M21 17L17 13M21 17H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="product-name text-white text-2xl font-bold">YourProduct</div>
                    <div className="product-tagline text-white/70 text-sm">Autonomia digital para seu negócio</div>
                    <div className="mt-4 flex gap-2">
                      <div className="px-3 py-1 rounded bg-digital-bright-blue text-white text-xs">Lançar</div>
                      <div className="px-3 py-1 rounded bg-digital-purple text-white text-xs">Vender</div>
                      <div className="px-3 py-1 rounded bg-digital-vivid-purple text-white text-xs">Licenciar</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-lg border border-digital-purple/40 bg-digital-dark-purple/80 backdrop-blur-sm overflow-hidden shadow-glow flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xl font-bold text-digital-bright-blue">R$</div>
                  <div className="text-3xl font-bold text-white">3.2M</div>
                  <div className="text-xs text-white/70">Valor</div>
                </div>
              </div>
              <div className="absolute -left-6 -bottom-6 w-24 h-24 rounded-lg border border-digital-purple/40 bg-digital-dark-purple/80 backdrop-blur-sm overflow-hidden shadow-glow flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-digital-vivid-purple">95%</div>
                  <div className="text-xs text-white/70">Automação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="w-full py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-digital-dark-purple z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full transform bg-grid opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-digital-bright-blue text-lg font-bold uppercase tracking-wider">O que fazemos</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-white">
            Da ideia ao <span className="shimmer-text">impacto digital</span>
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Carousel 
            setApi={setApi} 
            opts={{ loop: true, align: "center" }}
            className="w-full"
          >
            <CarouselContent>
              {storySteps.map((step, index) => (
                <CarouselItem key={index} className="w-full">
                  <StoryStep 
                    active={currentStep === index} 
                    index={index} 
                    title={step.title} 
                    description={step.description}
                    visualElement={step.visualElement}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              {storySteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentStep === index ? 'bg-digital-bright-blue w-8' : 'bg-white/30'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <Button variant="cta" className="group">
              <span className="relative flex items-center gap-2">
                Crie sua própria história com a DigiUnic Soluções Digitais
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
```

---

### src/components/ProductsSection.tsx

```tsx
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
            
            {isMobile ? (
              <div className="flex-1 mb-6 overflow-y-auto">
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="mt-1 min-w-4 h-4 rounded-full bg-digital-purple/30 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-digital-bright-blue"></div>
                      </div>
                      <span className="text-white text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
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
            )}
            
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
```

---

### src/components/SimulatorSection.tsx

```tsx
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
```

---

### src/components/TechnologySection.tsx

```tsx
import React, { useEffect, useRef } from 'react';
import { Brain, Database, Code, Network, Link, Cloud } from 'lucide-react';

interface TechItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const TechItem = ({ icon, title, description, delay }: TechItemProps) => {
  return (
    <div 
      className="tech-item relative bg-digital-dark-purple/30 backdrop-blur-sm border border-white/5 rounded-lg p-5 hover:border-digital-bright-blue/30 transition-all duration-500 hover:shadow-glow hover:transform hover:scale-105"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-gradient-to-br from-digital-bright-blue/20 to-digital-purple/20">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white/70">{description}</p>
        </div>
      </div>
    </div>
  );
};

const TechnologySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gearRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !gearRef.current) return;
    
    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const scrollPercentage = 1 - (rect.top / viewportHeight);
        const rotationDegree = scrollPercentage * 180;
        
        if (gearRef.current) {
          gearRef.current.style.transform = `rotate(${rotationDegree}deg)`;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const technologies = [
    {
      icon: <Brain size={28} className="text-digital-bright-blue" />,
      title: "Autonomia",
      description: "Sistemas que tomam decisões inteligentes e operam independentemente, sem intervenção humana constante.",
      delay: 100
    },
    {
      icon: <Network size={28} className="text-digital-purple" />,
      title: "IA Integrada",
      description: "Algoritmos avançados que aprendem, adaptam-se e evoluem para otimizar cada aspecto do seu negócio.",
      delay: 200
    },
    {
      icon: <Database size={28} className="text-digital-vivid-purple" />,
      title: "UX Estratégica",
      description: "Interfaces intuitivas projetadas para maximizar conversões e melhorar a experiência do usuário.",
      delay: 300
    },
    {
      icon: <Code size={28} className="text-digital-secondary-purple" />,
      title: "Modelo de Negócio",
      description: "Arquitetura digital alinhada com objetivos de receita, crescimento e retenção de clientes.",
      delay: 400
    },
    {
      icon: <Cloud size={28} className="text-digital-bright-blue" />,
      title: "Lógica de Escala",
      description: "Estruturas que crescem organicamente conforme o volume de negócios aumenta, sem gargalos técnicos.",
      delay: 500
    },
    {
      icon: <Link size={28} className="text-digital-purple" />,
      title: "Ecosistema Completo",
      description: "Soluções que se integram perfeitamente ao seu ambiente atual, ampliando capacidades existentes.",
      delay: 600
    }
  ];
  
  return (
    <section ref={containerRef} className="w-full py-24 relative overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-digital-dark-purple/40 to-black">
        <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Visual elements - gear metaphor */}
          <div className="w-full lg:w-1/3 flex justify-center items-center">
            <div className="gear-mechanism relative">
              <div ref={gearRef} className="main-gear w-72 h-72 border-4 border-digital-purple/30 rounded-full transition-transform duration-1000 flex items-center justify-center">
                <div className="inner-gear w-48 h-48 border-4 border-digital-bright-blue/30 rounded-full flex items-center justify-center">
                  <div className="core-gear w-24 h-24 bg-gradient-to-br from-digital-bright-blue to-digital-purple rounded-full flex items-center justify-center pulsing-glow">
                    <Brain size={40} className="text-white" />
                  </div>
                </div>
                
                {/* Gear teeth */}
                {Array.from({ length: 12 }).map((_, i) => {
                  const angle = (i * 30) * Math.PI / 180;
                  const x = Math.cos(angle) * 36;
                  const y = Math.sin(angle) * 36;
                  
                  return (
                    <div 
                      key={i}
                      className="absolute w-8 h-3 bg-digital-purple/50"
                      style={{ 
                        transform: `translate(${x}px, ${y}px) rotate(${angle + Math.PI/2}rad)` 
                      }}
                    ></div>
                  );
                })}
                
                {/* Connection points */}
                {[45, 135, 225, 315].map((angle, i) => {
                  const radians = angle * Math.PI / 180;
                  const x = Math.cos(radians) * 124;
                  const y = Math.sin(radians) * 124;
                  
                  return (
                    <div
                      key={i}
                      className="absolute w-4 h-4 rounded-full bg-digital-bright-blue" 
                      style={{ 
                        transform: `translate(${x}px, ${y}px)`,
                        boxShadow: '0 0 15px rgba(30,174,219,0.8)'
                      }}
                    ></div>
                  );
                })}
                
                {/* Data particles */}
                {Array.from({ length: 5 }).map((_, i) => {
                  const delay = i * 1.5;
                  const path = `path${i % 3 + 1}`;
                  
                  return (
                    <div
                      key={i}
                      className={`absolute w-2 h-2 rounded-full bg-white data-particle ${path}`}
                      style={{ animationDelay: `${delay}s` }}
                    ></div>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="w-full lg:w-2/3">
            <div className="mb-12">
              <span className="text-digital-bright-blue text-lg font-bold uppercase tracking-wider">Tecnologia Invisível</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white">
                Resultados <span className="shimmer-text">Visíveis</span>
              </h2>
              
              <p className="mt-6 text-xl text-white/80 leading-relaxed">
                Nossos produtos não são só bonitos. São inteligentes, acionáveis e prontos para crescer.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technologies.map((tech, index) => (
                <TechItem
                  key={index}
                  icon={tech.icon}
                  title={tech.title}
                  description={tech.description}
                  delay={tech.delay}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
```

---

### src/components/ResponsiveDemoSection.tsx

```tsx
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

          {/* Card Desempenho Aprimorado - mesmo estilo do Layout Adaptativo */}
          {!isMobile && (
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden col-span-2 hidden md:block">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-digital-bright-blue">Desempenho Aprimorado</h3>
                <p className="text-sm text-gray-300">
                  Renderização mais rápida e fluidez nas interações em telas maiores, garantindo uma experiência ágil e sem travamentos.
                </p>
              </div>
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
```

---

### src/components/DifferentialsSection.tsx

```tsx
import React from 'react';
import { Check, TrendingUp, Zap, Award, ShieldCheck, Users } from "lucide-react";

const DifferentialsSection = () => {
  const features = [
    {
      icon: <TrendingUp size={30} />,
      title: "Arquitetura escalável",
      description: "Cresce sem limites técnicos"
    },
    {
      icon: <Zap size={30} />,
      title: "Fluxos automatizados",
      description: "Funciona sem intervenção humana"
    },
    {
      icon: <Award size={30} />,
      title: "Experiência fluida",
      description: "UX/UI de classe mundial"
    },
    {
      icon: <ShieldCheck size={30} />,
      title: "IA nativa",
      description: "Inteligência em cada interação"
    },
    {
      icon: <Users size={30} />,
      title: "Mínimo esforço humano",
      description: "Máxima eficiência operacional"
    },
    {
      icon: <Check size={30} />,
      title: "Visão estratégica",
      description: "Pensando além do óbvio"
    }
  ];

  return (
    <section className="w-full py-20 bg-[#15171E] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80')] opacity-5 bg-cover bg-fixed"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-digital-purple text-lg font-bold uppercase tracking-wider">DIFERENCIAIS</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-2">Por que somos <span className="shimmer-text">diferentes?</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-digital-purple/50 transition-all duration-300 hover:translate-y-[-5px] group">
              <div className="w-14 h-14 rounded-xl bg-digital-purple/20 flex items-center justify-center text-digital-purple mb-4 group-hover:bg-digital-purple group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-digital-purple transition-colors duration-300">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <div className="bg-digital-purple/20 text-white px-8 py-4 rounded-full text-center max-w-2xl">
            <span className="font-bold text-xl">Tecnologia Premium + Visão Estratégica = Crescimento Exponencial</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
```

---

### src/components/CustomSolutionsSection.tsx

```tsx
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Users, BarChart3, Fingerprint, Volume2, ShoppingCart, MessageCircle } from "lucide-react";

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
    { id: "voice", title: "Notificação por voz", icon: <Volume2 size={24} /> },
    { id: "chatbot", title: "Atendimento por Chatbot via AI", icon: <MessageCircle size={24} /> }
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
                    `Montar solução (${selectedBlocks.length}/6 componentes)`
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
                            {blockId === 'chatbot' && 'Atendimento automatizado 24/7 com inteligência artificial avançada.'}
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
```

---

### src/components/TestimonialsSection.tsx

```tsx
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
```

---

### src/components/CallToActionSection.tsx

```tsx
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Rocket, BrainCircuit, ArrowRight } from "lucide-react";

const CallToActionSection = () => {
  const [hoveredOption, setHoveredOption] = useState<null | 'launch' | 'transform'>(null);
  
  return (
    <section className="w-full py-32 relative overflow-hidden">
      {/* Advanced futuristic background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-digital-dark-purple/70 to-black z-0">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-full h-[500px] bg-gradient-radial from-digital-bright-blue/10 to-transparent opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-radial from-digital-purple/10 to-transparent opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-digital-bright-blue text-lg font-bold uppercase tracking-wider">Próximos Passos</span>
          <h2 className="text-4xl md:text-6xl font-extrabold mt-4 text-white leading-tight">
            <span className="block">Você pode continuar contratando tecnologia.</span>
            <span className="block mt-3">Ou pode ser <span className="shimmer-text">dono da sua</span>.</span>
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div 
              className={`option-card relative overflow-hidden rounded-xl border transition-all duration-500 ${
                hoveredOption === 'launch'
                  ? 'border-digital-bright-blue shadow-glow bg-black/60 scale-105'
                  : 'border-white/10 bg-black/20'
              }`}
              onMouseEnter={() => setHoveredOption('launch')}
              onMouseLeave={() => setHoveredOption(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-digital-bright-blue/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              
              {/* Background decorative elements */}
              <div className="absolute w-24 h-24 rounded-full bg-digital-bright-blue/20 blur-xl right-8 bottom-8"></div>
              
              <div className="p-8 md:p-10 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-digital-bright-blue to-digital-purple rounded-full flex items-center justify-center mb-6">
                  <Rocket size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Quero lançar um produto próprio</h3>
                <p className="text-white/70 mb-8">
                  Transforme sua visão em um produto digital autônomo, pronto para ser lançado ao mercado e gerar receitas recorrentes.
                </p>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "Desenvolvimento completo do produto",
                    "IA e automação integradas",
                    "Estratégia de lançamento",
                    "Suporte técnico contínuo"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 min-w-4 h-4 rounded-full bg-digital-bright-blue/30 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-digital-bright-blue"></div>
                      </div>
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full bg-digital-bright-blue hover:bg-digital-bright-blue/80 text-white font-bold py-6 shadow-md">
                  <span className="flex items-center justify-center gap-2 text-lg">
                    Quero lançar meu produto
                    <ArrowRight size={20} />
                  </span>
                </Button>
              </div>
            </div>
            
            <div 
              className={`option-card relative overflow-hidden rounded-xl border transition-all duration-500 ${
                hoveredOption === 'transform'
                  ? 'border-digital-vivid-purple shadow-glow bg-black/60 scale-105'
                  : 'border-white/10 bg-black/20'
              }`}
              onMouseEnter={() => setHoveredOption('transform')}
              onMouseLeave={() => setHoveredOption(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-digital-vivid-purple/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              
              {/* Background decorative elements */}
              <div className="absolute w-24 h-24 rounded-full bg-digital-vivid-purple/20 blur-xl right-8 bottom-8"></div>
              
              <div className="p-8 md:p-10 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-digital-purple to-digital-vivid-purple rounded-full flex items-center justify-center mb-6">
                  <BrainCircuit size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Quero transformar meu negócio com IA</h3>
                <p className="text-white/70 mb-8">
                  Revolucione suas operações atuais com soluções de inteligência artificial que automatizam processos e amplificam resultados.
                </p>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "Diagnóstico personalizado",
                    "Implementação de IA estratégica",
                    "Integração com sistemas existentes",
                    "Capacitação da sua equipe"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 min-w-4 h-4 rounded-full bg-digital-vivid-purple/30 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-digital-vivid-purple"></div>
                      </div>
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full bg-digital-vivid-purple hover:bg-digital-vivid-purple/80 text-white font-bold py-6 shadow-md">
                  <span className="flex items-center justify-center gap-2 text-lg">
                    Quero transformar meu negócio
                    <ArrowRight size={20} />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
```

---

### src/components/Footer.tsx

```tsx
import React from 'react';
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#13151B] text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">DigiUnic Soluções Digitais</h3>
            <p className="mb-6 text-gray-400">
              Criamos produtos digitais com inteligência nativa, fluxos automatizados e autonomia real, 
              preparados para escalar sem depender de operação manual.
            </p>
            
            <div className="flex items-center gap-4">
              {/* Social media icons */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-digital-purple transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-digital-purple transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-digital-purple transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-digital-purple transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-digital-purple transition-colors duration-300">Nossos Produtos</a></li>
              <li><a href="#" className="hover:text-digital-purple transition-colors duration-300">Soluções Personalizadas</a></li>
              <li><a href="#" className="hover:text-digital-purple transition-colors duration-300">Quem Somos</a></li>
              <li><a href="#" className="hover:text-digital-purple transition-colors duration-300">Cases de Sucesso</a></li>
              <li><a href="#" className="hover:text-digital-purple transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-digital-purple transition-colors duration-300">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MapPin size={20} className="text-digital-purple" />
                <span>São Paulo, SP - Brasil</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-digital-purple" />
                <span>+55 (11) 9999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-digital-purple" />
                <span>contato@digiunic.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center">
          <p>&copy; {new Date().getFullYear()} DigiUnic Soluções Digitais. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

---

## Fim do Documento

Este documento contém todo o código necessário para recriar o projeto DigiUnic em outro ambiente Lovable. Basta copiar os arquivos na ordem indicada nas instruções de migração.

**Total de arquivos:** 20+ arquivos
**Total de linhas de código:** ~3500 linhas

---

*Documento gerado automaticamente para fins de migração.*
