import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from 'react-query'
import { DefaultSeo } from 'next-seo'

import '../styles/globals.css'

// SEO Configuration
const SEO_CONFIG = {
  titleTemplate: '%s | Real Locação e Turismo',
  defaultTitle: 'Real Locação e Turismo - Experiências Únicas na Bahia',
  description: 'Descubra experiências únicas de locação e turismo na Bahia. Passeios de barco, aluguel de embarcações e aventuras inesquecíveis.',
  canonical: 'https://reallocacaoeturismo.com.br',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://reallocacaoeturismo.com.br',
    site_name: 'Real Locação e Turismo',
    images: [
      {
        url: 'https://reallocacaoeturismo.com.br/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Real Locação e Turismo',
      },
    ],
  },
  twitter: {
    handle: '@reallocacaoeturismo',
    site: '@reallocacaoeturismo',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#0ea5e9',
    },
    {
      name: 'msapplication-TileColor',
      content: '#0ea5e9',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
}

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
})

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  // Google Analytics
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
          page_path: url,
        })
      }
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  // WhatsApp visibility based on time
  useEffect(() => {
    const checkWhatsAppVisibility = () => {
      const now = new Date()
      const hour = now.getHours()
      const whatsappButton = document.getElementById('whatsapp-button')
      
      if (whatsappButton) {
        if (hour >= 8 && hour < 22) {
          whatsappButton.style.display = 'block'
        } else {
          whatsappButton.style.display = 'none'
        }
      }
    }

    checkWhatsAppVisibility()
    const interval = setInterval(checkWhatsAppVisibility, 60000) // Check every minute

    return () => clearInterval(interval)
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
          }}
        />
        
        {/* Google Maps */}
        <script
          async
          defer
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
        />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" />
      </Head>

      <DefaultSeo {...SEO_CONFIG} />

      <Component {...pageProps} />

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            duration: 5000,
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
    </QueryClientProvider>
  )
}

export default MyApp 