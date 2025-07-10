import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { 
  CalendarIcon,
  ClockIcon,
  UserGroupIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

export default function Booking() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [guests, setGuests] = useState(1)

  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const services = [
    { id: 'boat-tour', name: 'Passeio de Barco', price: 'R$ 800' },
    { id: 'jet-ski', name: 'Aluguel de Jet Ski', price: 'R$ 200' },
    { id: 'fishing', name: 'Pesca Esportiva', price: 'R$ 600' },
    { id: 'catamaran', name: 'Catamarã Luxo', price: 'R$ 1.500' },
    { id: 'photography', name: 'Fotografia Profissional', price: 'R$ 300' },
    { id: 'event', name: 'Evento Especial', price: 'Sob consulta' }
  ]

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00', 
    '13:00', '14:00', '15:00', '16:00', '17:00'
  ]

  const onSubmit = async (data) => {
    try {
      const formData = {
        ...data,
        selectedService,
        selectedDate,
        selectedTime,
        guests
      }

      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        reset()
        setSelectedService('')
        setSelectedDate('')
        setSelectedTime('')
        setGuests(1)
        setTimeout(() => {
          setIsSubmitted(false)
        }, 3000)
      } else {
        alert('Erro ao enviar reserva: ' + result.message)
      }
    } catch (error) {
      console.error('Erro:', error)
      alert('Erro ao enviar reserva. Tente novamente.')
    }
  }

  const calculateTotal = () => {
    const service = services.find(s => s.id === selectedService)
    if (!service || service.price === 'Sob consulta') return 'Sob consulta'
    
    const basePrice = parseInt(service.price.replace('R$ ', ''))
    return `R$ ${(basePrice * guests).toLocaleString('pt-BR')}`
  }

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-display text-primary-600 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Faça sua Reserva
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Agende seu passeio e garanta sua vaga para uma experiência inesquecível
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Informações da Reserva
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Service Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Escolha o Serviço
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => setSelectedService(service.id)}
                      className={`p-4 rounded-lg border-2 text-left transition-all duration-300 ${
                        selectedService === service.id
                          ? 'border-primary-500 bg-primary-50 text-primary-700'
                          : 'border-gray-200 hover:border-primary-300'
                      }`}
                    >
                      <div className="font-medium">{service.name}</div>
                      <div className="text-sm text-gray-600">{service.price}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Data
                  </label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Horário
                  </label>
                  <div className="relative">
                    <ClockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    >
                      <option value="">Selecione um horário</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Number of Guests */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Número de Pessoas
                </label>
                <div className="relative">
                  <UserGroupIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    {[...Array(20)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} {i === 0 ? 'pessoa' : 'pessoas'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Personal Information */}
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
                    Telefone
                  </label>
                  <div className="relative">
                    <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      {...register('phone', { required: 'Telefone é obrigatório' })}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    {...register('email', { 
                      required: 'Email é obrigatório',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Email inválido'
                      }
                    })}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Observações
                </label>
                <textarea
                  {...register('notes')}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Alguma observação especial ou solicitação..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Confirmar Reserva
              </button>
            </form>
          </motion.div>

          {/* Booking Summary */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Summary Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Resumo da Reserva
              </h3>

              {selectedService ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Serviço:</span>
                    <span className="font-semibold">
                      {services.find(s => s.id === selectedService)?.name}
                    </span>
                  </div>
                  
                  {selectedDate && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Data:</span>
                      <span className="font-semibold">
                        {new Date(selectedDate).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                  )}
                  
                  {selectedTime && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Horário:</span>
                      <span className="font-semibold">{selectedTime}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Pessoas:</span>
                    <span className="font-semibold">{guests}</span>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center text-lg">
                      <span className="font-semibold">Total:</span>
                      <span className="font-bold text-primary-600">
                        {calculateTotal()}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">
                  Selecione um serviço para ver o resumo
                </p>
              )}
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="w-6 h-6 text-primary-600" />
                  <div>
                    <div className="font-semibold">Telefone</div>
                    <div className="text-gray-600">(71) 99999-9999</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="w-6 h-6 text-primary-600" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-600">contato@reallocacaoeturismo.com.br</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPinIcon className="w-6 h-6 text-primary-600" />
                  <div>
                    <div className="font-semibold">Localização</div>
                    <div className="text-gray-600">Marina da Bahia, Salvador - BA</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Message */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-green-50 border border-green-200 rounded-2xl p-6"
                >
                  <div className="flex items-center space-x-3">
                    <CheckCircleIcon className="w-8 h-8 text-green-600" />
                    <div>
                      <h4 className="text-lg font-semibold text-green-800">
                        Reserva Enviada!
                      </h4>
                      <p className="text-green-700">
                        Entraremos em contato em breve para confirmar sua reserva.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 