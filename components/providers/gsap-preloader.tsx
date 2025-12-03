"use client"

import { useEffect } from "react"

const UNICORN_SCRIPT_URL = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.35/dist/unicornStudio.umd.js"

/**
 * Componente que precarga GSAP, sus plugins y Unicorn Studio durante el loading inicial.
 * Esto mejora el INP al tener todo listo antes de la primera interacción.
 */
export function GSAPPreloader() {
  useEffect(() => {
    // Precargar Unicorn Studio inmediatamente (es crítico para el selector de país)
    const preloadUnicornStudio = () => {
      if (document.querySelector(`script[src="${UNICORN_SCRIPT_URL}"]`)) {
        return // Ya está cargado
      }
      
      const script = document.createElement("script")
      script.src = UNICORN_SCRIPT_URL
      script.async = true
      script.onload = () => {
        // @ts-ignore
        if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
          // @ts-ignore
          window.UnicornStudio.init()
          // @ts-ignore
          window.UnicornStudio.isInitialized = true
        }
      }
      document.head.appendChild(script)
    }

    // Cargar Unicorn Studio inmediatamente
    preloadUnicornStudio()

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
