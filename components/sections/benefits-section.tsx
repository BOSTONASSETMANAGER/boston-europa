"use client"

import { useRef } from "react"
import { useScrollSnap } from "@/hooks/use-scroll-snap"
import { useTranslation } from "react-i18next"
import { AnimatedBeamDemo } from "@/components/ui/animated-beam-demo"

export default function BenefitsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useTranslation()

  // Aplicar scroll snap
  useScrollSnap(sectionRef)
  const benefits = [
    {
      title: "Proteger tus ahorros de la inflación",
      icon: "🛡️",
    },
    {
      title: "Aumentar tu poder adquisitivo y patrimonio",
      icon: "📈",
    },
    {
      title: "Contar con un fondo en caso de gastos imprevistos",
      icon: "💰",
    },
    {
      title: "Generar un legado que dejar a tu familia",
      icon: "👨‍👩‍👧‍👦",
    },
  ]

  return (
    <section 
      ref={sectionRef} 
      className="relative py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden md:min-h-screen flex items-center"
      style={{
        backgroundImage: "url('/bg-3.svg')",
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
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center" style={{ color: "white" }}>
          {t('benefits.title')}
        </h2>
        <p className="text-center mb-16 text-lg" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
          {t('benefits.subtitle')}
        </p>

        <div className="w-full">
          <AnimatedBeamDemo />
        </div>
      </div>
    </section>
  )
}
