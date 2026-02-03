
# Plano: Criar Documento de Migração Completo

## Objetivo
Criar um arquivo `MIGRATION.md` contendo todo o codigo fonte do projeto DigiUnic organizado por arquivo, facilitando a migracao para outro ambiente Lovable.

## Estrutura do Documento

O documento sera organizado nas seguintes secoes:

### 1. Introducao e Instrucoes
- Descricao do projeto
- Ordem de criacao dos arquivos
- Dependencias necessarias

### 2. Arquivos de Configuracao
- `package.json` (dependencias)
- `index.html` (SEO e fontes)
- `tailwind.config.ts` (cores e animacoes customizadas)
- `vite.config.ts` (configuracao do Vite)

### 3. Estilos Globais
- `src/index.css` (CSS customizado com keyframes, classes utilitarias)
- `src/App.css`

### 4. Arquivos Core
- `src/main.tsx` (ponto de entrada)
- `src/App.tsx` (rotas e providers)
- `src/lib/utils.ts` (funcao cn)

### 5. Hooks Customizados
- `src/hooks/use-mobile.tsx` (deteccao de mobile + DeviceIndicator)

### 6. Componentes UI Customizados
- `src/components/ui/button.tsx` (com variant "cta")

### 7. Paginas
- `src/pages/Index.tsx`
- `src/pages/NotFound.tsx`

### 8. Componentes de Secao (12 componentes)
1. `Navbar.tsx` - Navegacao com efeito glitch
2. `HeroSection.tsx` - Rede neural + TypeAnimation
3. `AboutSection.tsx` - Carousel de jornada
4. `ProductsSection.tsx` - Cards flip 3D
5. `SimulatorSection.tsx` - Simulador de ideias
6. `TechnologySection.tsx` - Engrenagem animada
7. `ResponsiveDemoSection.tsx` - Demo responsivo
8. `DifferentialsSection.tsx` - Grid de diferenciais
9. `CustomSolutionsSection.tsx` - Blocos montaveis
10. `TestimonialsSection.tsx` - Depoimentos com canvas
11. `CallToActionSection.tsx` - CTAs duplos
12. `Footer.tsx` - Rodape

## Formato do Documento

Cada arquivo sera apresentado com:
- Caminho completo do arquivo
- Codigo fonte completo em bloco de codigo markdown
- Separadores visuais entre arquivos

## Tamanho Estimado
O documento tera aproximadamente 2500-3000 linhas de codigo organizado.

## Implementacao
Criarei um unico arquivo `MIGRATION.md` na raiz do projeto contendo todo o codigo necessario para recriar o projeto identico em outro ambiente.
