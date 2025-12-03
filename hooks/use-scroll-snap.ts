"use client"

import { useEffect, RefObject, useState } from "react"

// Usar GSAP precargado o cargarlo lazy
let gsapInstance: any = null

const loadGSAP = async () => {
  // Verificar si ya fue precargado globalmente
  if (typeof window !== "undefined" && (window as any).__GSAP__) {
    return (window as any).__GSAP__
  }
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

    // Cache de valores para evitar reflows
    let cachedSectionTop = section.offsetTop
    let cachedSectionHeight = section.offsetHeight
    let rafId: number | null = null
    let pendingDeltaY = 0

    // Actualizar cache en resize
    const updateCache = () => {
      cachedSectionTop = section.offsetTop
      cachedSectionHeight = section.offsetHeight
    }
    window.addEventListener("resize", updateCache, { passive: true })

    const processScroll = () => {
      rafId = null
      if (isScrolling) return

      const scrollTop = window.scrollY
      const viewportHeight = window.innerHeight
      const sectionBottom = cachedSectionTop + cachedSectionHeight

      const isInSection = scrollTop >= cachedSectionTop - viewportHeight / 2 && 
                          scrollTop < sectionBottom - viewportHeight / 2

      if (isInSection && Math.abs(scrollAccumulator) > SCROLL_THRESHOLD) {
        isScrolling = true
        const direction = scrollAccumulator > 0 ? 1 : -1
        scrollAccumulator = 0

        const targetSection = direction > 0 
          ? section.nextElementSibling 
          : section.previousElementSibling

        if (targetSection) {
          loadGSAP().then((gsap) => {
            gsap.to(window, {
              duration: 1,
              scrollTo: { y: targetSection, offsetY: 0 },
              ease: "power2.inOut",
              onComplete: () => {
                setTimeout(() => { isScrolling = false }, 500)
              },
            })
          }).catch(() => {
            (targetSection as HTMLElement).scrollIntoView({ behavior: 'smooth' })
            isScrolling = false
          })
        } else {
          isScrolling = false
        }
      }
    }

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return

      // Acumular delta sin bloquear
      scrollAccumulator += e.deltaY
      pendingDeltaY = e.deltaY

      if (scrollTimeout) clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => { scrollAccumulator = 0 }, 150)

      // Verificar umbral antes de preventDefault
      if (Math.abs(scrollAccumulator) > SCROLL_THRESHOLD) {
        e.preventDefault()
        // Diferir procesamiento al siguiente frame
        if (!rafId) {
          rafId = requestAnimationFrame(processScroll)
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
