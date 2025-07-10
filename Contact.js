import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        reset()
        setTimeout(() => {
          setIsSubmitted(false)
        }, 3000)
      } else {
        alert('Erro ao enviar mensagem: ' + result.message)
      }
    } catch (error) {
      console.error('Erro:', error)
      alert('Erro ao enviar mensagem. Tente novamente.')
    }
  }

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Telefone',
      value: '(71) 99999-9999',
      description: 'WhatsApp disponível'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      value: 'contato@reallocacaoeturismo.com.br',
      description: 'Resposta em até 24h'
    },
    {
      icon: MapPinIcon,
      title: 'Endereço',
      value: 'Marina da Bahia, Salvador - BA',
      description: 'Próximo ao centro histórico'
    },
    {
      icon: ClockIcon,
      title: 'Horário de Funcionamento',
      value: 'Segunda a Domingo',
      description: '08:00 às 18:00'
    }
  ]

  const socialMedia = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/reallocacaoeturismo',
      icon: '📸'
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/reallocacaoeturismo',
      icon: '📘'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/5571999999999',
      icon: '💬'
    },
    {
      name: 'Site',
      url: 'https://reallocacaoeturismo.com.br',
      icon: '🌐'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-display text-primary-600 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Entre em Contato
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Estamos aqui para ajudar você a planejar sua aventura perfeita na Bahia
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        {info.title}
                      </h3>
                      <p className="text-gray-700 font-medium mb-1">
                        {info.value}
                      </p>
                      <p className="text-sm text-gray-500">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media */}
            <motion.div 
              className="bg-white rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Siga-nos nas Redes Sociais
              </h3>
              <div className="flex space-x-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center hover:bg-primary-200 transition-colors"
                  >
                    <span className="text-xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div 
              className="bg-white rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Nossa Localização
              </h3>
              <div className="h-64 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center">
                <div className="text-white text-center">
                  <MapPinIcon className="w-16 h-16 mx-auto mb-4 opacity-80" />
                  <p className="text-lg font-semibold">Marina da Bahia</p>
                  <p className="text-sm opacity-90">Salvador - Bahia</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                <ChatBubbleLeftRightIcon className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Envie uma Mensagem
                </h3>
                <p className="text-gray-600">
                  Responderemos em até 24 horas
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    {...register('name', { required: 'Nome é obrigatório' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register('email', { 
                      required: 'Email é obrigatório',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Email inválido'
                      }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Phone and Subject */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    {...register('phone')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="(71) 99999-9999"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto
                  </label>
                  <select
                    {...register('subject', { required: 'Assunto é obrigatório' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="reserva">Reserva de Passeio</option>
                    <option value="orcamento">Orçamento</option>
                    <option value="duvida">Dúvida</option>
                    <option value="sugestao">Sugestão</option>
                    <option value="outro">Outro</option>
                  </select>
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  {...register('message', { required: 'Mensagem é obrigatória' })}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Conte-nos sobre sua solicitação..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>

            {/* Success Message */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="w-6 h-6 text-green-600" />
                  <div>
                    <h4 className="font-semibold text-green-800">
                      Mensagem Enviada!
                    </h4>
                    <p className="text-green-700 text-sm">
                      Entraremos em contato em breve.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display text-primary-600 mb-4">
              Perguntas Frequentes
            </h3>
            <p className="text-gray-600">
              Tire suas dúvidas sobre nossos serviços
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                Qual a idade mínima para os passeios?
              </h4>
              <p className="text-gray-600">
                A idade mínima varia conforme o tipo de passeio. Para jet ski é necessário ter 18 anos ou estar acompanhado de um responsável.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                É necessário fazer reserva com antecedência?
              </h4>
              <p className="text-gray-600">
                Recomendamos reservar com pelo menos 24h de antecedência, especialmente em alta temporada.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                O que está incluído no preço?
              </h4>
              <p className="text-gray-600">
                Todos os passeios incluem equipamentos de segurança, guia experiente e seguro básico.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                E se chover no dia do passeio?
              </h4>
              <p className="text-gray-600">
                Em caso de mau tempo, reagendamos o passeio sem custo adicional ou oferecemos reembolso total.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 