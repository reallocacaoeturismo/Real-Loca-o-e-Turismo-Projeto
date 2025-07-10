import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  const router = useRouter()
  const { locale } = router
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [router.asPath])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header 
        isScrolled={isScrolled} 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-xl font-display text-primary-600">
                  {locale === 'en' ? 'Menu' : 'Menu'}
                </h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <XMarkIcon className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <nav className="flex-1 px-6 py-8">
                <ul className="space-y-6">
                  <li>
                    <a
                      href="#home"
                      className="block text-lg font-medium text-gray-900 hover:text-primary-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {locale === 'en' ? 'Home' : 'Início'}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="block text-lg font-medium text-gray-900 hover:text-primary-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {locale === 'en' ? 'About' : 'Sobre'}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="block text-lg font-medium text-gray-900 hover:text-primary-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {locale === 'en' ? 'Services' : 'Serviços'}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#boats"
                      className="block text-lg font-medium text-gray-900 hover:text-primary-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {locale === 'en' ? 'Our Boats' : 'Nossas Embarcações'}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#gallery"
                      className="block text-lg font-medium text-gray-900 hover:text-primary-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {locale === 'en' ? 'Gallery' : 'Galeria'}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#testimonials"
                      className="block text-lg font-medium text-gray-900 hover:text-primary-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {locale === 'en' ? 'Testimonials' : 'Depoimentos'}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#booking"
                      className="block text-lg font-medium text-gray-900 hover:text-primary-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {locale === 'en' ? 'Book Now' : 'Reservar'}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="block text-lg font-medium text-gray-900 hover:text-primary-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {locale === 'en' ? 'Contact' : 'Contato'}
                    </a>
                  </li>
                </ul>
              </nav>

              {/* Mobile Menu Footer */}
              <div className="p-6 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  <a
                    href="tel:+5571999999999"
                    className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="font-medium">+55 71 99999-9999</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="relative">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
} 