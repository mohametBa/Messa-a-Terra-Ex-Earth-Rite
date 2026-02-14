import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Header } from '@/components/Header';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['500'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0A2E4F',
};

export const metadata: Metadata = {
  title: {
    default: 'Earth-Rite RTR | Sistema ATEX Premium per Sicurezza Industriale',
    template: '%s | Earth-Rite RTR',
  },
  description:
    'Sistema di messa a terra intelligente per ambienti ATEX. Protezione certificata con monitoraggio real-time, conformità garantita e installazione semplice. Richiedi consulenza gratuita.',
  keywords: [
    'ATEX',
    'messa a terra',
    'sicurezza industriale',
    'earth-rite',
    'protezione esplosioni',
    'sistema ATEX',
    'equipaggiamento sicurezza',
    'monitoraggio real-time',
    'certificazione ATEX',
    'industria petrolchimica',
  ],
  authors: [{ name: 'Earth-Rite' }],
  creator: 'Earth-Rite',
  publisher: 'Earth-Rite',
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
    type: 'website',
    locale: 'it_IT',
    url: 'https://earth-rite-rtr.it',
    siteName: 'Earth-Rite RTR',
    title: 'Earth-Rite RTR | Sistema ATEX Premium per Sicurezza Industriale',
    description:
      'Sistema di messa a terra intelligente per ambienti ATEX. Protezione certificata con monitoraggio real-time.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Earth-Rite RTR - Sistema ATEX Premium',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Earth-Rite RTR | Sistema ATEX Premium',
    description:
      'Sistema di messa a terra intelligente per ambienti ATEX. Protezione certificata.',
    images: ['/og-image.jpg'],
    creator: '@earthrite',
  },
  facebook: {
    appId: '123456789',
  },
  alternates: {
    canonical: 'https://earth-rite-rtr.it',
    languages: {
      it: 'https://earth-rite-rtr.it',
      en: 'https://earth-rite-rtr.com',
    },
  },
  category: 'Industrial Safety Equipment',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0A2E4F" />
        
        {/* JSON-LD Structured Data for Product */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: 'Earth-Rite RTR',
              description:
                'Sistema di messa a terra intelligente per ambienti ATEX con monitoraggio real-time e conformità certificata.',
              brand: {
                '@type': 'Brand',
                name: 'Earth-Rite',
              },
              category: 'Industrial Safety Equipment',
              offers: {
                '@type': 'Offer',
                availability: 'https://schema.org/InStock',
                priceCurrency: 'EUR',
                itemCondition: 'https://schema.org/NewCondition',
              },
              additionalProperty: [
                {
                  '@type': 'PropertyValue',
                  name: 'ATEX Certification',
                  value: 'Certified for Zones 1, 2, 21, 22',
                },
                {
                  '@type': 'PropertyValue',
                  name: 'Monitoring',
                  value: 'Real-time resistance monitoring',
                },
              ],
            }),
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Earth-Rite',
              url: 'https://earth-rite-rtr.it',
              logo: '/logo.svg',
              description:
                'Leader nella sicurezza industriale per ambienti ATEX con sistemi di messa a terra certificati.',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'IT',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+39-800-XXXXXX',
                contactType: 'customer service',
                availableLanguage: ['Italian', 'English'],
              },
              sameAs: [
                'https://linkedin.com/company/earth-rite',
                'https://twitter.com/earthrite',
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-white text-ate-neutral-700 pt-16 lg:pt-20`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-ate-primary-600 focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-ate-accent-500"
        >
          Vai al contenuto principale
        </a>
        <Header />
        {children}
      </body>
    </html>
  );
}
