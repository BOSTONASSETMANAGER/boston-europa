"use client"

import { useRef, useCallback, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useScrollSnap } from "@/hooks/use-scroll-snap"
import { useDevicePerformance } from "@/hooks/use-device-performance"

// Videos locales optimizados
const VIDEO_SOURCES = [
  "/expertos.mp4",      // Bento 0: "Equipo de Expertos"
  "/mercados.mp4",      // Bento 1: "Experiencia en Mercados"
  "/asesoramiento.mp4", // Bento 2: "Asesoramiento Integral"
  "/alianzas.mp4",      // Bento 3: "Alianzas Estratégicas"
  "/regulacion.mp4",    // Bento 4: "Regulación FINRA y SEC"
  "/rendimiento.mp4",   // Bento 5: "Alto Rendimiento"
]

export default function WhyChooseSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const [videosReady, setVideosReady] = useState<boolean[]>(Array(6).fill(false))
  const { t } = useTranslation()
  const { isLowEnd } = useDevicePerformance()

  // Aplicar scroll snap
  useScrollSnap(sectionRef)

  // Precargar videos solo en dispositivos de alto rendimiento
  useEffect(() => {
    // En dispositivos de bajo rendimiento, no cargar videos
    if (isLowEnd) return

    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Precargar todos los videos
          videoRefs.current.forEach((video, index) => {
            if (video) {
              video.load()
              // Marcar como listo cuando tenga datos suficientes
              video.addEventListener('loadeddata', () => {
                setVideosReady(prev => {
                  const newState = [...prev]
                  newState[index] = true
                  return newState
                })
              }, { once: true })
            }
          })
          observer.disconnect()
        }
      },
      { rootMargin: "300px" } // Empezar a cargar 300px antes de que sea visible
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [isLowEnd])

  const handleMouseEnter = useCallback((index: number) => {
    if (isLowEnd) return // No reproducir videos en dispositivos de bajo rendimiento
    const video = videoRefs.current[index]
    if (video) {
      video.play().catch(() => {})
    }
  }, [isLowEnd])

  const handleMouseLeave = useCallback((index: number) => {
    if (isLowEnd) return
    const video = videoRefs.current[index]
    if (video) {
      video.pause()
      video.currentTime = 0
    }
  }, [isLowEnd])
  const features = [
    {
      title: t('whyChoose.feature1.title'),
      description: t('whyChoose.feature1.description'),
      iconType: "users",
      gradient: "linear-gradient(135deg, rgba(29, 57, 105, 0.1), rgba(37, 99, 235, 0.15))",
      span: "md:col-span-1 md:row-span-2"
    },
    {
      title: t('whyChoose.feature2.title'),
      description: t('whyChoose.feature2.description'),
      iconType: "chart",
      gradient: "linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(29, 57, 105, 0.15))",
      span: "md:col-span-2 md:row-span-1"
    },
    {
      title: t('whyChoose.feature3.title'),
      description: t('whyChoose.feature3.description'),
      iconType: "target",
      gradient: "linear-gradient(135deg, rgba(5, 150, 105, 0.1), rgba(37, 99, 235, 0.12))",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      title: t('whyChoose.feature4.title'),
      description: t('whyChoose.feature4.description'),
      iconType: "handshake",
      gradient: "linear-gradient(135deg, rgba(29, 57, 105, 0.12), rgba(5, 150, 105, 0.1))",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      title: t('whyChoose.feature5.title'),
      description: t('whyChoose.feature5.description'),
      iconType: "shield",
      gradient: "linear-gradient(135deg, rgba(37, 99, 235, 0.12), rgba(29, 57, 105, 0.1))",
      span: "md:col-span-2 md:row-span-1"
    },
    {
      title: t('whyChoose.feature6.title'),
      description: t('whyChoose.feature6.description'),
      iconType: "trending",
      gradient: "linear-gradient(135deg, rgba(5, 150, 105, 0.12), rgba(37, 99, 235, 0.1))",
      span: "md:col-span-1 md:row-span-1"
    },
  ]

  const renderIcon = (iconType: string) => {
    const iconProps = {
      width: "48",
      height: "48",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "white",
      strokeWidth: "2",
      strokeLinecap: "round" as const,
      strokeLinejoin: "round" as const,
    }

    switch (iconType) {
      case "users":
        return (
          <svg {...iconProps}>
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        )
      case "chart":
        return (
          <svg {...iconProps}>
            <line x1="12" y1="20" x2="12" y2="10" />
            <line x1="18" y1="20" x2="18" y2="4" />
            <line x1="6" y1="20" x2="6" y2="16" />
          </svg>
        )
      case "target":
        return (
          <svg {...iconProps}>
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
          </svg>
        )
      case "handshake":
        return (
          <svg {...iconProps}>
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        )
      case "shield":
        return (
          <svg {...iconProps}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        )
      case "trending":
        return (
          <svg {...iconProps}>
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="17 6 23 6 23 12" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <section 
      ref={sectionRef} 
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center" 
      style={{ 
        background: "var(--saas-light)",
        backgroundImage: "url('/bg-2.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
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
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center" style={{ color: "var(--saas-primary)" }}>
          {t('whyChoose.title')}
        </h2>
        <p className="text-center mb-16 text-lg" style={{ color: "var(--saas-muted)" }}>
          {t('whyChoose.subtitle')}
        </p>

        <div className="grid md:grid-cols-3 md:grid-rows-3 gap-4 auto-rows-fr">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.span} group relative overflow-hidden rounded-3xl transition-all hover:shadow-2xl hover:-translate-y-2`}
              style={{
                background: feature.gradient,
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow: "0 8px 32px 0 rgba(29, 57, 105, 0.1)",
                minHeight: "200px"
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* Video de fondo - solo en dispositivos de alto rendimiento */}
              {!isLowEnd && (
                <video
                  ref={(el) => { videoRefs.current[index] = el }}
                  loop
                  muted
                  playsInline
                  preload="none"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${videosReady[index] ? 'opacity-100' : 'opacity-0'}`}
                >
                  <source src={VIDEO_SOURCES[index]} type="video/mp4" />
                </video>
              )}
              
              {/* Placeholder gradient - siempre visible en low-end, transición en high-end */}
              <div 
                className={`absolute inset-0 transition-opacity duration-500 ${!isLowEnd && videosReady[index] ? 'opacity-0' : 'opacity-100'}`}
                style={{
                  background: "linear-gradient(135deg, #1d3969 0%, #2563eb 100%)",
                }}
              />
              
              {/* Overlay con gradiente sutil para todas las tarjetas */}
              <div 
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(29, 57, 105, 0.7) 0%, rgba(29, 57, 105, 0.15) 50%, rgba(29, 57, 105, 0.05) 100%)",
                }}
              />
              
              {/* Contenido */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-white opacity-90">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
