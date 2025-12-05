"use client"

import { useEffect, useState } from "react"
import { m, AnimatePresence, LazyMotion, domAnimation } from "motion/react"
import { useTranslation } from "react-i18next"
import CountrySelector from "./country-selector"

// Helper para leer cookies
function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null
  return null
}

// Mapeo de dominios a idiomas (debe coincidir con middleware.ts)
const domainToLanguage: Record<string, string> = {
  // Alemania
  'bostonam.de': 'de',
  'www.bostonam.de': 'de',
  'bostonassetmanager.de': 'de',
  'www.bostonassetmanager.de': 'de',
  // España
  'bostonam.es': 'es',
  'www.bostonam.es': 'es',
  'bostonassetmanager.es': 'es',
  'www.bostonassetmanager.es': 'es',
  // Francia
  'bostonam.fr': 'fr',
  'www.bostonam.fr': 'fr',
  'bostonassetmanager.fr': 'fr',
  'www.bostonassetmanager.fr': 'fr',
  // Italia
  'bostonam.it': 'it',
  'www.bostonam.it': 'it',
  'bostonassetmanager.it': 'it',
  'www.bostonassetmanager.it': 'it',
  // Suecia
  'bostonam.se': 'sv',
  'www.bostonam.se': 'sv',
  'bostonassetmanager.se': 'sv',
  'www.bostonassetmanager.se': 'sv',
}

// Detectar idioma por dominio directamente
function getLanguageFromDomain(): string | null {
  if (typeof window === 'undefined') return null
  const hostname = window.location.hostname
  return domainToLanguage[hostname] || null
}

// Función para detectar dispositivo de bajo rendimiento (versión síncrona para uso inmediato)
function isLowEndDevice(): boolean {
  if (typeof window === 'undefined') return false
  const memory = (navigator as any).deviceMemory || 8
  const cores = navigator.hardwareConcurrency || 8
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  return prefersReducedMotion || memory <= 4 || cores <= 4
}

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [showCountrySelector, setShowCountrySelector] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null)
  const [isReady, setIsReady] = useState(false)
  const { i18n } = useTranslation()

  // Ya no precargamos videos - se cargan bajo demanda en WhyChooseSection
  // Solo en dispositivos de alto rendimiento

  useEffect(() => {
    // 1. Detectar idioma por dominio directamente (más confiable que cookies)
    const domainLanguage = getLanguageFromDomain()
    
    // Si el dominio define un idioma específico, usarlo directamente sin mostrar selector
    if (domainLanguage) {
      i18n.changeLanguage(domainLanguage)
      sessionStorage.setItem("selectedLanguage", domainLanguage)
      localStorage.setItem("selectedLanguage", domainLanguage)
      setSelectedLanguage(domainLanguage)
      setIsReady(true)
      setIsLoading(false)
      return
    }
    
    // 2. Verificar cookies del middleware como fallback
    const cookieLanguage = getCookie('domain-language')
    const skipSelector = getCookie('skip-country-selector')
    
    if (cookieLanguage && cookieLanguage !== 'selector' && skipSelector === 'true') {
      i18n.changeLanguage(cookieLanguage)
      sessionStorage.setItem("selectedLanguage", cookieLanguage)
      localStorage.setItem("selectedLanguage", cookieLanguage)
      setSelectedLanguage(cookieLanguage)
      setIsReady(true)
      setIsLoading(false)
      return
    }
    
    // 3. Verificar si ya se seleccionó un idioma en esta sesión
    const sessionLanguage = sessionStorage.getItem("selectedLanguage")
    
    if (sessionLanguage) {
      // Ya se seleccionó en esta sesión, saltar al contenido
      setSelectedLanguage(sessionLanguage)
      setIsReady(true)
      setIsLoading(false)
    } else {
      // Primera carga en dominio .eu o localhost, mostrar preloader y selector
      const timer = setTimeout(() => {
        setIsLoading(false)
        setShowCountrySelector(true)
      }, 800)

      return () => clearTimeout(timer)
    }
  }, [i18n])

  useEffect(() => {
    const handleOpenSelector = () => {
      setShowCountrySelector(true)
      // Reset selectedLanguage to null temporarily to force show if needed, 
      // or just relying on showCountrySelector && !selectedLanguage logic might be tricky 
      // if selectedLanguage is already set. 
      // Let's change the condition in the render to show if showCountrySelector is true, regardless of selectedLanguage?
      // Or better, we just set showCountrySelector to true. 
      // But wait, line 98 says: {showCountrySelector && !selectedLanguage && (
      // So if selectedLanguage IS set, it won't show. 
      // We should probably temporarily clear selectedLanguage or change the render condition.
      // Let's modify the render condition in a separate edit or just unset selectedLanguage here?
      // If we unset selectedLanguage, it might trigger other effects if any.
      // Let's try forcing it by clearing selectedLanguage.
      setSelectedLanguage(null)
    }

    window.addEventListener('open-country-selector', handleOpenSelector)
    return () => window.removeEventListener('open-country-selector', handleOpenSelector)
  }, [])

  const handleCountrySelect = (language: string) => {
    setSelectedLanguage(language)
    // Guardar en sessionStorage para esta sesión
    sessionStorage.setItem("selectedLanguage", language)
    // También guardar en localStorage para futuras referencias si es necesario
    localStorage.setItem("selectedLanguage", language)
    setTimeout(() => {
      setShowCountrySelector(false)
      setIsReady(true)
    }, 500)
  }

  // No mostrar el contenido hasta que esté listo
  if (!isReady && (isLoading || showCountrySelector)) {
    // Bloquear el contenido de fondo
  }

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait">
        {isLoading && (
          <m.div
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, var(--saas-primary), var(--saas-accent))",
            }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="text-center">
              <m.img
                src="/boston blanco.png"
                alt="Boston Asset Manager"
                className="w-48 h-auto mb-8"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
              <m.div
                className="flex gap-2 justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {[0, 1, 2].map((i) => (
                  <m.div
                    key={i}
                    className="w-3 h-3 rounded-full bg-white"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      delay: i * 0.15,
                    }}
                  />
                ))}
              </m.div>
            </div>
          </m.div>
        )}
      </AnimatePresence>

      {showCountrySelector && !selectedLanguage && (
        <CountrySelector onSelect={handleCountrySelect} />
      )}
    </LazyMotion>
  )
}
