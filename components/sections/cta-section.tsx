"use client"

import { useRef } from "react"
import Link from "next/link"
import { useScrollSnap } from "@/hooks/use-scroll-snap"
import WorldMapDemo from "@/components/ui/world-map-demo"
import { useTranslation } from "react-i18next"

export default function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useTranslation()

  // Aplicar scroll snap
  useScrollSnap(sectionRef)

  return (
    <section 
      ref={sectionRef} 
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center"
      style={{
        backgroundImage: "url('/bg-5.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Capa de gradiente para atenuar el SVG */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(29, 57, 105, 0.95), rgba(29, 57, 105, 0.98))",
          zIndex: 1
        }}
      />
      {/* Mapa de fondo */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 2 }}>
        <WorldMapDemo />
      </div>

      {/* Contenido centrado */}
      <div className="max-w-4xl mx-auto relative text-center" style={{ zIndex: 10 }}>
        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "white" }}>
          {t('cta.title')}
        </h2>
        <p className="text-lg mb-8" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
          {t('cta.subtitle')}
        </p>
        <Link
          href="/contacto"
          className="inline-block text-white font-bold py-3 px-8 rounded-lg transition-all hover:-translate-y-1"
          style={{
            background: "white",
            color: "var(--saas-primary)",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
          }}
        >
          {t('cta.button')}
        </Link>
      </div>
    </section>
  )
}
