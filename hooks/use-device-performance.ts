"use client"

import { useState, useEffect } from "react"

interface DevicePerformance {
  isLowEnd: boolean
  prefersReducedMotion: boolean
  deviceMemory: number
  hardwareConcurrency: number
}

/**
 * Hook para detectar dispositivos de bajo rendimiento
 * y preferencias de movimiento reducido del usuario.
 * 
 * Criterios para dispositivo de bajo rendimiento:
 * - Memoria del dispositivo <= 4GB
 * - Núcleos de CPU <= 4
 * - Usuario prefiere movimiento reducido
 */
export function useDevicePerformance(): DevicePerformance {
  const [performance, setPerformance] = useState<DevicePerformance>({
    isLowEnd: false,
    prefersReducedMotion: false,
    deviceMemory: 8,
    hardwareConcurrency: 8,
  })

  useEffect(() => {
    // Detectar preferencia de movimiento reducido
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const prefersReducedMotion = mediaQuery.matches

    // Detectar capacidades del dispositivo
    const deviceMemory = (navigator as any).deviceMemory || 8
    const hardwareConcurrency = navigator.hardwareConcurrency || 8

    // Determinar si es un dispositivo de bajo rendimiento
    const isLowEnd = 
      prefersReducedMotion || 
      deviceMemory <= 4 || 
      hardwareConcurrency <= 4

    setPerformance({
      isLowEnd,
      prefersReducedMotion,
      deviceMemory,
      hardwareConcurrency,
    })

    // Escuchar cambios en preferencia de movimiento reducido
    const handleChange = (e: MediaQueryListEvent) => {
      setPerformance(prev => ({
        ...prev,
        prefersReducedMotion: e.matches,
        isLowEnd: e.matches || prev.deviceMemory <= 4 || prev.hardwareConcurrency <= 4,
      }))
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  return performance
}

/**
 * Hook simplificado que solo retorna si es low-end
 */
export function useIsLowEndDevice(): boolean {
  const { isLowEnd } = useDevicePerformance()
  return isLowEnd
}
