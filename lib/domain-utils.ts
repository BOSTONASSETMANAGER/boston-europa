/**
 * Utilidades para manejo de dominios
 */

// Mapeo de idioma a dominio principal
const languageToDomain: Record<string, string> = {
  de: 'bostonam.de',
  es: 'bostonam.es',
  fr: 'bostonam.fr',
  it: 'bostonam.it',
  sv: 'bostonam.se',
}

/**
 * Obtiene el dominio correspondiente a un idioma
 */
export function getDomainForLanguage(language: string): string | undefined {
  return languageToDomain[language]
}

/**
 * Redirige al dominio correspondiente al idioma seleccionado
 * Útil cuando el usuario selecciona un país desde el selector
 * 
 * @param language - Código de idioma (de, es, fr, it, sv)
 * @param useRedirect - Si true, redirige al dominio. Si false, solo cambia el idioma localmente
 */
export function redirectToDomain(language: string, useRedirect: boolean = false): void {
  if (!useRedirect) return
  
  const domain = languageToDomain[language]
  if (domain && typeof window !== 'undefined') {
    // Preservar el path actual
    const currentPath = window.location.pathname
    const newUrl = `https://${domain}${currentPath}`
    window.location.href = newUrl
  }
}

/**
 * Verifica si estamos en un dominio de país específico
 */
export function isCountryDomain(): boolean {
  if (typeof window === 'undefined') return false
  const hostname = window.location.hostname
  
  // Lista de todos los dominios de país (con y sin www)
  const countryDomains = [
    'bostonam.de', 'www.bostonam.de', 'bostonassetmanager.de', 'www.bostonassetmanager.de',
    'bostonam.es', 'www.bostonam.es', 'bostonassetmanager.es', 'www.bostonassetmanager.es',
    'bostonam.fr', 'www.bostonam.fr', 'bostonassetmanager.fr', 'www.bostonassetmanager.fr',
    'bostonam.it', 'www.bostonam.it', 'bostonassetmanager.it', 'www.bostonassetmanager.it',
    'bostonam.se', 'www.bostonam.se', 'bostonassetmanager.se', 'www.bostonassetmanager.se',
  ]
  
  return countryDomains.includes(hostname)
}

/**
 * Verifica si estamos en el dominio base (selector)
 */
export function isSelectorDomain(): boolean {
  if (typeof window === 'undefined') return false
  const hostname = window.location.hostname
  return ['bostonam.eu', 'bostonassetmanager.eu', 'localhost'].includes(hostname)
}

/**
 * Obtiene el idioma actual basado en el dominio
 */
export function getLanguageFromDomain(): string | null {
  if (typeof window === 'undefined') return null
  const hostname = window.location.hostname
  
  const domainToLanguage: Record<string, string> = {
    'bostonam.de': 'de',
    'bostonam.es': 'es',
    'bostonam.fr': 'fr',
    'bostonam.it': 'it',
    'bostonam.se': 'sv',
    'bostonassetmanager.de': 'de',
    'bostonassetmanager.es': 'es',
    'bostonassetmanager.fr': 'fr',
    'bostonassetmanager.it': 'it',
    'bostonassetmanager.se': 'sv',
  }
  
  return domainToLanguage[hostname] || null
}
