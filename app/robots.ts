import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/cropped-*',
          '/*-png',
          '/*-jpg',
          '/*-jpeg',
          '/bostonamlogo*',
          '/enlace-*',
          '/optionsschein',
          '/anlegerprofil',
          '/lentreprise',
          '/regulations',
        ],
      },
    ],
    sitemap: [
      'https://bostonam.eu/sitemap.xml',
      'https://bostonam.es/sitemap.xml',
      'https://bostonam.de/sitemap.xml',
      'https://bostonam.fr/sitemap.xml',
      'https://bostonam.it/sitemap.xml',
      'https://bostonam.se/sitemap.xml',
    ],
  }
}
