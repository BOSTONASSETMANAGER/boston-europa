"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useScrollSnap } from "@/hooks/use-scroll-snap"
import { useTranslation } from "react-i18next"

gsap.registerPlugin(ScrollTrigger)

export default function StepsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useTranslation()

  // Aplicar scroll snap
  useScrollSnap(sectionRef)

  useEffect(() => {
    if (!sectionRef.current) return

    const section = sectionRef.current

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section,
        {
          scale: 0.85,
        },
        {
          scale: 1,
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "top top",
            scrub: 1,
          },
        }
      )
    })

    return () => ctx.revert()
  }, [])

  const steps = [
    {
      number: "1",
      title: t('steps.1.title'),
      description: t('steps.1.description'),
      placeholder: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=500&fit=crop",
    },
    {
      number: "2",
      title: t('steps.2.title'),
      description: t('steps.2.description'),
      placeholder: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=500&fit=crop",
    },
    {
      number: "3",
      title: t('steps.3.title'),
      description: t('steps.3.description'),
      placeholder: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=500&fit=crop",
    },
  ]

  return (
    <section
      id="steps-section"
      ref={sectionRef}
      className="sticky top-0 z-10 bg-white -mt-[3rem] rounded-t-[3rem] min-h-screen flex items-center justify-center overflow-hidden py-20"
      style={{ 
        background: "var(--saas-light)", 
        backgroundImage: "url('/bg-1.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transformOrigin: "center center",
      }}
    >
      {/* Capa de gradiente para atenuar el SVG */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.9))",
          zIndex: 1
        }}
      />
      
      <div className="w-full max-w-6xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center" style={{ color: "var(--saas-primary)" }}>
          {t('steps.title')}
        </h2>
        <p className="text-center mb-12 text-lg max-w-2xl mx-auto" style={{ color: "var(--saas-muted)" }}>
          {t('steps.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl aspect-[3/4] transition-all hover:shadow-2xl hover:-translate-y-2"
              style={{
                background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))`,
              }}
            >
              {/* Placeholder de imagen */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url('${step.placeholder}')`,
                }}
              />
              
              {/* Overlay con gradiente */}
              <div 
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(29, 57, 105, 0.9) 0%, rgba(29, 57, 105, 0.3) 50%, transparent 100%)",
                }}
              />
              
              {/* Contenido */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div 
                  className="text-sm font-bold mb-2 inline-block px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {t('steps.step')} {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  {step.title}
                </h3>
                <p className="text-sm opacity-90">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
