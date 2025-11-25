"use client"

import { useTranslation } from "react-i18next"

export default function Footer() {
  const { t } = useTranslation()

  // Cast returnObjects to array of objects safely
  const companyItems = t('footer.companyItems', { returnObjects: true })
  const usefulItems = t('footer.usefulItems', { returnObjects: true })
  const socialItems = t('footer.socialLinks', { returnObjects: true })

  const companyLinks = Array.isArray(companyItems) ? companyItems : []
  const usefulLinks = Array.isArray(usefulItems) ? usefulItems : []
  const socialLinks = Array.isArray(socialItems) ? socialItems : []

  return (
    <footer className="pt-16 pb-8 px-4 sm:px-6 lg:px-8" style={{ background: "white", color: "var(--saas-text)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Boston Asset Manager</h3>
            <p className="text-sm" style={{ color: "var(--saas-muted)" }}>{t('footer.description')}</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">{t('footer.usefulTitle')}</h4>
            <ul className="space-y-2 text-sm" style={{ color: "var(--saas-muted)" }}>
              {usefulLinks.map((item: any, idx: number) => (
                <li key={idx}>
                  <a 
                    href={item.href} 
                    className="hover:opacity-100 transition"
                    onClick={(e) => {
                      if (item.href === '#change-country') {
                        e.preventDefault()
                        window.dispatchEvent(new Event('open-country-selector'))
                      }
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">{t('footer.networksTitle')}</h4>
            <ul className="space-y-2 text-sm" style={{ color: "var(--saas-muted)" }}>
              {socialLinks.map((item: any, idx: number) => (
                <li key={idx}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm" style={{ borderColor: "var(--saas-border)", color: "var(--saas-muted)" }}>
          <p className="mb-2">
            {t('footer.legal')}
          </p>
          <p className="mb-2">{t('footer.address')}</p>
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
