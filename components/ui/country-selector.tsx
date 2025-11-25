"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from "react-i18next"
import { WordRotate } from "./word-rotate"

interface Country {
  code: string
  name: string
  flag: string
  language: string
}

const countries: Country[] = [
  { code: "IT", name: "Italia", flag: "https://flagcdn.com/it.svg", language: "it" },
  { code: "ES", name: "España", flag: "https://flagcdn.com/es.svg", language: "es" },
  { code: "DE", name: "Alemania", flag: "https://flagcdn.com/de.svg", language: "de" },
  { code: "FR", name: "Francia", flag: "https://flagcdn.com/fr.svg", language: "fr" },
  { code: "SE", name: "Suecia", flag: "https://flagcdn.com/se.svg", language: "sv" },
]

const translations = {
  title: [
    "Selecciona tu país",      // Español
    "Seleziona il tuo paese",  // Italiano
    "Wähle dein Land",         // Alemán
    "Sélectionnez votre pays", // Francés
    "Välj ditt land",          // Sueco
  ],
  subtitle: [
    "Elige tu ubicación para personalizar tu experiencia",           // Español
    "Scegli la tua posizione per personalizzare la tua esperienza", // Italiano
    "Wähle deinen Standort, um dein Erlebnis zu personalisieren",  // Alemán
    "Choisissez votre emplacement pour personnaliser votre expérience", // Francés
    "Välj din plats för att anpassa din upplevelse",               // Sueco
  ],
}

export default function CountrySelector({ onSelect }: { onSelect: (language: string) => void }) {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
  const { i18n } = useTranslation()

  const handleSelect = (country: Country) => {
    setSelectedCountry(country.code)
    // Cambiar el idioma de i18n
    i18n.changeLanguage(country.language)
    setTimeout(() => {
      onSelect(country.language)
    }, 500)
  }

  useEffect(() => {
    const scriptUrl = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.35/dist/unicornStudio.umd.js"
    
    // Check if script is already present
    if (document.querySelector(`script[src="${scriptUrl}"]`)) {
      // @ts-ignore
      if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
         // @ts-ignore
         UnicornStudio.init()
         // @ts-ignore
         window.UnicornStudio.isInitialized = true
      }
      return
    }

    const script = document.createElement("script")
    script.src = scriptUrl
    script.async = true
    script.onload = function() {
      // @ts-ignore
      if (!window.UnicornStudio.isInitialized) {
        // @ts-ignore
        UnicornStudio.init()
        // @ts-ignore
        window.UnicornStudio.isInitialized = true
      }
    }
    document.head.appendChild(script)

    return () => {
      // Optional: cleanup if needed, but usually scripts stay
    }
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
        style={{
          background: "black", // Fallback
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Unicorn Studio Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
           <div data-us-project="7KWfZDdazgHxIcuwvQlG"></div>
        </div>
        
        <div className="text-center max-w-5xl px-4 relative z-10">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <WordRotate
              words={translations.title}
              duration={3000}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            />
          </motion.div>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <WordRotate
              words={translations.subtitle}
              duration={3000}
              className="text-lg md:text-xl text-white/80 mb-12"
              motionProps={{
                initial: { opacity: 0, y: -30 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 30 },
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {countries.map((country, index) => (
              <motion.button
                key={country.code}
                onClick={() => handleSelect(country)}
                className="group relative overflow-hidden rounded-2xl p-8 transition-all duration-200"
                style={{
                  background: selectedCountry === country.code 
                    ? "rgba(255, 255, 255, 0.3)" 
                    : "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  border: selectedCountry === country.code
                    ? "2px solid rgba(255, 255, 255, 0.8)"
                    : "2px solid rgba(255, 255, 255, 0.2)",
                }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
              >
                <div className="mb-4 flex items-center justify-center">
                  <img 
                    src={country.flag} 
                    alt={`Bandera de ${country.name}`}
                    className="w-20 h-20 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="text-white font-bold text-lg">{country.name}</div>
                
                {selectedCountry === country.code && (
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
