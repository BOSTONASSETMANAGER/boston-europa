"use client"
import { useEffect, useRef, useState } from "react"
import { useScrollSnap } from "@/hooks/use-scroll-snap"
import { useTranslation } from "react-i18next"
import { useDevicePerformance } from "@/hooks/use-device-performance"

// Usar GSAP precargado o cargarlo lazy
let gsapInstance: any = null
let scrollTriggerInstance: any = null

const loadGSAP = async () => {
  // Verificar si ya fue precargado globalmente
  if (typeof window !== "undefined" && (window as any).__GSAP__) {
    const gsap = (window as any).__GSAP__
    const { ScrollTrigger } = await import("gsap/ScrollTrigger")
    return { gsap, ScrollTrigger }
  }
  if (gsapInstance && scrollTriggerInstance) {
    return { gsap: gsapInstance, ScrollTrigger: scrollTriggerInstance }
  }
  const { gsap } = await import("gsap")
  const { ScrollTrigger } = await import("gsap/ScrollTrigger")
  gsap.registerPlugin(ScrollTrigger)
  gsapInstance = gsap
  scrollTriggerInstance = ScrollTrigger
  return { gsap, ScrollTrigger }
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()
  const { isLowEnd } = useDevicePerformance()

  // Aplicar scroll snap
  useScrollSnap(sectionRef)

  useEffect(() => {
    // En dispositivos de bajo rendimiento, no usar animaciones GSAP
    if (isLowEnd || !sectionRef.current || !contentRef.current) return

    const section = sectionRef.current
    const content = contentRef.current
    let ctx: any

    // Cargar GSAP de forma asíncrona
    loadGSAP().then((modules) => {
      if (!modules) return
      const { gsap } = modules

      ctx = gsap.context(() => {
        // Animación de zoom out
        gsap.fromTo(
          section,
          { scale: 1 },
          {
            scale: 0.85,
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          }
        )

        // Animación de fade out del contenido
        gsap.to(content, {
          opacity: 0,
          y: -50,
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "center top",
            scrub: 1,
          },
        })
      })
    })

    return () => ctx?.revert()
  }, [isLowEnd])

  return (
    <section
      ref={sectionRef}
      className="sticky top-0 min-h-screen w-full overflow-hidden flex items-center justify-center rounded-b-[3rem]"
      style={{
        background: "linear-gradient(135deg, var(--saas-primary), var(--saas-accent))",
        transformOrigin: "center top",
      }}
    >
      <div className="absolute inset-0 w-full h-full">
        {/* Video solo en dispositivos de alto rendimiento */}
        {!isLowEnd ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
            style={{ opacity: 0.6 }}
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect fill='%231d3969' width='1' height='1'/%3E%3C/svg%3E"
          >
            <source src="https://sjjamnou5h3qi4bf.public.blob.vercel-storage.com/10081.mp4" type="video/mp4" />
          </video>
        ) : (
          /* Fallback estático para dispositivos low-end */
          <div 
            className="w-full h-full"
            style={{
              background: "linear-gradient(135deg, #1d3969 0%, #2563eb 50%, #1d3969 100%)",
              opacity: 0.8,
            }}
          />
        )}
        <div 
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            backgroundColor: '#1a1a1a',
            opacity: 0.2,
            mixBlendMode: 'multiply'
          }}
        />
      </div>

      <div ref={contentRef} className="relative z-10 max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance"
          style={{ 
            letterSpacing: "-0.02em",
            background: "linear-gradient(135deg, #ffffff, #e5e7eb)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}
        >
          {t('hero.title')}
        </h1>
        <p
          className="text-xl md:text-2xl mb-8 leading-relaxed text-balance max-w-3xl mx-auto"
          style={{ color: "rgba(255, 255, 255, 0.9)" }}
        >
          {t('hero.subtitle')}
        </p>
        <button
          onClick={() => {
            document.getElementById('steps-section')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="text-white font-bold py-3 px-8 rounded-lg transition-all hover:-translate-y-1"
          style={{
            background: "white",
            color: "var(--saas-primary)",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
          }}
        >
          {t('hero.cta')}
        </button>
      </div>
    </section>
  )
}
