"use client"

import { LazyMotion, domAnimation } from "motion/react"
import { ReactNode } from "react"

/**
 * Provider de Motion optimizado que usa domAnimation
 * en lugar del bundle completo de framer-motion.
 * 
 * domAnimation incluye solo las features esenciales:
 * - animate
 * - exit
 * - variants
 * - transition
 * 
 * Esto reduce el bundle size significativamente (~16KB vs ~60KB)
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  )
}
