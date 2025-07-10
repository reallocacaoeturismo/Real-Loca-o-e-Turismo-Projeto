import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Boats from '../components/Boats'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import Booking from '../components/Booking'
import Contact from '../components/Contact'
import WhatsAppButton from '../components/WhatsAppButton'
import LanguageSwitcher from '../components/LanguageSwitcher'

export default function Home() {
  const router = useRouter()
  const { locale } = router
  const [isLoading, setIsLoading] = useState(true)

  // Intersection observers for animations
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [boatsRef, boatsInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [galleryRef, galleryInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [bookingRef, bookingInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [contactRef, contactInView] = useInView({ threshold: 0.1, triggerOnce: true })

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Translations
  const translations = {
    pt: {
      title: 'Real Locação e Turismo - Experiências Únicas na Bahia',
      description: 'Descubra experiências únicas de locação e turismo na Bahia. Passeios de barco, aluguel de embarcações e aventuras inesquecíveis.',
      keywords: 'locação turismo, passeios barco, aluguel embarcações, bahia turismo, marina, passeios náuticos',
    },
    en: {
      title: 'Real Locação e Turismo - Unique Experiences in Bahia',
      description: 'Discover unique rental and tourism experiences in Bahia. Boat tours, vessel rentals and unforgettable adventures.',
      keywords: 'tourism rental, boat tours, vessel rental, bahia tourism, marina, nautical tours',
    }
  }

  const t = translations[locale] || translations.pt

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="text-center">
          <div className="spinner mx-auto mb-4"></div>
          <h2 className="text-2xl font-display text-primary-600">
            {locale === 'en' ? 'Loading...' : 'Carregando...'}
          </h2>
        </div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>{t.title}</title>
        <meta name="description" content={t.description} />
        <meta name="keywords" content={t.keywords} />
        <meta property="og:title" content={t.title} />
        <meta property="og:description" content={t.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://reallocacaoeturismo.com.br" />
        <meta property="og:image" content="https://reallocacaoeturismo.com.br/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.title} />
        <meta name="twitter:description" content={t.description} />
        <meta name="twitter:image" content="https://reallocacaoeturismo.com.br/images/og-image.jpg" />
        <link rel="canonical" href="https://reallocacaoeturismo.com.br" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
      </Head>

      <Layout>
        {/* Language Switcher */}
        <div className="fixed top-4 right-4 z-50">
          <LanguageSwitcher />
        </div>

        {/* Hero Section */}
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Hero />
        </motion.div>

        {/* About Section */}
        <motion.div
          ref={aboutRef}
          initial={{ opacity: 0, y: 20 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <About />
        </motion.div>

        {/* Services Section */}
        <motion.div
          ref={servicesRef}
          initial={{ opacity: 0, y: 20 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Services />
        </motion.div>

        {/* Boats Section */}
        <motion.div
          ref={boatsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={boatsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Boats />
        </motion.div>

        {/* Gallery Section */}
        <motion.div
          ref={galleryRef}
          initial={{ opacity: 0, y: 20 }}
          animate={galleryInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Gallery />
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          ref={testimonialsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Testimonials />
        </motion.div>

        {/* Booking Section */}
        <motion.div
          ref={bookingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={bookingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Booking />
        </motion.div>

        {/* Contact Section */}
        <motion.div
          ref={contactRef}
          initial={{ opacity: 0, y: 20 }}
          animate={contactInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Contact />
        </motion.div>

        {/* WhatsApp Button */}
        <WhatsAppButton />
      </Layout>
    </>
  )
} 