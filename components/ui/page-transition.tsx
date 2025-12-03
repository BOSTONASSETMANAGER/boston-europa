"use client"

import { m, AnimatePresence, LazyMotion, domAnimation } from "motion/react"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { useDevicePerformance } from "@/hooks/use-device-performance"

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const { isLowEnd } = useDevicePerformance()

  useEffect(() => {
    // Verificar si el usuario ya seleccionó un país en esta sesión
    const checkReady = () => {
      const sessionLanguage = sessionStorage.getItem("selectedLanguage")
      if (sessionLanguage) {
        setIsReady(true)
      } else {
        // Esperar a que se seleccione
        const interval = setInterval(() => {
          const lang = sessionStorage.getItem("selectedLanguage")
          if (lang) {
            setIsReady(true)
            clearInterval(interval)
          }
        }, 100)
        return () => clearInterval(interval)
      }
    }
    
    const cleanup = checkReady()
    return cleanup
  }, [])

  useEffect(() => {
    // En dispositivos low-end, no mostrar transición
    if (isLowEnd) return
    
    setIsTransitioning(true)
    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [pathname, isLowEnd])

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait">
        {isTransitioning && !isLowEnd && (
          <m.div
            className="fixed inset-0 z-[9998] pointer-events-none"
            style={{
              background: "linear-gradient(135deg, var(--saas-primary), var(--saas-accent))",
            }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        )}
      </AnimatePresence>
      {isReady ? children : null}
    </LazyMotion>
  )
}
