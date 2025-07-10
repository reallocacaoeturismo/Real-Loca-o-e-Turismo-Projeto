import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MapPinIcon, 
  MapIcon, 
  CameraIcon, 
  HeartIcon,
  StarIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

export default function Services() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      id: 0,
      title: 'Passeios de Barco',
      titleEn: 'Boat Tours',
      description: 'Explore as belas praias e ilhas da Bahia com nossos passeios guiados. Experiências únicas e memoráveis.',
      descriptionEn: 'Explore the beautiful beaches and islands of Bahia with our guided tours. Unique and memorable experiences.',
      icon: MapPinIcon,
      features: [
        'Passeios personalizados',
        'Guia experiente',
        'Equipamentos de segurança',
        'Snacks e bebidas incluídos'
      ],
      featuresEn: [
        'Customized tours',
        'Experienced guide',
        'Safety equipment',
        'Snacks and drinks included'
      ]
    },
    {
      id: 1,
      title: 'Aluguel de Embarcações',
      titleEn: 'Vessel Rental',
      description: 'Alugue embarcações para suas próprias aventuras. Lanchas, jet skis e barcos para todos os tipos de passeio.',
      descriptionEn: 'Rent vessels for your own adventures. Speedboats, jet skis and boats for all types of tours.',
      icon: MapIcon,
      features: [
        'Diversos tipos de embarcações',
        'Preços competitivos',
        'Seguro incluído',
        'Suporte 24h'
      ],
      featuresEn: [
        'Various types of vessels',
        'Competitive prices',
        'Insurance included',
        '24h support'
      ]
    },
    {
      id: 2,
      title: 'Fotografia Profissional',
      titleEn: 'Professional Photography',
      description: 'Capture momentos especiais com nossos fotógrafos profissionais. Memórias que durarão para sempre.',
      descriptionEn: 'Capture special moments with our professional photographers. Memories that will last forever.',
      icon: CameraIcon,
      features: [
        'Fotógrafos experientes',
        'Equipamento profissional',
        'Edição incluída',
        'Entrega digital'
      ],
      featuresEn: [
        'Experienced photographers',
        'Professional equipment',
        'Editing included',
        'Digital delivery'
      ]
    },
    {
      id: 3,
      title: 'Eventos Especiais',
      titleEn: 'Special Events',
      description: 'Celebre seus momentos especiais no mar. Casamentos, aniversários e eventos corporativos.',
      descriptionEn: 'Celebrate your special moments at sea. Weddings, birthdays and corporate events.',
      icon: HeartIcon,
      features: [
        'Planejamento completo',
        'Decoração personalizada',
        'Buffet incluso',
        'Coordenador de evento'
      ],
      featuresEn: [
        'Complete planning',
        'Custom decoration',
        'Buffet included',
        'Event coordinator'
      ]
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-display text-primary-600 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Nossos Serviços
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Oferecemos uma ampla gama de serviços para tornar sua experiência na Bahia inesquecível
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                activeService === index 
                  ? 'bg-white shadow-xl scale-105 border-2 border-primary-200' 
                  : 'bg-white/70 shadow-lg hover:shadow-xl hover:scale-102'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onClick={() => setActiveService(index)}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-xl ${
                  activeService === index ? 'bg-primary-100' : 'bg-gray-100'
                }`}>
                  <service.icon className={`w-8 h-8 ${
                    activeService === index ? 'text-primary-600' : 'text-gray-600'
                  }`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  {activeService === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                    >
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <StarIcon className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div 
          className="bg-white rounded-2xl p-8 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-display text-primary-600 text-center mb-8">
            Por que escolher a Real Locação e Turismo?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <StarIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Experiência
              </h4>
              <p className="text-gray-600">
                Mais de 10 anos de experiência no mercado turístico da Bahia
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Segurança
              </h4>
              <p className="text-gray-600">
                Todos os equipamentos certificados e equipe treinada
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Qualidade
              </h4>
              <p className="text-gray-600">
                Compromisso com a excelência em todos os nossos serviços
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 