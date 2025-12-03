"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { useTranslation } from "react-i18next"
import { WordRotate } from "./word-rotate"

interface Country {
  code: string
  names: string[] // Nombres en cada idioma [ES, IT, DE, FR, SV]
  flag: string
  language: string
}

const countries: Country[] = [
  { code: "IT", names: ["Italia", "Italia", "Italien", "Italie", "Italien"], flag: "https://flagcdn.com/it.svg", language: "it" },
  { code: "ES", names: ["España", "Spagna", "Spanien", "Espagne", "Spanien"], flag: "https://flagcdn.com/es.svg", language: "es" },
  { code: "DE", names: ["Alemania", "Germania", "Deutschland", "Allemagne", "Tyskland"], flag: "https://flagcdn.com/de.svg", language: "de" },
  { code: "FR", names: ["Francia", "Francia", "Frankreich", "France", "Frankrike"], flag: "https://flagcdn.com/fr.svg", language: "fr" },
  { code: "SE", names: ["Suecia", "Svezia", "Schweden", "Suède", "Sverige"], flag: "https://flagcdn.com/se.svg", language: "sv" },
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
  const [currentLangIndex, setCurrentLangIndex] = useState(0)
  const { i18n } = useTranslation()

  // Sincronizar el índice de idioma con la rotación del título
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLangIndex((prev) => (prev + 1) % 5)
    }, 3000) // Mismo duration que WordRotate
    return () => clearInterval(interval)
  }, [])

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
    
    // Función para inicializar Unicorn Studio
    const initUnicorn = () => {
      // @ts-ignore
      if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
        // @ts-ignore
        window.UnicornStudio.init()
        // @ts-ignore
        window.UnicornStudio.isInitialized = true
      }
    }

    // Check if script is already present (precargado por GSAPPreloader)
    if (document.querySelector(`script[src="${scriptUrl}"]`)) {
      // @ts-ignore
      if (window.UnicornStudio) {
        initUnicorn()
      } else {
        // Script está cargando, esperar a que termine
        const checkInterval = setInterval(() => {
          // @ts-ignore
          if (window.UnicornStudio) {
            initUnicorn()
            clearInterval(checkInterval)
          }
        }, 50)
        // Limpiar después de 5 segundos
        setTimeout(() => clearInterval(checkInterval), 5000)
      }
      return
    }

    // Fallback: cargar script si no fue precargado
    const script = document.createElement("script")
    script.src = scriptUrl
    script.async = true
    script.onload = initUnicorn
    document.head.appendChild(script)
  }, [])

  // Force remove badge via JS interval
  useEffect(() => {
    const removeBadge = () => {
      const links = document.querySelectorAll('a');
      links.forEach(link => {
        if (
          link.href.includes('unicorn.studio') || 
          link.textContent?.toLowerCase().includes('made with unicorn.studio')
        ) {
          link.style.display = 'none';
          link.style.setProperty('display', 'none', 'important');
          link.style.visibility = 'hidden';
          link.style.opacity = '0';
          link.style.pointerEvents = 'none';
        }
      });
    };

    // Run frequently at start then slower
    removeBadge();
    const fastInterval = setInterval(removeBadge, 100);
    const slowTimeout = setTimeout(() => {
      clearInterval(fastInterval);
      setInterval(removeBadge, 1000);
    }, 5000);

    return () => {
      clearInterval(fastInterval);
      clearTimeout(slowTimeout);
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
           <div 
             data-us-project="7KWfZDdazgHxIcuwvQlG"
             style={{
               transform: 'scale(1.2) translateY(5%)',
             }}
           ></div>
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
                className="group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_0_40px_rgba(29,57,105,0.6)]"
                style={{
                  background: selectedCountry === country.code 
                    ? "rgba(255, 255, 255, 1)" 
                    : "rgba(255, 255, 255, 0.95)",
                  border: selectedCountry === country.code
                    ? "2px solid #1d3969"
                    : "2px solid transparent",
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
                    alt={`Bandera de ${country.names[0]}`}
                    className="w-20 h-20 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={currentLangIndex}
                    className="text-[#1d3969] font-bold text-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {country.names[currentLangIndex]}
                  </motion.div>
                </AnimatePresence>
                
                {selectedCountry === country.code && (
                  <motion.div
                    className="absolute inset-0 bg-[#1d3969]/10"
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
