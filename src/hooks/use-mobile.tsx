
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
