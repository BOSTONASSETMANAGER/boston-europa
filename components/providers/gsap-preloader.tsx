"use client"

import { useEffect } from "react"

/**
 * Componente que precarga GSAP y sus plugins durante el loading inicial.
 * Esto mejora el INP al tener todo listo antes de la primera interacción.
 */
export function GSAPPreloader() {
  useEffect(() => {
    // Precargar GSAP después de que el componente monte
    const preloadGSAP = async () => {
      try {
        const [{ gsap }, { ScrollTrigger }, { ScrollToPlugin }] = await Promise.all([
          import("gsap"),
          import("gsap/ScrollTrigger"),
          import("gsap/ScrollToPlugin"),
        ])
        
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
        
        // Marcar como precargado globalmente
        if (typeof window !== "undefined") {
          (window as any).__GSAP_PRELOADED__ = true
          ;(window as any).__GSAP__ = gsap
        }
      } catch (error) {
        console.warn("Failed to preload GSAP:", error)
      }
    }

    // Usar requestIdleCallback si está disponible, sino setTimeout
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => preloadGSAP(), { timeout: 2000 })
    } else {
      setTimeout(preloadGSAP, 100)
    }
  }, [])

  return null
}
