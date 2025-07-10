import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  GlobeAltIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

export default function Footer() {
  const router = useRouter()
  const { locale } = router

  const translations = {
    pt: {
      company: {
        description: 'Especialistas em experiências únicas de turismo na Bahia. Oferecemos os melhores passeios náuticos e locação de embarcações da região.',
        address: 'Bahia Marina, Salvador - BA',
        phone: '+55 71 99999-9999',
        email: 'contato@reallocacaoeturismo.com.br'
      },
      sections: {
        company: 'Empresa',
        services: 'Serviços',
        support: 'Suporte',
        legal: 'Legal'
      },
      links: {
        about: 'Sobre Nós',
        boats: 'Nossas Embarcações',
        gallery: 'Galeria',
        testimonials: 'Depoimentos',
        booking: 'Reservas',
        contact: 'Contato',
        faq: 'Perguntas Frequentes',
        privacy: 'Política de Privacidade',
        terms: 'Termos de Uso',
        refund: 'Política de Reembolso'
      },
      newsletter: {
        title: 'Fique por dentro das novidades',
        subtitle: 'Receba ofertas exclusivas e novidades sobre nossos passeios',
        placeholder: 'Seu melhor e-mail',
        button: 'Inscrever-se'
      },
      copyright: '© 2024 Real Locação e Turismo. Todos os direitos reservados.',
      madeWith: 'Feito com'
    },
    en: {
      company: {
        description: 'Specialists in unique tourism experiences in Bahia. We offer the best nautical tours and vessel rentals in the region.',
        address: 'Bahia Marina, Salvador - BA',
        phone: '+55 71 99999-9999',
        email: 'contact@reallocacaoeturismo.com.br'
      },
      sections: {
        company: 'Company',
        services: 'Services',
        support: 'Support',
        legal: 'Legal'
      },
      links: {
        about: 'About Us',
        boats: 'Our Boats',
        gallery: 'Gallery',
        testimonials: 'Testimonials',
        booking: 'Bookings',
        contact: 'Contact',
        faq: 'FAQ',
        privacy: 'Privacy Policy',
        terms: 'Terms of Use',
        refund: 'Refund Policy'
      },
      newsletter: {
        title: 'Stay updated with our news',
        subtitle: 'Receive exclusive offers and news about our tours',
        placeholder: 'Your best email',
        button: 'Subscribe'
      },
      copyright: '© 2024 Real Locação e Turismo. All rights reserved.',
      madeWith: 'Made with'
    }
  }

  const t = translations[locale] || translations.pt

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
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold">Real Locação</h3>
                    <p className="text-sm text-gray-400">& Turismo</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {t.company.description}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPinIcon className="w-5 h-5 text-primary-400" />
                    <span className="text-sm">{t.company.address}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <PhoneIcon className="w-5 h-5 text-primary-400" />
                    <a href={`tel:${t.company.phone}`} className="text-sm hover:text-primary-400 transition-colors">
                      {t.company.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <EnvelopeIcon className="w-5 h-5 text-primary-400" />
                    <a href={`mailto:${t.company.email}`} className="text-sm hover:text-primary-400 transition-colors">
                      {t.company.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-6">{t.sections.company}</h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#about"
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection('#about')
                      }}
                      className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                    >
                      {t.links.about}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#boats"
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection('#boats')
                      }}
                      className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                    >
                      {t.links.boats}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#gallery"
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection('#gallery')
                      }}
                      className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                    >
                      {t.links.gallery}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#testimonials"
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection('#testimonials')
                      }}
                      className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                    >
                      {t.links.testimonials}
                    </a>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Services */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-6">{t.sections.services}</h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#booking"
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection('#booking')
                      }}
                      className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                    >
                      {t.links.booking}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection('#contact')
                      }}
                      className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                    >
                      {t.links.contact}
                    </a>
                  </li>
                  <li>
                    <a href="/faq" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">
                      {t.links.faq}
                    </a>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Newsletter */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-6">{t.newsletter.title}</h4>
                <p className="text-gray-300 text-sm mb-4">
                  {t.newsletter.subtitle}
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder={t.newsletter.placeholder}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="w-full btn-primary text-sm"
                  >
                    {t.newsletter.button}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              {t.copyright}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-gray-400 text-sm"
            >
              <span>{t.madeWith}</span>
              <HeartIcon className="w-4 h-4 text-red-500" />
              <span>em Salvador, Bahia</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
} 