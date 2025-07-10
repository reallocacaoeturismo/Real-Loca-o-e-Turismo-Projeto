import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  MapPinIcon, 
  ClockIcon, 
  ShieldCheckIcon,
  StarIcon 
} from '@heroicons/react/24/outline'

export default function About() {
  const router = useRouter()
  const { locale } = router
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const translations = {
    pt: {
      title: 'Sobre a Real Locação e Turismo',
      subtitle: 'Especialistas em experiências únicas na Bahia',
      description: 'Somos uma empresa especializada em turismo náutico, oferecendo experiências inesquecíveis na bela costa da Bahia. Nossa missão é proporcionar momentos únicos através de passeios seguros, confortáveis e memoráveis.',
      features: [
        {
          icon: MapPinIcon,
          title: 'Localização Estratégica',
          description: 'Bahia Marina - ponto de embarque ideal para explorar as melhores praias e ilhas da região.'
        },
        {
          icon: ClockIcon,
          title: 'Atendimento 24h',
          description: 'Suporte completo para nossos clientes, garantindo tranquilidade em qualquer momento.'
        },
        {
          icon: ShieldCheckIcon,
          title: 'Segurança Garantida',
          description: 'Todas as nossas embarcações seguem rigorosos padrões de segurança e manutenção.'
        },
        {
          icon: StarIcon,
          title: 'Experiência Premium',
          description: 'Serviços de qualidade superior com equipe experiente e equipamentos modernos.'
        }
      ],
      stats: [
        { number: '500+', label: 'Clientes Satisfeitos' },
        { number: '50+', label: 'Passeios Realizados' },
        { number: '5', label: 'Anos de Experiência' },
        { number: '100%', label: 'Segurança Garantida' }
      ]
    },
    en: {
      title: 'About Real Locação e Turismo',
      subtitle: 'Specialists in unique experiences in Bahia',
      description: 'We are a company specialized in nautical tourism, offering unforgettable experiences on the beautiful coast of Bahia. Our mission is to provide unique moments through safe, comfortable and memorable tours.',
      features: [
        {
          icon: MapPinIcon,
          title: 'Strategic Location',
          description: 'Bahia Marina - ideal boarding point to explore the best beaches and islands in the region.'
        },
        {
          icon: ClockIcon,
          title: '24h Support',
          description: 'Complete support for our customers, ensuring peace of mind at any time.'
        },
        {
          icon: ShieldCheckIcon,
          title: 'Guaranteed Safety',
          description: 'All our vessels follow rigorous safety and maintenance standards.'
        },
        {
          icon: StarIcon,
          title: 'Premium Experience',
          description: 'Superior quality services with experienced team and modern equipment.'
        }
      ],
      stats: [
        { number: '500+', label: 'Satisfied Customers' },
        { number: '50+', label: 'Tours Completed' },
        { number: '5', label: 'Years of Experience' },
        { number: '100%', label: 'Safety Guaranteed' }
      ]
    }
  }

  const t = translations[locale] || translations.pt

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {t.description}
            </p>

            {/* Features */}
            <div className="space-y-6">
              {t.features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Real Locação e Turismo"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-2 gap-4">
                  {t.stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center"
                    >
                      <div className="text-2xl font-bold text-primary-600 mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-700 font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-500/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-500/20 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 