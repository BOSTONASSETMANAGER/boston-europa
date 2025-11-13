"use client"

import { WobbleCard } from "@/components/ui/wobble-card"

export default function StepsSection() {
  const steps = [
    {
      number: "1",
      title: "Definimos tu perfil de inversión",
      description: "Respondé un cuestionario simple para entender tus objetivos y tolerancia al riesgo.",
      icon: "📋",
    },
    {
      number: "2",
      title: "Elegimos el mejor broker para vos",
      description: "Accedemos a nuestras alianzas con los brokers más prestigiosos del país.",
      icon: "🏢",
    },
    {
      number: "3",
      title: "Armamos tu cartera de inversión",
      description: "Nuestros expertos diseñan una cartera personalizada para maximizar tus retornos.",
      icon: "📊",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "var(--saas-light)" }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center" style={{ color: "var(--saas-primary)" }}>
          Proceso Simple
        </h2>
        <p className="text-center mb-16 text-lg" style={{ color: "var(--saas-muted)" }}>
          Tres pasos sencillos para comenzar tu viaje financiero
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
          {steps.map((step, index) => (
            <WobbleCard
              key={index}
              containerClassName={`col-span-1 ${
                index === 0 ? "lg:col-span-2 min-h-[300px]" : "min-h-[300px]"
              } bg-gradient-to-br from-indigo-600 to-indigo-800`}
              className="flex flex-col justify-start"
            >
              <div className="max-w-xs">
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg font-bold text-xl mb-4"
                  style={{
                    background: "linear-gradient(135deg, var(--saas-primary), var(--saas-accent))",
                    color: "white",
                  }}
                >
                  {step.number}
                </div>
                <div className="text-5xl mb-4">{step.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-white" style={{ color: "white" }}>
                  {step.title}
                </h3>
                <p className="text-base text-neutral-200">{step.description}</p>
              </div>
            </WobbleCard>
          ))}
        </div>
      </div>
    </section>
  )
}
