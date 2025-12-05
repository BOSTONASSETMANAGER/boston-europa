import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import PageLoader from "@/components/ui/page-loader"
import PageTransition from "@/components/ui/page-transition"
import { I18nProvider } from "@/components/providers/i18n-provider"
import { GSAPPreloader } from "@/components/providers/gsap-preloader"
import "./globals.css"

const geistSans = Geist({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
})
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  display: "swap", 
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://bostonam.eu"),
  title: "Boston Asset Manager | Empezá a invertir en solo 3 pasos",
  description: "Con Boston Asset Manager, invertir es más fácil que nunca. Accede a mercados de capitales con asesoramiento experto. Institución autorizada por FINRA y SEC.",
  keywords: [
    "inversiones",
    "mercado de capitales",
    "asesoramiento financiero",
    "Boston Asset Manager",
    "invertir",
    "FINRA",
    "SEC",
    "gestión de activos",
    "finanzas",
    "bolsa de valores"
  ],
  authors: [{ name: "Boston Asset Manager" }],
  creator: "Boston Asset Manager",
  publisher: "Boston Asset Manager",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: ["de_DE", "fr_FR", "it_IT", "sv_SE"],
    url: "https://bostonam.eu",
    siteName: "Boston Asset Manager",
    title: "Boston Asset Manager | Empezá a invertir en solo 3 pasos",
    description: "Con Boston Asset Manager, invertir es más fácil que nunca. Accede a mercados de capitales con asesoramiento experto.",
    images: [
      {
        url: "/BANNER-METADATA.jpg",
        width: 1200,
        height: 630,
        alt: "Boston Asset Manager - Inversiones en Europa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boston Asset Manager | Empezá a invertir en solo 3 pasos",
    description: "Con Boston Asset Manager, invertir es más fácil que nunca. Accede a mercados de capitales con asesoramiento experto.",
    images: [
      {
        url: "/BANNER-METADATA-600x315.jpg",
        width: 600,
        height: 315,
        alt: "Boston Asset Manager - Inversiones en Europa",
      },
    ],
  },
  other: {
    "og:image:width": "1200",
    "og:image:height": "630",
  },
  verification: {
    google: "tu-codigo-de-verificacion-google",
  },
  generator: 'Next.js'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        {/* Preconnect para recursos externos críticos */}
        <link rel="preconnect" href="https://sjjamnou5h3qi4bf.public.blob.vercel-storage.com" />
        <link rel="dns-prefetch" href="https://sjjamnou5h3qi4bf.public.blob.vercel-storage.com" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <I18nProvider>
          <GSAPPreloader />
          <PageLoader />
          <PageTransition>
            {children}
          </PageTransition>
          <Analytics />
          <SpeedInsights />
        </I18nProvider>
      </body>
    </html>
  )
}
