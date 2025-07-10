import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { Bars3Icon } from '@heroicons/react/24/outline'

export default function Header({ isScrolled, isMobileMenuOpen, setIsMobileMenuOpen }) {
  const router = useRouter()
  const { locale } = router

  const navigation = [
    { name: locale === 'en' ? 'Home' : 'Início', href: '#home' },
    { name: locale === 'en' ? 'About' : 'Sobre', href: '#about' },
    { name: locale === 'en' ? 'Services' : 'Serviços', href: '#services' },
    { name: locale === 'en' ? 'Our Boats' : 'Nossas Embarcações', href: '#boats' },
    { name: locale === 'en' ? 'Gallery' : 'Galeria', href: '#gallery' },
    { name: locale === 'en' ? 'Testimonials' : 'Depoimentos', href: '#testimonials' },
    { name: locale === 'en' ? 'Book Now' : 'Reservar', href: '#booking' },
    { name: locale === 'en' ? 'Contact' : 'Contato', href: '#contact' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center space-x-3"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h1 className={`text-xl font-display font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Real Locação
              </h1>
              <p className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-white/80'
              }`}>
                & Turismo
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden lg:flex items-center space-x-8"
          >
            {navigation.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className={`text-sm font-medium transition-all duration-200 hover:text-primary-600 ${
                  isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white/90 hover:text-white'
                }`}
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden lg:flex items-center space-x-4"
          >
            <a
              href="tel:+5571999999999"
              className={`flex items-center space-x-2 text-sm font-medium transition-colors duration-200 ${
                isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white/90 hover:text-white'
              }`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>+55 71 99999-9999</span>
            </a>
            <button
              onClick={() => scrollToSection('#booking')}
              className="btn-primary text-sm px-6 py-2"
            >
              {locale === 'en' ? 'Book Now' : 'Reservar'}
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-lg transition-colors duration-200 hover:bg-white/10"
          >
            <Bars3Icon className={`w-6 h-6 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`} />
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
} 