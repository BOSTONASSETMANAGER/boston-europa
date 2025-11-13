"use client"
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect"

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, var(--saas-primary), var(--saas-accent))",
      }}
    >
      <BackgroundRippleEffect rows={8} cols={27} cellSize={56} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance"
          style={{ letterSpacing: "-0.02em", color: "white" }}
        >
          Empezá a invertir en solo 3 pasos
        </h1>
        <p
          className="text-xl md:text-2xl mb-8 leading-relaxed text-balance"
          style={{ color: "rgba(255, 255, 255, 0.9)" }}
        >
          Con Boston Asset Manager, invertir es más fácil que nunca. Accede a mercados de capitales con asesoramiento
          experto.
        </p>
        <button
          className="text-white font-bold py-3 px-8 rounded-lg transition-all hover:-translate-y-1"
          style={{
            background: "white",
            color: "var(--saas-primary)",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
          }}
        >
          Comenzar Ahora
        </button>
      </div>
    </section>
  )
}
