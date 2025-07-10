import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/solid'

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: 'Maria Silva',
      location: 'São Paulo, SP',
      rating: 5,
      text: 'Experiência incrível! O passeio superou todas as expectativas. A equipe é muito profissional e atenciosa. Recomendo para todos que visitam a Bahia.',
      avatar: '/images/testimonials/maria.jpg',
      service: 'Passeio de Barco'
    },
    {
      id: 2,
      name: 'João Santos',
      location: 'Rio de Janeiro, RJ',
      rating: 5,
      text: 'Aluguei um jet ski e foi uma aventura fantástica! Equipamentos em perfeito estado e instrutores muito competentes. Voltarei com certeza!',
      avatar: '/images/testimonials/joao.jpg',
      service: 'Aluguel de Jet Ski'
    },
    {
      id: 3,
      name: 'Ana Costa',
      location: 'Brasília, DF',
      rating: 5,
      text: 'Celebramos nosso aniversário de casamento no catamarã e foi mágico! Decoração linda, comida deliciosa e atendimento impecável.',
      avatar: '/images/testimonials/ana.jpg',
      service: 'Evento Especial'
    },
    {
      id: 4,
      name: 'Carlos Oliveira',
      location: 'Minas Gerais, MG',
      rating: 5,
      text: 'Passeio de pesca esportiva foi sensacional! Pegamos peixes grandes e o guia conhece todos os melhores pontos. Experiência única!',
      avatar: '/images/testimonials/carlos.jpg',
      service: 'Pesca Esportiva'
    },
    {
      id: 5,
      name: 'Fernanda Lima',
      location: 'Paraná, PR',
      rating: 5,
      text: 'Fotografia profissional no nosso passeio ficou perfeita! O fotógrafo capturou momentos especiais que vamos guardar para sempre.',
      avatar: '/images/testimonials/fernanda.jpg',
      service: 'Fotografia Profissional'
    },
    {
      id: 6,
      name: 'Roberto Almeida',
      location: 'Santa Catarina, SC',
      rating: 5,
      text: 'Evento corporativo no mar foi um sucesso! Nossos clientes adoraram a experiência diferente e a equipe cuidou de tudo perfeitamente.',
      avatar: '/images/testimonials/roberto.jpg',
      service: 'Evento Corporativo'
    }
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index)
    setIsAutoPlaying(false)
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-primary-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-display text-primary-600 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            O que nossos clientes dizem
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Descubra por que centenas de clientes escolhem a Real Locação e Turismo
          </motion.p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-xl"
            >
              <div className="text-center">
                {/* Quote Icon */}
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-3xl text-primary-600">💬</div>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <StarIcon key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl font-semibold">
                      {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-semibold text-gray-800">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-gray-600">{testimonials[currentTestimonial].location}</p>
                    <p className="text-sm text-primary-600 font-medium">
                      {testimonials[currentTestimonial].service}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors"
          >
            <ChevronLeftIcon className="w-6 h-6 text-primary-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors"
          >
            <ChevronRightIcon className="w-6 h-6 text-primary-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-primary-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Statistics */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-gray-600">Clientes Satisfeitos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">1000+</div>
            <div className="text-gray-600">Passeios Realizados</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">4.9</div>
            <div className="text-gray-600">Avaliação Média</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">5</div>
            <div className="text-gray-600">Anos de Experiência</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Quer fazer parte dos nossos clientes satisfeitos?
          </h3>
          <p className="text-gray-600 mb-6">
            Agende seu passeio e viva uma experiência inesquecível
          </p>
          <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
            Agendar Agora
          </button>
        </motion.div>
      </div>
    </section>
  )
} 