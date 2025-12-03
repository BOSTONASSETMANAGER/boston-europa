"use client"

import { useEffect, RefObject, useState } from "react"

// Lazy load GSAP solo cuando se necesita
let gsapInstance: any = null

const loadGSAP = async () => {
  if (gsapInstance) return gsapInstance
  const { gsap } = await import("gsap")
  const { ScrollToPlugin } = await import("gsap/ScrollToPlugin")
  gsap.registerPlugin(ScrollToPlugin)
  gsapInstance = gsap
  return gsap
}

// Detectar dispositivo de bajo rendimiento
function isLowEndDevice(): boolean {
  if (typeof window === 'undefined') return false
  const memory = (navigator as any).deviceMemory || 8
  const cores = navigator.hardwareConcurrency || 8
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  return prefersReducedMotion || memory <= 4 || cores <= 4
}

export function useScrollSnap(sectionRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!sectionRef.current) return

    // Desactivar scroll snap en dispositivos móviles o de bajo rendimiento
    const isMobile = window.innerWidth < 768
    const isLowEnd = isLowEndDevice()
    if (isMobile || isLowEnd) return

    const section = sectionRef.current
    let isScrolling = false
    let scrollAccumulator = 0
    let scrollTimeout: NodeJS.Timeout | null = null
    const SCROLL_THRESHOLD = 50 // Umbral mínimo para activar el snap

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const sectionTop = section.offsetTop
      const sectionBottom = sectionTop + section.offsetHeight
      const viewportHeight = window.innerHeight

      // Verificar si estamos dentro de la sección actual
      const isInSection = scrollTop >= sectionTop - viewportHeight / 2 && scrollTop < sectionBottom - viewportHeight / 2

      if (isInSection) {
        // Acumular el scroll para evitar cambios bruscos
        scrollAccumulator += e.deltaY

        // Limpiar timeout anterior
        if (scrollTimeout) {
          clearTimeout(scrollTimeout)
        }

        // Esperar a que el usuario termine de scrollear
        scrollTimeout = setTimeout(() => {
          scrollAccumulator = 0
        }, 150)

        // Solo activar si superamos el umbral
        if (Math.abs(scrollAccumulator) > SCROLL_THRESHOLD) {
          e.preventDefault()
          isScrolling = true

          let targetSection: Element | null = null

          if (scrollAccumulator > 0) {
            // Scroll hacia abajo - siguiente sección
            targetSection = section.nextElementSibling
          } else if (scrollAccumulator < 0) {
            // Scroll hacia arriba - sección anterior
            targetSection = section.previousElementSibling
          }

          // Reset acumulador
          scrollAccumulator = 0

          if (targetSection) {
            // Cargar GSAP de forma asíncrona y ejecutar animación
            loadGSAP().then((gsap) => {
              gsap.to(window, {
                duration: 1,
                scrollTo: { y: targetSection, offsetY: 0 },
                ease: "power2.inOut",
                onComplete: () => {
                  setTimeout(() => {
                    isScrolling = false
                  }, 500)
                },
              })
            }).catch(() => {
              // Fallback: scroll nativo si GSAP falla
              (targetSection as HTMLElement).scrollIntoView({ behavior: 'smooth' })
              isScrolling = false
            })
          } else {
            isScrolling = false
          }
        }
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: false })

    return () => {
      window.removeEventListener("wheel", handleWheel)
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }
    }
  }, [sectionRef])
}
